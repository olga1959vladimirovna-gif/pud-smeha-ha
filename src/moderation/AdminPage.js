import { h, reactive, ref, onMounted, onUnmounted, nextTick } from 'vue';
import { db, gateway, canModerate, queue, saveStory } from './api.js';
import { validateStory, validEmail } from './validation.js';
import { Button, Field, Status, focusError, useDirtyGuard, guardDialog, LeaveDialog } from './ui.js';

const names = { pending: 'Ждут решения', approved: 'В Мешочке', rejected: 'За кулисами' };
const formatDate = (date) => new Intl.DateTimeFormat('ru-RU', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Europe/Moscow' }).format(new Date(date));
export default {
  name: 'AdminPage',
  setup() {
    const params = new URLSearchParams(location.search);
    const status = ref(Object.hasOwn(names, params.get('status')) ? params.get('status') : 'pending');
    const page = ref(Math.min(10000, Math.max(0, Number.parseInt(params.get('page'), 10) || 0)));
    const checking = ref(true), authorized = ref(false), signedIn = ref(false), loading = ref(false), busy = ref(false);
    const items = ref([]), total = ref(0), listError = ref(''), message = ref('');
    const email = ref(''), emailError = ref(''), loginMessage = ref(''), loginError = ref(''), loginBusy = ref(false);
    const original = ref(null), draft = reactive({ title: '', body: '', alias: '' }), errors = ref({}), saveError = ref('');
    const removal = ref(null);
    let sequence = 0, subscription;
    const dirty = () => original.value && ['title', 'body', 'alias'].some((key) => draft[key] !== original.value[key]);
    const guard = useDirtyGuard(dirty);
    function resetEditor() { original.value = null; errors.value = {}; saveError.value = ''; }
    async function load() {
      const current = ++sequence; loading.value = true; listError.value = '';
      try {
        const result = await queue(status.value, page.value);
        if (current !== sequence) return;
        items.value = result.items; total.value = result.total;
        if (page.value && !result.items.length) { page.value = Math.max(0, Math.ceil(result.total / 10) - 1); updateURL(); return load(); }
      } catch { if (current === sequence) listError.value = 'Очередь не загрузилась. Проверьте соединение или войдите снова.'; }
      finally { if (current === sequence) loading.value = false; }
    }
    async function verify() {
      checking.value = true;
      try {
        const session = await db.auth.getSession(); signedIn.value = Boolean(session.data.session);
        authorized.value = signedIn.value && await canModerate();
        if (authorized.value) { document.title = 'Комиссия Хихиканья · Пуд Смеха'; if (!original.value) await load(); }
        else document.title = 'Вход автора · Пуд Смеха';
      } catch { loginError.value = 'Не удалось проверить вход. Попробуйте ещё раз.'; }
      finally { checking.value = false; }
    }
    function updateURL() { history.replaceState(null, '', `/admin?status=${status.value}&page=${page.value}`); }
    function navigate(nextStatus, nextPage = 0) {
      if (busy.value) return;
      guard.ask(() => { resetEditor(); status.value = nextStatus; page.value = nextPage; updateURL(); message.value = ''; load(); });
    }
    async function login(event) {
      event.preventDefault(); if (loginBusy.value) return;
      emailError.value = validEmail(email.value) ? '' : 'Введите вашу почту в формате name@example.com.';
      if (emailError.value) { await nextTick(); document.getElementById('admin-email')?.focus(); return; }
      loginBusy.value = true; loginError.value = ''; loginMessage.value = '';
      try { await gateway({ action: 'login', email: email.value }); loginMessage.value = 'Если эта почта принадлежит автору сайта, письмо со ссылкой для входа отправлено. Проверьте также папку «Спам». Ссылку открывайте в этом браузере.'; }
      catch { loginError.value = 'Письмо не удалось отправить. Подождите несколько минут и повторите. Если ошибка остаётся, проверьте настройку почты в Supabase.'; }
      finally { loginBusy.value = false; }
    }
    function edit(item) {
      guard.ask(async () => {
        original.value = { ...item }; Object.assign(draft, { title: item.title, body: item.body, alias: item.alias }); errors.value = {}; saveError.value = ''; message.value = '';
        await nextTick(); document.getElementById('edit-title')?.focus();
      });
    }
    async function save(nextStatus) {
      if (busy.value) return;
      errors.value = validateStory(draft, false); saveError.value = '';
      if (Object.keys(errors.value).length) { focusError(errors.value, 'edit'); return; }
      busy.value = true;
      try {
        await saveStory(original.value, draft, nextStatus);
        message.value = nextStatus === 'approved' ? 'Байка сохранена в Мешочке и доступна читателям.' : nextStatus === 'rejected' ? 'Байка оставлена за кулисами. Её можно вернуть в Мешочек.' : 'Изменения сохранены. Байка пока ждёт решения.';
        resetEditor(); await load(); await nextTick(); document.getElementById('queue-heading')?.focus();
      } catch (error) { saveError.value = error.message; }
      finally { busy.value = false; }
    }
    function logout() {
      guard.ask(async () => {
        busy.value = true;
        try {
          const { error } = await db.auth.signOut({ scope: 'local' });
          if (error) throw error;
          resetEditor(); items.value = []; authorized.value = false; signedIn.value = false; email.value = ''; loginMessage.value = ''; message.value = ''; document.title = 'Вход автора · Пуд Смеха';
        } catch { message.value = 'Не удалось завершить выход. Попробуйте снова или закройте эту вкладку.'; }
        finally { busy.value = false; }
      });
    }
    onMounted(async () => {
      document.title = 'Вход автора · Пуд Смеха';
      await verify();
      subscription = db.auth.onAuthStateChange((event) => {
        if (event === 'SIGNED_OUT') { authorized.value = false; signedIn.value = false; items.value = []; }
        if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') setTimeout(verify, 0);
      }).data.subscription;
    });
    onUnmounted(() => { subscription?.unsubscribe(); sequence++; });
    return () => h('main', { class: 'bag-admin' }, [
      h('header', { class: 'bag-admin-header' }, [h('a', { href: '/' }, '← Вернуться в сказку'), authorized.value || signedIn.value ? Button('Выйти', logout, { busy: busy.value }) : null]),
      h('div', { class: 'bag-admin-title' }, [h('p', { class: 'bag-eyebrow' }, 'Кабинет автора'), h('h1', 'Комиссия Хихиканья'), h('p', 'Здесь байки ждут вашего доброго, но внимательного взгляда.')]),
      checking.value ? Status('Проверяем вход…') : null,
      !authorized.value && !checking.value ? h('section', { class: 'bag-login', 'aria-labelledby': 'login-title' }, [
        h('h2', { id: 'login-title' }, loginError.value && signedIn.value ? 'Не удалось проверить доступ' : signedIn.value ? 'Этому аккаунту доступ закрыт' : 'Вход по письму'),
        h('p', signedIn.value ? 'Кабинет доступен только владельцу сайта. Выйдите и используйте почту автора.' : 'Введите почту автора. Пришлём одноразовую ссылку — придумывать пароль не нужно.'),
        !signedIn.value ? h('form', { novalidate: true, onSubmit: login }, [Field('admin-email', 'Электронная почта', email.value, (value) => { email.value = value; }, emailError.value, { type: 'email', autocomplete: 'email', required: true, disabled: loginBusy.value }), Button(loginBusy.value ? 'Отправляем письмо…' : 'Получить ссылку для входа', undefined, { type: 'submit', primary: true, busy: loginBusy.value }), Status(loginError.value || loginMessage.value, Boolean(loginError.value))]) : null,
        signedIn.value && loginError.value ? Status(loginError.value, true) : null,
        Button('Проверить вход снова', verify, { busy: checking.value }),
      ]) : null,
      authorized.value ? h('section', { 'aria-labelledby': 'queue-heading' }, [
        h('nav', { class: 'bag-admin-filters', 'aria-label': 'Состояние баек' }, Object.entries(names).map(([key, label]) => h('a', { href: `/admin?status=${key}&page=0`, 'aria-current': status.value === key ? 'page' : undefined, onClick(event) { event.preventDefault(); navigate(key); } }, label))),
        h('h2', { id: 'queue-heading', tabindex: -1 }, names[status.value]),
        Status(message.value),
        original.value ? h('form', { class: 'bag-editor', novalidate: true, onSubmit(event) { event.preventDefault(); save(original.value.status); } }, [
          h('h3', 'Редактирование байки'), h('p', { class: 'bag-field-hint' }, `Получена ${formatDate(original.value.created_at)} МСК. Статус: ${names[original.value.status]}.`),
          h('fieldset', { disabled: busy.value }, [h('legend', { class: 'sr-only' }, 'Текст байки'),
            Field('edit-title', 'Заголовок', draft.title, (value) => { draft.title = value; }, errors.value.title, { maxlength: 100, required: true }),
            Field('edit-body', 'Текст', draft.body, (value) => { draft.body = value; }, errors.value.body, { textarea: true, rows: 12, maxlength: 5000, required: true }),
            Field('edit-alias', 'Подпись', draft.alias, (value) => { draft.alias = value; }, errors.value.alias, { maxlength: 60 }),
            h('p', { class: 'bag-field-hint' }, original.value.status === 'approved' ? 'Сохранённые изменения сразу увидят читатели.' : '«В Мешочек» опубликует этот текст и подпись для всех посетителей.'),
            h('div', { class: 'bag-actions' }, [Button(original.value.status === 'approved' ? 'Сохранить опубликованную байку' : 'Сохранить текст', undefined, { type: 'submit', busy: busy.value }), original.value.status !== 'approved' ? Button('В Мешочек · опубликовать', () => save('approved'), { primary: true, busy: busy.value }) : null, original.value.status !== 'rejected' ? Button(original.value.status === 'approved' ? 'Убрать с сайта · за кулисы' : 'Оставить за кулисами', () => original.value.status === 'approved' ? removal.value = true : save('rejected'), { busy: busy.value }) : null, Button('Вернуться к очереди', () => guard.ask(resetEditor), { busy: busy.value })]),
          ]), Status(saveError.value, Boolean(saveError.value)),
        ]) : [
          Status(loading.value ? 'Загружаем очередь…' : listError.value, Boolean(listError.value)),
          listError.value ? Button('Повторить загрузку', load, { busy: loading.value }) : null,
          !loading.value && !listError.value && !items.value.length ? h('p', { class: 'bag-empty' }, status.value === 'pending' ? 'Новых баек пока нет. Комиссия может спокойно выпить чаю.' : 'Здесь пока нет баек. Все решения принимаете вы.') : null,
          !loading.value && !listError.value ? h('div', { class: 'bag-queue' }, items.value.map((item) => h('article', { key: item.id, class: 'bag-queue-item' }, [h('div', [h('p', { class: 'bag-field-hint' }, `${item.alias} · ${formatDate(item.created_at)} МСК`), h('h3', item.title), h('p', { class: 'bag-queue-excerpt' }, item.body.slice(0, 180) + (item.body.length > 180 ? '…' : ''))]), Button('Прочитать и решить', () => edit(item))]))) : null,
          h('nav', { class: 'bag-pagination', 'aria-label': 'Страницы очереди' }, [Button('← Назад', () => navigate(status.value, page.value - 1), { disabled: page.value === 0 || loading.value }), h('span', total.value ? `${page.value * 10 + 1}–${Math.min((page.value + 1) * 10, total.value)} из ${total.value}` : '0 баек'), Button('Далее →', () => navigate(status.value, page.value + 1), { disabled: (page.value + 1) * 10 >= total.value || loading.value })]),
        ],
      ]) : null,
      !authorized.value && original.value ? h('section', { class: 'bag-editor' }, [h('h2', 'Несохранённый текст'), h('p', 'Вход прервался. Скопируйте свой текст перед повторным входом.'), h('pre', { class: 'bag-story-copy' }, `${draft.title}\n\n${draft.body}\n\n${draft.alias}`)]) : null,
      guardDialog(guard),
      h(LeaveDialog, { pending: removal.value, title: 'Убрать байку с сайта?', description: 'Читатели перестанут видеть эту байку. Она останется за кулисами, и вы сможете опубликовать её снова.', cancelLabel: 'Оставить в Мешочке', confirmLabel: 'Убрать с сайта', onCancel: () => { removal.value = null; }, onLeave: () => { removal.value = null; save('rejected'); } }),
    ]);
  },
};

