import { test } from 'node:test';
import assert from 'node:assert/strict';
import { COLLECTION_KEY, readCollection, saveCollection } from '../src/collection.js';

const quotes = [{ emoji: '😊', text: 'Первая улыбка' }, { emoji: '🎒', text: 'Вторая улыбка' }];
function memoryStorage(value = null) {
  return { value, getItem() { return this.value; }, setItem(key, data) { assert.equal(key, COLLECTION_KEY); this.value = data; } };
}

test('собранные открытки и счётчик восстанавливаются после нового открытия', () => {
  const storage = memoryStorage();
  assert.equal(saveCollection(storage, [quotes[1]], 5), true);
  assert.deepEqual(readCollection(storage, quotes), { quotes: [quotes[1]], total: 5, available: true });
});
test('повреждённое хранилище не ломает коллекцию', () => {
  assert.deepEqual(readCollection(memoryStorage('{'), quotes), { quotes: [], total: 0, available: false });
  assert.equal(readCollection(memoryStorage('{"version":2,"quotes":[]}'), quotes).available, false);
});
test('из хранилища принимаются только известные открытки без дублей', () => {
  const storage = memoryStorage(JSON.stringify({version: 1, quotes: ['Первая улыбка', 'Первая улыбка', '<script>'], total: -10}));
  assert.deepEqual(readCollection(storage, quotes), { quotes: [quotes[0]], total: 0, available: true });
});
test('запрет или переполнение localStorage возвращает понятный статус', () => {
  const storage = { getItem() { throw new Error('denied'); }, setItem() { throw new Error('quota'); } };
  assert.equal(readCollection(storage, quotes).available, false);
  assert.equal(saveCollection(storage, quotes, 2), false);
});
