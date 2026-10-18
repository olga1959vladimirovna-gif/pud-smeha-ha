import { h, ref } from 'vue';

export default {
  name: 'SmileCinemaSection',
  setup() {
    const video = ref(null);
    const failed = ref(false);
    async function retry() {
      failed.value = false;
      video.value.load();
      try { await video.value.play(); } catch { failed.value = true; }
    }
    return () => h('section', {
      id: 'smile-cinema', class: 'smile-cinema bag-section', 'aria-labelledby': 'smile-cinema-heading',
    }, [h('div', { class: 'bag-section-inner smile-cinema-layout' }, [
      h('div', { class: 'smile-cinema-copy' }, [
        h('p', { class: 'smile-cinema-eyebrow' }, 'Знакомьтесь: Пончик'),
        h('h2', { id: 'smile-cinema-heading' }, 'Кино на одну улыбку'),
        h('h3', 'Котёнок и непослушный блинчик'),
        h('p', { class: 'smile-cinema-teaser' }, 'Пончик собирался спокойно позавтракать. Но у завтрака оказались свои планы.'),
        h('p', { class: 'smile-cinema-note' }, '5 секунд · Со звуком · Запуск по нажатию'),
        h('p', { class: 'smile-cinema-afterword' }, 'Иногда для хорошего настроения хватает одного очень непослушного блинчика.'),
      ]),
      h('figure', { class: 'smile-cinema-screen' }, [
        h('video', {
          ref: video, src: '/media/ponchik-pancake.mp4', poster: '/media/ponchik-pancake.webp',
          width: 480, height: 854, controls: true, playsinline: true, preload: 'none',
          'aria-label': 'Котёнок и непослушный блинчик — мультфильм, 5 секунд',
          'aria-describedby': 'ponchik-description',
          onError: () => { failed.value = true; }, onPlaying: () => { failed.value = false; },
        }, 'Ваш браузер не поддерживает встроенное видео.'),
        h('figcaption', { id: 'ponchik-description' }, 'Рыжий котёнок, озорной блинчик и завтрак, который пошёл не по плану.'),
        failed.value ? h('div', { class: 'smile-cinema-error' }, [
          h('p', { role: 'alert' }, 'Ролик не загрузился. Проверьте соединение и попробуйте ещё раз.'),
          h('button', { type: 'button', class: 'bag-button', onClick: retry }, 'Попробовать ещё раз'),
          h('a', { href: '/media/ponchik-pancake.mp4', target: '_blank', rel: 'noopener' }, 'Открыть ролик отдельно'),
        ]) : null,
      ]),
    ])]);
  },
};
