import { createClient } from '@supabase/supabase-js';

export const url = 'https://icbcyfubxgwqzugsjxeg.supabase.co';
// Publishable key is intentionally public. Authorization is enforced by RLS.
export const publicKey = 'sb_publishable_NR_BUJCCCZS-Bv9WgGf5tA_bpE1t1xh';
const memory = new Map();
const storage = {
  getItem(key) { try { return sessionStorage.getItem(key); } catch { return memory.get(key) ?? null; } },
  setItem(key, value) { try { sessionStorage.setItem(key, value); } catch { memory.set(key, value); } },
  removeItem(key) { memory.delete(key); try { sessionStorage.removeItem(key); } catch { /* memory-only session */ } },
};
export const db = createClient(url, publicKey, {
  auth: { storage, storageKey: 'bag-admin-session', persistSession: true, detectSessionInUrl: true, autoRefreshToken: true },
  global: { fetch: (input, init) => fetch(input, { ...init, signal: init?.signal ? AbortSignal.any([init.signal, AbortSignal.timeout(20000)]) : AbortSignal.timeout(20000) }) },
});
const columns = 'id,title,body,alias,status,created_at,updated_at,version';
export async function gateway(payload) {
  let response;
  try { response = await fetch(`${url}/functions/v1/bag-gateway`, {
    method: 'POST', headers: { 'Content-Type': 'application/json', apikey: publicKey },
    body: JSON.stringify(payload), signal: AbortSignal.timeout(25000),
  }); } catch { throw new Error('Не удалось связаться с Мешочком. Ваш текст остался в форме. Проверьте соединение и попробуйте ещё раз.'); }
  if (!response.ok) throw new Error(response.status === 429 ? 'Слишком много попыток. Подождите немного и попробуйте снова.' : 'Сейчас не удалось получить подтверждение. Ваш текст остался в форме — попробуйте ещё раз.');
  return response.json();
}
export async function published(offset = 0) {
  const { data, error } = await db.from('bag_stories').select(columns).eq('status', 'approved').order('created_at', { ascending: false }).order('id').range(offset, offset + 6);
  if (error) throw error;
  return { items: data.slice(0, 6), more: data.length > 6 };
}
export async function canModerate() {
  const { data: { user }, error } = await db.auth.getUser();
  if (error) throw new Error('Не удалось проверить вход. Проверьте соединение и попробуйте ещё раз.');
  if (!user) return false;
  const result = await db.rpc('bag_can_moderate');
  if (result.error) throw new Error('Не удалось проверить доступ. Проверьте соединение и попробуйте ещё раз.');
  return result.data === true;
}
export async function queue(status, page) {
  const { data, error, count } = await db.from('bag_stories').select(columns, { count: 'exact' }).eq('status', status).order('created_at', { ascending: false }).order('id').range(page * 10, page * 10 + 9);
  if (error) throw error;
  return { items: data, total: count };
}
export async function saveStory(original, draft, status) {
  if (!await canModerate()) throw new Error('Вход истёк или доступ закрыт. Войдите снова; введённый текст останется на экране.');
  const { data, error } = await db.from('bag_stories').update({ title: draft.title.trim(), body: draft.body.trim(), alias: draft.alias.trim() || 'Гость Мешочка', status }).eq('id', original.id).eq('version', original.version).select(columns);
  if (error) throw new Error('Изменения не подтверждены. Проверьте соединение и попробуйте снова.');
  if (!data?.length) throw new Error('Эта байка уже изменилась в другой вкладке. Ваш ввод сохранён на экране. Откройте очередь в новой вкладке и сравните версии перед повторным сохранением.');
  return data[0];
}
