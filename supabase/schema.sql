-- Moderation schema. Owner email is provisioned separately, never in public source.
create schema if not exists bag_private;
revoke all on schema bag_private from public, anon, authenticated;
create table bag_private.owner_emails (email text primary key);
alter table bag_private.owner_emails enable row level security;
grant usage on schema bag_private to service_role;
grant select on bag_private.owner_emails to service_role;
create policy "Service reads configured owners" on bag_private.owner_emails for select to service_role using (true);
create function public.bag_owner_login_allowed(login_email text) returns boolean language sql stable security invoker set search_path='' as $$
 select exists (select 1 from bag_private.owner_emails where email=lower(btrim(login_email)));
$$;
revoke all on function public.bag_owner_login_allowed(text) from public, anon, authenticated;
grant execute on function public.bag_owner_login_allowed(text) to service_role;

create function bag_private.can_moderate() returns boolean
language sql stable security definer set search_path = '' as $$
 select auth.uid() is not null and exists (
   select 1 from auth.users u join bag_private.owner_emails o on lower(u.email) = o.email
   where u.id = auth.uid() and u.email_confirmed_at is not null
     and (u.banned_until is null or u.banned_until < now())
     and exists (select 1 from auth.sessions s where s.user_id = u.id
       and s.id::text = (auth.jwt()->>'session_id'))
 );
$$;
revoke all on function bag_private.can_moderate() from public, anon;
grant usage on schema bag_private to authenticated;
grant execute on function bag_private.can_moderate() to authenticated;

create table public.bag_stories (
 id uuid primary key,
 title text not null check (char_length(btrim(title)) between 3 and 100),
 body text not null check (char_length(btrim(body)) between 20 and 5000),
 alias text not null default 'Гость Мешочка' check (char_length(btrim(alias)) between 1 and 60),
 status text not null default 'pending' check (status in ('pending','approved','rejected')),
 consent boolean not null check (consent = true),
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now(),
 version integer not null default 1
);
create index bag_stories_status_created on public.bag_stories(status, created_at desc, id);
create index bag_stories_created on public.bag_stories(created_at desc);
alter table public.bag_stories enable row level security;
grant all on public.bag_stories to service_role;
revoke all on public.bag_stories from anon, authenticated;
grant select on public.bag_stories to anon, authenticated;
grant update(title, body, alias, status) on public.bag_stories to authenticated;
create policy "Read published stories" on public.bag_stories for select to anon, authenticated using (status = 'approved');
create policy "Owner reads queue" on public.bag_stories for select to authenticated using ((select bag_private.can_moderate()));
create policy "Owner moderates" on public.bag_stories for update to authenticated using ((select bag_private.can_moderate())) with check ((select bag_private.can_moderate()));

create function bag_private.story_version() returns trigger language plpgsql set search_path = '' as $$
begin new.version := old.version + 1; new.updated_at := now(); return new; end;
$$;
revoke all on function bag_private.story_version() from public, anon, authenticated;
create trigger bag_story_version before update on public.bag_stories for each row execute function bag_private.story_version();

create function public.bag_can_moderate() returns boolean language sql stable security invoker set search_path = '' as $$ select bag_private.can_moderate(); $$;
revoke all on function public.bag_can_moderate() from public, anon;
grant execute on function public.bag_can_moderate() to authenticated;

-- Only the edge service can submit. Advisory lock makes global limits atomic.
create function public.bag_submit_story(story_id uuid, story_title text, story_body text, story_alias text) returns boolean
language plpgsql security invoker set search_path = '' as $$
begin
 perform pg_advisory_xact_lock(124800712);
 if exists(select 1 from public.bag_stories where id = story_id) then return true; end if;
 if (select count(*) from public.bag_stories where created_at > now() - interval '1 minute') >= 5
 or (select count(*) from public.bag_stories where created_at > now() - interval '1 day') >= 100 then
   raise exception 'BAG_RATE_LIMIT';
 end if;
 insert into public.bag_stories(id,title,body,alias,consent) values(story_id,story_title,story_body,coalesce(nullif(btrim(story_alias),''),'Гость Мешочка'),true);
 return true;
end;
$$;
revoke all on function public.bag_submit_story(uuid,text,text,text) from public, anon, authenticated;
grant execute on function public.bag_submit_story(uuid,text,text,text) to service_role;
