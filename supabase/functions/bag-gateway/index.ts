import { createClient } from 'npm:@supabase/supabase-js@2.118.0';

const site = 'https://pud-smeha-ha.vercel.app';
const origins = new Set([site, 'http://localhost:4176', 'http://localhost:4175']);
const client = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, {
  auth: { persistSession: false, autoRefreshToken: false },
  global: { fetch: (url, init) => fetch(url, { ...init, signal: AbortSignal.timeout(20000) }) },
});

Deno.serve(async (req) => {
  const origin = req.headers.get('origin');
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': origin && origins.has(origin) ? origin : site,
    'Access-Control-Allow-Headers': 'authorization, apikey, content-type, x-client-info',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Cache-Control': 'no-store', 'Vary': 'Origin',
  };
  const reply = (status: number, data: object) => new Response(JSON.stringify(data), { status, headers });
  if (origin && !origins.has(origin)) return reply(403, { error: 'origin' });
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  if (req.method !== 'POST') return reply(405, { error: 'method' });
  if (Number(req.headers.get('content-length') || 0) > 30000) return reply(413, { error: 'size' });
  try {
    const text = await req.text();
    if (text.length > 15000) return reply(413, { error: 'size' });
    const data = JSON.parse(text);
    if (data.action === 'login') {
      const email = typeof data.email === 'string' ? data.email.trim().toLowerCase() : '';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) return reply(400, { error: 'email' });
      const allowed = await client.rpc('bag_owner_login_allowed', { login_email: email });
      if (allowed.error) return reply(503, { error: 'unavailable' });
      if (!allowed.data) return reply(200, { ok: true });
      const { error } = await client.auth.signInWithOtp({ email, options: { shouldCreateUser: true, emailRedirectTo: `${site}/admin` } });
      if (error) return reply(error.status === 429 ? 429 : 503, { error: error.status === 429 ? 'rate_limit' : 'email_unavailable' });
      return reply(200, { ok: true });
    }
    if (data.action !== 'submit' || data.consent !== true || data.website) return reply(400, { error: 'validation' });
    const title = typeof data.title === 'string' ? data.title.trim() : '';
    const body = typeof data.body === 'string' ? data.body.trim() : '';
    const alias = typeof data.alias === 'string' ? data.alias.trim() : '';
    const length = (s: string) => [...s].length;
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(data.id || '') ||
      length(title) < 3 || length(title) > 100 || length(body) < 20 || length(body) > 5000 || length(alias) > 60)
      return reply(400, { error: 'validation' });
    const { error } = await client.rpc('bag_submit_story', { story_id: data.id, story_title: title, story_body: body, story_alias: alias });
    if (error) return reply(error.message.includes('BAG_RATE_LIMIT') ? 429 : 503, { error: error.message.includes('BAG_RATE_LIMIT') ? 'rate_limit' : 'unavailable' });
    return reply(201, { ok: true });
  } catch { return reply(503, { error: 'unavailable' }); }
});
