import { h } from 'vue';

export default {
  name: 'EverydaySmileSection',
  setup() {
    return () => h('section', {
      id: 'smile-every-day', class: 'everyday-smile bag-section', 'aria-labelledby': 'everyday-smile-heading',
    }, [h('div', { class: 'bag-section-inner everyday-smile-layout' }, [
      h('figure', { class: 'everyday-smile-picture' }, [h('img', {
        src: '/illustrations/smile-every-day.webp', width: 1024, height: 1024,
        loading: 'lazy', decoding: 'async',
        alt: 'Улыбающийся малыш на фоне радуги. Надпись: «Улыбайтесь всегда! Это так просто — улыбнитесь и подарите свою улыбку другим!»',
      })]),
      h('div', { class: 'everyday-smile-copy' }, [
        h('p', { class: 'everyday-smile-eyebrow' }, 'Из календаря Мешочка'),
        h('h2', { id: 'everyday-smile-heading' }, 'А почему только первого апреля?'),
        h('p', 'Однажды Мешочек заглянул в календарь и удивился:'),
        h('p', { class: 'everyday-smile-quote' }, '— Для смеха выделили всего один день? А остальные дни что — ходить с лицом неоплаченной квитанции?'),
        h('p', 'Подумал немного и открыл свой календарь. Там напротив каждого дня было написано: «Можно улыбаться».'),
        h('p', 'С тех пор у нас День смеха бывает и в понедельник, и в дождь, и когда суп убежал, а кот делает вид, что впервые об этом слышит.'),
        h('p', 'Не обязательно хохотать до слёз. Иногда достаточно тихого «хи-хи», смешной истории или улыбки, подаренной другому.'),
        h('p', { class: 'everyday-smile-invitation' }, [h('strong', 'Календарь разрешения не требует.'), h('br'), 'Заходите, когда захочется немного тепла.']),
        h('a', { href: '#therapy', class: 'bag-button bag-button-primary' }, 'Забрать маленькую радость'),
      ]),
    ])]);
  },
};
