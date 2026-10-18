import { h, reactive, ref, onMounted } from 'vue';
import { gateway, published } from './api.js';
import { validateStory } from './validation.js';
import { Field, Button, Status, focusError, useDirtyGuard, guardDialog } from './ui.js';

export default {
  name: 'VisitorStories',
  setup() {
    const draft = reactive({ title: '', body: '', alias: '', consent: false, website: '' });
    const errors = ref({}), sending = ref(false), message = ref(''), failure = ref('');
    const items = ref([]), loading = ref(false), listError = ref(''), more = ref(false);
    let submission = null, fingerprint = '', submittedFingerprint = '';
    const snapshot = () => JSON.stringify(draft);
    const dirty = () => Boolean(draft.title || draft.body || draft.alias) && snapshot() !== submittedFingerprint;
    const guard = useDirtyGuard(dirty);
    async function load() {
      if (loading.value) return;
      loading.value = true; listError.value = '';
      try { const result = await published(items.value.length); items.value.push(...result.items); more.value = result.more; }
      catch { listError.value = 'Байки сейчас не загрузились. Попробуйте ещё раз — остальная сказка доступна.'; }
      finally { loading.value = false; }
    }
    async function send(event) {
      event.preventDefault(); if (sending.value) return;
      message.value = ''; failure.value = ''; errors.value = validateStory(draft);
      if (Object.keys(errors.value).length) { focusError(errors.value, 'story'); return; }
      const current = snapshot();
      if (current !== fingerprint) { submission = crypto.randomUUID(); fingerprint = current; }
      sending.value = true;
      try {
        await gateway({ action: 'submit', ...draft, id: submission });
        submittedFingerprint = current;
        message.value = 'Байка отправилась на заседание Комиссии Хихиканья. После одобрения она появится в Мешочке.';
        Object.assign(draft, { title: '', body: '', alias: '', consent: false, website: '' });
        fingerprint = ''; submission = null;
      } catch (error) { failure.value = error.message; }
      finally { sending.value = false; }
    }
    onMounted(load);
    return () => h('section', { id: 'visitor-stories', class: 'bag-section visitor-stories', 'aria-labelledby': 'visitor-heading' }, [
      h('div', { class: 'bag-section-inner' }, [
        h('header', { class: 'bag-section-heading' }, [h('span', { class: 'section-emoji', 'aria-hidden': 'true' }, '✉️'), h('h2', { id: 'visitor-heading' }, 'Байки из общего Мешочка'), h('p', 'Маленькие истории, которыми поделились наши читатели. Добрые, смешные и немножко невероятные.')]),
        h('div', { class: 'reader-stories', 'aria-busy': loading.value ? 'true' : undefined }, items.value.map((item) => h('article', { key: item.id, class: 'reader-story' }, [h('p', { class: 'bag-eyebrow' }, item.alias), h('h3', item.title), h('p', { class: 'bag-story-copy' }, item.body)]))),
        !loading.value && !listError.value && !items.value.length ? h('p', { class: 'bag-empty' }, 'Здесь пока тихо. Первая одобренная байка станет началом общего Мешочка.') : null,
        Status(loading.value ? 'Открываем Мешочек…' : listError.value, Boolean(listError.value)),
        more.value || listError.value ? h('div', { class: 'load-more-row' }, [Button(listError.value ? 'Попробовать ещё раз' : 'Ещё байки', load, { busy: loading.value })]) : null,
        h('div', { id: 'tell-story', class: 'bag-letter' }, [
          h('div', { class: 'bag-letter-intro' }, [h('img', { src: '/illustrations/mail.webp', alt: '', width: 260, height: 174, loading: 'lazy' }), h('h3', 'Положить свою байку в Мешочек'), h('p', 'Расскажите о забавном случае. Можно подписаться псевдонимом или остаться Гостем Мешочка. Почта и регистрация не нужны.')]),
          h('form', { novalidate: true, onSubmit: send, 'aria-busy': sending.value ? 'true' : undefined }, [
            h('fieldset', { disabled: sending.value }, [
              h('legend', { class: 'sr-only' }, 'Ваша байка'),
              Field('story-title', 'Как назовём байку?', draft.title, (v) => { draft.title = v; }, errors.value.title, { maxlength: 100, required: true, hint: 'От 3 до 100 символов.' }),
              Field('story-body', 'Ваша история', draft.body, (v) => { draft.body = v; }, errors.value.body, { textarea: true, rows: 8, maxlength: 5000, required: true, hint: 'От 20 до 5000 символов. Без телефонов, адресов и других личных данных.' }),
              Field('story-alias', 'Имя или псевдоним — необязательно', draft.alias, (v) => { draft.alias = v; }, errors.value.alias, { maxlength: 60, autocomplete: 'off', hint: 'Если оставить пустым, подпишем «Гость Мешочка».' }),
              h('div', { class: 'bag-honeypot', 'aria-hidden': 'true' }, [h('label', { for: 'story-website' }, 'Оставьте это поле пустым'), h('input', { id: 'story-website', tabindex: -1, autocomplete: 'off', value: draft.website, onInput: (e) => { draft.website = e.target.value; } })]),
              h('label', { class: 'bag-consent', for: 'story-consent' }, [h('input', { id: 'story-consent', type: 'checkbox', checked: draft.consent, 'aria-invalid': errors.value.consent ? 'true' : undefined, 'aria-describedby': 'story-consent-help', onChange: (e) => { draft.consent = e.target.checked; } }), h('span', 'Разрешаю опубликовать эту байку и подпись на сайте после одобрения. История моя, и я не раскрываю чужие личные данные.')]),
              h('p', { id: 'story-consent-help', class: 'bag-field-error' }, errors.value.consent || '\u00a0'),
              Button(sending.value ? 'Передаём комиссии…' : 'Отправить на модерацию', undefined, { type: 'submit', primary: true, busy: sending.value }),
            ]),
            Status(failure.value || message.value, Boolean(failure.value)),
            h('p', { class: 'bag-field-hint' }, 'Сохраняем только текст байки и подпись. До одобрения они видны только автору сайта. Не добавляем рекламные трекеры; технические журналы хостинга обрабатываются его провайдерами.'),
          ]),
        ]),
        h('p', { class: 'bag-admin-link' }, [h('a', { href: '/admin' }, 'Вход для автора · Комиссия Хихиканья')]),
      ]), guardDialog(guard),
    ]);
  },
};
