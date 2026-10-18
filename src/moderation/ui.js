import { h, nextTick, onMounted, onUnmounted, ref, watch, useId } from 'vue';

export function Status(message, error = false) {
  return h('div', { class: ['bag-status', error ? 'bag-status-error' : ''], role: error ? 'alert' : 'status' }, message || '');
}
export function Field(id, label, value, update, error, options = {}) {
  const { textarea, hint, ...attrs } = options;
  return h('div', { class: 'bag-field' }, [
    h('label', { for: id }, label),
    h(textarea ? 'textarea' : 'input', {
      id, value, ...attrs, 'aria-invalid': error ? 'true' : undefined,
      'aria-describedby': `${id}-help`, style: textarea ? { resize: 'none' } : undefined,
      onInput(event) { update(event.target.value); if (textarea) { event.target.style.height = 'auto'; event.target.style.height = `${event.target.scrollHeight}px`; } },
    }),
    h('p', { id: `${id}-help`, class: error ? 'bag-field-error' : 'bag-field-hint' }, error || hint || '\u00a0'),
  ]);
}
export const Button = (label, action, { primary = false, busy = false, disabled = false, ...props } = {}) => h('button', {
  type: 'button', ...props, class: ['bag-button', primary ? 'bag-button-primary' : '', props.class],
  onClick: action, disabled: busy || disabled, 'aria-busy': busy ? 'true' : undefined,
}, label);
export async function focusError(errors, prefix) {
  await nextTick(); document.getElementById(`${prefix}-${Object.keys(errors)[0]}`)?.focus();
}
export function useDirtyGuard(isDirty) {
  const pending = ref(null);
  let leaving = false;
  function ask(action) { if (isDirty()) pending.value = action; else action(); }
  function unload(event) { if (isDirty() && !leaving) { event.preventDefault(); event.returnValue = ''; } }
  function link(event) {
    if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.button !== 0) return;
    const a = event.target.closest?.('a[href]');
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
    const target = new URL(a.href, location.href);
    if (target.pathname === location.pathname && target.origin === location.origin && target.search === location.search) return;
    if (isDirty()) { event.preventDefault(); ask(() => location.assign(a.href)); }
  }
  onMounted(() => { window.addEventListener('beforeunload', unload); document.addEventListener('click', link); });
  onUnmounted(() => { window.removeEventListener('beforeunload', unload); document.removeEventListener('click', link); });
  return { pending, ask, leave() { const action = pending.value; pending.value = null; leaving = true; action?.(); setTimeout(() => { leaving = false; }, 1000); } };
}
export const LeaveDialog = {
  props: ['pending', 'title', 'description', 'cancelLabel', 'confirmLabel'], emits: ['cancel', 'leave'],
  setup(props, { emit }) {
    const dialog = ref(null);
    const id = useId();
    let previousFocus;
    watch(() => props.pending, async (value) => {
      await nextTick();
      if (value && !dialog.value.open) { previousFocus = document.activeElement; dialog.value.showModal(); dialog.value.querySelector('button')?.focus(); }
      else if (!value && dialog.value.open) { dialog.value.close(); if (previousFocus?.isConnected) previousFocus.focus(); }
    });
    return () => h('dialog', {
      ref: dialog, class: 'bag-dialog', 'aria-labelledby': `${id}-title`, 'aria-describedby': `${id}-description`,
      onCancel(event) { event.preventDefault(); emit('cancel'); },
    }, [h('h2', { id: `${id}-title` }, props.title || 'Оставить несохранённый текст?'), h('p', { id: `${id}-description` }, props.description || 'На этой странице есть изменения. При уходе они потеряются.'),
      h('div', { class: 'bag-actions' }, [Button(props.cancelLabel || 'Продолжить писать', () => emit('cancel'), { primary: true }), Button(props.confirmLabel || 'Уйти без сохранения', () => emit('leave'))])]);
  },
};
export function guardDialog(guard) {
  return h(LeaveDialog, { pending: guard.pending.value, onCancel: () => { guard.pending.value = null; }, onLeave: guard.leave });
}

