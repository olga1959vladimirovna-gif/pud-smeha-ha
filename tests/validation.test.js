import test from 'node:test';
import assert from 'node:assert/strict';
import { validateStory, validEmail } from '../src/moderation/validation.js';

const valid = { title: 'Чайник задумался', body: 'Сегодня чайник решил, что он маленький паровоз.', alias: '', consent: true };
test('anonymous submission accepts no name but requires explicit consent', () => {
  assert.deepEqual(validateStory(valid), {});
  assert.ok(validateStory({ ...valid, consent: false }).consent);
  assert.deepEqual(validateStory({ ...valid, consent: false }, false), {});
});
test('bounds match database characters, including unicode and whitespace', () => {
  assert.ok(validateStory({ ...valid, title: '  а ' }).title);
  assert.ok(validateStory({ ...valid, body: ' '.repeat(30) }).body);
  assert.ok(validateStory({ ...valid, alias: 'я'.repeat(61) }).alias);
  assert.equal(validateStory({ ...valid, title: '🙂'.repeat(100) }).title, undefined);
  assert.ok(validateStory({ ...valid, title: '🙂'.repeat(101) }).title);
});
test('email input rejects missing domain and oversized values', () => {
  assert.equal(validEmail(' writer@example.com '), true);
  assert.equal(validEmail('writer@'), false);
  assert.equal(validEmail('a'.repeat(255) + '@example.com'), false);
});
