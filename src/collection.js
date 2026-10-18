export const COLLECTION_KEY = 'pud-smeha.collection.v1';

export function readCollection(storage, quotes) {
  try {
    const raw = storage.getItem(COLLECTION_KEY);
    if (!raw) return { quotes: [], total: 0, available: true };
    const saved = JSON.parse(raw);
    if (saved.version !== 1 || !Array.isArray(saved.quotes)) throw new Error('format');
    const known = new Set(saved.quotes.filter(text => typeof text === 'string'));
    return {
      quotes: quotes.filter(quote => known.has(quote.text)),
      total: Number.isSafeInteger(saved.total) && saved.total >= 0 ? Math.min(saved.total, 1000000) : 0,
      available: true,
    };
  } catch {
    return { quotes: [], total: 0, available: false };
  }
}

export function saveCollection(storage, quotes, total) {
  try {
    storage.setItem(COLLECTION_KEY, JSON.stringify({ version: 1, quotes: quotes.map(q => q.text), total }));
    return true;
  } catch {
    return false;
  }
}
