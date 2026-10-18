export function validateStory(value, requireConsent = true) {
  const errors = {};
  const length = (s) => [...String(s || '').trim()].length;
  if (length(value.title) < 3 || length(value.title) > 100) errors.title = 'Нужно от 3 до 100 символов в заголовке.';
  if (length(value.body) < 20 || length(value.body) > 5000) errors.body = 'Напишите от 20 до 5000 символов.';
  if (length(value.alias) > 60) errors.alias = 'Имя или псевдоним — до 60 символов.';
  if (requireConsent && !value.consent) errors.consent = 'Для отправки нужно согласие на публикацию байки.';
  return errors;
}
export const validEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) && email.trim().length <= 254;
