import { defineComponent, h, ref } from 'vue';

const friendship = ['https://doi.org/10.1073/pnas.1524993113', 'Bryant и соавторы, PNAS, 2016'];
const children = ['https://doi.org/10.3389/fpsyg.2018.01048', 'Addyman и соавторы, Frontiers in Psychology, 2018'];
const bonding = ['https://doi.org/10.1098/rsos.202224', 'Dunbar и соавторы, Royal Society Open Science, 2021'];
export const facts = [
  { emoji: '🤝', title: 'Дружбу бывает слышно', text: 'Участники исследования из 24 обществ отличали смех друзей от смеха недавно познакомившихся людей лучше случайного угадывания. Мешочек подозревал, что у дружбы есть свой звук.', source: friendship },
  { emoji: '🎧', title: 'Иногда хватает короткого «ха-ха»', text: 'В том же эксперименте слушателям давали короткие записи совместного смеха без объяснения ситуации. Даже такие фрагменты несли информацию об отношениях людей.', source: friendship },
  { emoji: '🧒', title: 'В компании смеётся веселее', text: 'В эксперименте с дошкольниками дети чаще смеялись при совместном просмотре смешных видео, чем в одиночку. Это наблюдение в условиях исследования, а не дневная норма хохота.', source: children },
  { emoji: '🎬', title: 'Компания тоже участвует в шутке', text: 'В исследовании дошкольников сравнивали просмотр видео в одиночку, парами и группами. Учёные изучают не только саму шутку, но и то, кто смеётся рядом. Чайник в эксперимент не приглашали.', source: children },
  { emoji: '🫶', title: 'Смех и чувство близости', text: 'В двух экспериментах совместный смех усиливал ощущение социальной связи. Это наблюдение о взаимодействии людей, а не обещание сделать любого незнакомца лучшим другом.', source: bonding },
  { emoji: '🍪', title: 'Смеяться вместе — не значит отдать всё печенье', text: 'В той же работе авторы не получили устойчивого подтверждения, что смех повышает щедрость. Ощущать близость и делиться последней печенькой — всё-таки разные задачи.', source: bonding },
  { emoji: '🧦', title: 'Куда пропадают носки?', text: 'Носки уходят в отпуск по одному. Второй остаётся дома — поливать фикус и делать вид, что ничего не знает.' },
  { emoji: '🫖', title: 'Чайник первым понял жизнь', text: 'Закипел — посвистел — остыл. Ни одного гневного комментария. Учёный совет просит взять на заметку.' },
  { emoji: '🥟', title: 'Пельмени держатся вместе', text: 'Слипшиеся пельмени — это не кулинарная ошибка. Это команда, которая отказалась бросать своих в трудную минуту.' },
  { emoji: '🌵', title: 'Кактус тоже ждёт комплиментов', text: 'Просто фраза «какой ты мягкий и пушистый» ему не подходит. Попробуй: «Как уверенно ты отстаиваешь личные границы!»' },
  { emoji: '🦔', title: 'Зачем ёжик пошёл в лабораторию?', text: 'Проверить, действительно ли колкие замечания лучше хранить при себе. Научный руководитель — подушка.' },
  { emoji: '🎒', title: 'Сколько весит добрая шутка?', text: 'Весы показали «ой, всё». Поэтому Мешочек меряет шутки улыбками: одна твоя, одна чужая — уже хороший запас.' },
];
export default defineComponent({
  name: 'FunFactsSection',
  setup() {
    const expanded = ref(false);
    return () => h('section', { id: 'facts', class: 'facts-section bag-section' }, [
      h('div', { class: 'bag-section-inner' }, [
        h('header', { class: 'bag-section-heading' }, [
          h('span', { class: 'section-emoji', 'aria-hidden': 'true' }, '🎪'),
          h('h2', {}, 'Факты и фантазии о смехе'),
          h('p', {}, 'Наблюдения учёных — со ссылками. Открытия НИИ Хихиканья — с доброй долей выдумки.'),
        ]),
        h('div', { id: 'fact-cards', class: 'facts-grid' }, (expanded.value ? facts : facts.slice(0, 6)).map((fact, i) =>
          h('details', { key: i, class: 'fact-card' }, [
            h('summary', {}, [
              h('span', { class: 'fact-emoji', 'aria-hidden': 'true' }, fact.emoji),
              h('span', { class: 'fact-summary' }, [h('span', { class: 'fact-kind' }, fact.source ? 'Исследование' : 'НИИ Хихиканья · выдумка'), h('span', { class: 'fact-title' }, fact.title), h('span', { class: 'fact-hint' }, 'Открыть карточку')]),
            ]),
            h('div', { class: 'fact-reveal-copy' }, [
              h('p', {}, fact.text),
              fact.source ? h('a', { href: fact.source[0], target: '_blank', rel: 'noopener noreferrer', class: 'fact-source' }, fact.source[1] + ' ↗') : null,
            ]),
          ]))),
        h('div', { class: 'load-more-row' }, [h('button', {
          type: 'button', class: 'bag-button', 'aria-expanded': expanded.value, 'aria-controls': 'fact-cards',
          onClick: () => { expanded.value = !expanded.value; if (!expanded.value) document.getElementById('facts')?.scrollIntoView({block: 'start'}); },
        }, expanded.value ? 'Показать меньше' : 'Ещё из Мешочка · 6 фантазий')]),
      ]),
    ]);
  },
});
