-- Run as database administrator. Every test fixture is rolled back.
begin;
insert into public.bag_stories(id,title,body,alias,status,consent) values
 ('00000000-0000-4000-8000-000000000001','Проверка политики','Тестовая запись для проверки политик доступа.','Тест','approved',true),
 ('00000000-0000-4000-8000-000000000002','Проверка очереди','Тестовая запись для проверки приватности очереди.','Тест','pending',true);
insert into auth.users(id,email,email_confirmed_at) select '00000000-0000-4000-8000-000000000010',email,now() from bag_private.owner_emails limit 1;
insert into auth.sessions(id,user_id) values ('00000000-0000-4000-8000-000000000020','00000000-0000-4000-8000-000000000010');
set local role anon;
do $$ begin
 if exists(select 1 from public.bag_stories where status='pending') then raise exception 'Pending data leaked to anon'; end if;
 if not exists(select 1 from public.bag_stories where id='00000000-0000-4000-8000-000000000001') then raise exception 'Public approved read failed'; end if;
end $$;
reset role;
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"00000000-0000-4000-8000-000000000099","role":"authenticated","session_id":"00000000-0000-4000-8000-000000000099"}',true);
do $$ declare changed int; begin
 if public.bag_can_moderate() then raise exception 'Non-owner authorized'; end if;
 if exists(select 1 from public.bag_stories where status='pending') then raise exception 'Pending data leaked to non-owner'; end if;
 update public.bag_stories set status='approved' where id='00000000-0000-4000-8000-000000000002';
 get diagnostics changed = row_count;
 if changed <> 0 then raise exception 'Non-owner update allowed'; end if;
end $$;
select set_config('request.jwt.claims','{"sub":"00000000-0000-4000-8000-000000000010","role":"authenticated","session_id":"00000000-0000-4000-8000-000000000020"}',true);
do $$ declare changed int; begin
 if not public.bag_can_moderate() then raise exception 'Owner denied'; end if;
 update public.bag_stories set title='Проверка одобрения',status='approved' where id='00000000-0000-4000-8000-000000000002' and version=1;
 get diagnostics changed = row_count;
 if changed <> 1 then raise exception 'Owner approval failed'; end if;
 if not exists(select 1 from public.bag_stories where id='00000000-0000-4000-8000-000000000002' and status='approved' and version=2) then raise exception 'Version trigger failed'; end if;
 update public.bag_stories set status='rejected' where id='00000000-0000-4000-8000-000000000002' and version=1;
 get diagnostics changed = row_count;
 if changed <> 0 then raise exception 'Stale update allowed'; end if;
end $$;
reset role;
delete from auth.sessions where id='00000000-0000-4000-8000-000000000020';
set local role authenticated;
do $$ begin if public.bag_can_moderate() then raise exception 'Revoked session allowed'; end if; end $$;
reset role;
rollback;
select 'PASS: anon read isolation; authenticated non-owner denied; owner approval; version conflict; revoked session denied; fixtures rolled back' as result;
