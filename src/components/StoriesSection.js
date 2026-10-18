import { defineComponent as _defineComponent } from 'vue';
import { createElementVNode as _createElementVNode } from 'vue';
import { createVNode as _createVNode } from 'vue';
import { createTextVNode as _createTextVNode } from 'vue';
import { normalizeClass as _normalizeClass } from 'vue';
import { renderList as _renderList } from 'vue';
import { Fragment as _Fragment } from 'vue';
import { openBlock as _openBlock } from 'vue';
import { createElementBlock as _createElementBlock } from 'vue';
import { toDisplayString as _toDisplayString } from 'vue';
import { createCommentVNode as _createCommentVNode } from 'vue';
import { normalizeStyle as _normalizeStyle } from 'vue';
import { vShow as _vShow } from 'vue';
import { withDirectives as _withDirectives } from 'vue';
import { createStaticVNode as _createStaticVNode } from 'vue';
import { ref as ref } from 'vue';
import { onMounted as onMounted } from 'vue';
import FloatingEmojis from './FloatingEmojis.js';


















const __exports = (() => {
  const __exports = {};
  const _hoisted_1 = {
    class: "stories-section py-20 px-4 relative overflow-hidden",
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:2"
  };
  const _hoisted_2 = {
    class: "space-y-8",
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:33"
  };
  const _hoisted_3 = ["onClick"];
  const _hoisted_4 = {
    class: "story-card__header",
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:48"
  };
  const _hoisted_5 = {
    class: "flex items-center gap-4 mb-2",
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:49"
  };
  const _hoisted_6 = {
    class: "text-4xl flex-shrink-0 story-emoji",
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:50"
  };
  const _hoisted_7 = {
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:51"
  };
  const _hoisted_8 = {
    class: "text-xl md:text-2xl font-bold text-stone-800 leading-tight",
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:52"
  };
  const _hoisted_9 = {
    class: "text-xs text-stone-400 font-medium flex items-center gap-1 mt-1",
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:55"
  };
  const _hoisted_10 = {
    class: "text-sm text-stone-500 mt-2 leading-relaxed pr-8",
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:61"
  };
  const _hoisted_11 = {
    class: "flex items-center justify-between mt-3 pt-3 border-t border-dashed border-stone-200",
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:64"
  };
  const _hoisted_12 = {
    class: "text-xs text-stone-400 flex items-center gap-1",
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:65"
  };
  const _hoisted_13 = {
    key: 0,
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:72"
  };
  const _hoisted_14 = {
    key: 1,
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:75"
  };
  const _hoisted_15 = {
    class: "story-card__body",
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:83"
  };
  const _hoisted_16 = {
    class: "story-card__content",
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:84"
  };
  const _hoisted_17 = {
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:91"
  };
  const _hoisted_18 = {
    class: "story-footer mt-6 pt-4 border-t border-dashed border-amber-200",
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:95"
  };
  const _hoisted_19 = {
    class: "flex items-center gap-2 text-amber-600",
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:96"
  };
  const _hoisted_20 = {
    class: "text-lg",
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:97"
  };
  const _hoisted_21 = {
    class: "text-sm italic",
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:98"
  };
  const _hoisted_22 = {
    key: 0,
    class: "flex justify-center my-2",
    "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:106"
  };
  const __sfc__ = _defineComponent({
    __name: 'StoriesSection',
    setup(__props) {
      const stories = [{
        emoji: '💼',
        title: 'Как я Пуд Смеха на собеседовании применял',
        tag: 'Жизненная история',
        teaser: 'Шёл я как-то на собеседование в серьёзную IT-компанию. Волновался — аж коленки тряслись. А тут в кармане — подаренный кем-то Мешочек. Ну, думаю, была не была…',
        readTime: '3 минуты',
        text: ['Шёл я как-то на собеседование в серьёзную IT-компанию. Финтех, строгий дресс-код, три этапа отбора. Волнуюсь так, что коленки трясутся, ладони потеют, а в голове — тараканы с дипломами репетируют защиту диссертации.', 'И тут вспоминаю — в рюкзаке же лежит заветный Мешочек! Мне его на дне рождения подарили: «Щепотка смеха для храбрости». Ну, думаю, была не была — зачерпнул щепотку, растёр между ладонями, глубоко вдохнул…', 'Секунду ничего не происходило. А потом — как прорвало! Захожу в переговорку, а там трое суровых дядек в пиджаках и одна тётенька с очень пронзительным взглядом. Руководитель мне: «Расскажите о себе». И тут я вместо стандартного «я ответственный, коммуникабельный» выдаю: «Я человек, который однажды попытался накормить кота борщом. Кот не оценил. Но я не сдаюсь!»', 'Тишина повисла такая, что было слышно, как где-то на соседнем этаже электрический чайник закипает. Но вдруг тётенька с пронзительным взглядом — хвать! — и захохотала. А потом и все остальные подтянулись. И понеслось: я рассказывал про своё «изобретение» — будильник, который вместо звонка орёт «Вставай, ленивая задница, тебя ждут великие дела!», про то, как учил попугая соседа говорить «кто там пришёл?» — и тот теперь пугает курьеров…', 'В общем, собеседование превратилось в стендап. Час ржача вместо стресса. И знаете что? Меня взяли. Сказали: «Нам нужен человек, который не боится быть живым». Теперь у нас в офисе каждую пятницу — «Час смеха». Я приношу Мешочек. А начал всё это — я сам, тогда, в той переговорке, когда решил: лучше посмеяться, чем бояться.', 'Так что, если идёте на важную встречу — прихватите щепотку смеха. Хуже точно не будет. А если будет — ну, хотя бы повеселитесь напоследок! 😄'],
        signEmoji: '😄',
        signature: 'Сергей, сеньор-программист и штатный клоун'
      }, {
        emoji: '👵',
        title: 'Бабушкин рецепт смеха',
        tag: 'Тёплая история',
        teaser: 'Приехал я к бабушке в деревню — сил нет, всё бесит, настроение — ниже плинтуса. А бабуля моя, царство ей небесное, была женщиной мудрой. Посмотрела на меня, покачала головой и полезла в чулан…',
        readTime: '4 минуты',
        text: ['Приехал я как-то к бабушке в деревню. Не в гости — лечиться. Потому что от городской жизни такое бывает: всё бесит, ничего не радует, а на вопрос «как дела?» хочется ответить матом в стихах. Бабуля глянула на меня с порога, покачала головой: «О, да ты, внучок, тяжёлый случай». И полезла в чулан.', 'Я думал — за настойкой. Ну, или за соленьями. А она приносит старенький мешочек, перевязанный выцветшей ленточкой. «Это, — говорит, — ещё твой дед собирал. Он у меня был тот ещё балагур».', 'Я смотрю на мешочек, она — на меня. И начинает рассказывать: как они с дедом познакомились (он уронил на неё арбуз с балкона, она сказала «ах ты, безрукий», а он ответил «это арбуз хотел быть ближе к прекрасному»), как на свадьбе так сплясали, что соседи вызвали милицию — думали, драка, а это была лезгинка вприсядку, как он на рыбалке вместо рыбы поймал соседского кота и три дня убеждал всех, что это новый вид «усатой щуки»…', 'Я сначала улыбался. Потом засмеялся. А потом уже ржал в голосину — до слёз, до икоты, до «ой, бабуль, хватит, у меня живот болит». А она сыпала и сыпала историями: как дед притворился статуей в парке, как нарядился Дедом Морозом летом и ходил поздравлял соседей с Новым годом…', 'Просидели мы так до полуночи. Чай пили с мятой и слушали, как за окном сверчки подпевают бабушкиному смеху. А наутро я проснулся — и мир снова был цветным. И понял я одну простую вещь: рецепт смеха-то простой — хорошая компания, тёплые воспоминания и кто-то, кто умеет над собой смеяться.', 'Спасибо тебе, бабуль. И деду. Мешочек теперь у меня на полке живёт. А когда грустно — я вспоминаю арбуз на балконе. И сразу легче. 🎒😊'],
        signEmoji: '🎒',
        signature: 'Андрей, внук и хранитель семейного рецепта'
      }, {
        emoji: '⚠️',
        title: 'Побочные эффекты смехотерапии',
        tag: 'Важное предупреждение',
        teaser: 'Минздрав Мешочка предупреждает: злоупотребление смехом может привести к необратимым последствиям! Читайте внимательно — мы предупредили, а там сами смотрите… 😈',
        readTime: '3 минуты',
        text: ['Уважаемые пациенты! Министерство здравоохранения Мешочка Пуда Смеха, на основании многолетних (ну, ладно, недельных) исследований, настоятельно рекомендует ознакомиться с возможными побочными эффектами перед применением.', '', '🥇 Непроизвольное хихиканье в общественном транспорте. Вы едете в метро, вспоминаете какую-нибудь ерунду, и — бац! — лыбитесь в пустоту, как идиот. Пассажиры напротив начинают подозревать, что у вас секретная переписка с телепатом. А вы просто вспомнили, как ваш кот пытался поймать солнечного зайчика на потолке.', '', '🥈 Внезапное желание обнимать незнакомцев. Опасный симптом! Поддавшись ему, вы рискуете: а) получить по морде, б) обрести нового лучшего друга, в) завести роман длиною в жизнь. Исход непредсказуем. Мы предупредили.', '', '🥉 Хроническая улыбка. Самое коварное последствие. Вы приходите на работу с улыбкой — начальник думает, что вы что-то сломали. Вы улыбаетесь бухгалтеру — он начинает подозревать, что вы хотите премию. Вы улыбаетесь охраннику — он решает, что вы заминировали здание. Лечится только ещё одним пудом смеха. Замкнутый круг, но приятный.', '', '🏅 В редких случаях — желание писать стихи. Отмечалось у 3 из 10 пациентов. Симптом проявляется внезапно: в очереди, в пробке, во время совещания. Человек начинает рифмовать всё подряд: «Колбаса и небеса, хороша моя краса». Вылечить невозможно. Мы даже не пытались.', '', '🎯 И последний, самый опасный побочный эффект — понимание, что весь мир, по большому счёту, — это большая и добрая шутка. И что все наши проблемы, тревоги и переживания — это просто повод… рассмеяться. Вот такой вот парадокс.', '', '⚠️ Помните: смех без назначения врача может быть опасен для вашей серьёзности! Принимайте по одной дозе в день, а лучше — по три. Побочные эффекты неизбежны. Но они того стоят. 😉'],
        signEmoji: '😈',
        signature: 'Доктор Хохоталкин, главный смехолог Мешочка'
      }, {
        emoji: '🐶',
        title: 'Хвостатый пациент смехотерапии',
        tag: 'Зооистория',
        teaser: 'У меня пёс породы «вечно-грустные-глаза». Всё бы ничего, но он так жалостно смотрел, что я начал подозревать — у собаки депрессия. Решил лечить проверенным способом…',
        readTime: '3 минуты',
        text: ['Познакомьтесь, это Бублик. Точнее, Бублик Третьего Сортного. Порода — уличный-коммунальный-с-бородой. Морда такая, что впору медаль давать «За скорбный взгляд». Серьёзно: он умеет смотреть так, будто я ему зарплату не плачу уже третий год.', 'И вот сидим мы как-то вечером. Я грустный, Бублик грустный. За окном дождь. Настроение — как мокрая кошка. И тут я вспоминаю про Мешочек. Думаю: а давай-ка и пса полечим? Вдруг и на собак работает?', 'Отсыпаю щепотку, дую на Бублика. Тот чихает, смотрит на меня с недоумением. Я начинаю ржать — просто так, за компанию. Бублик настораживается, наклоняет голову набок. Я ржу громче. Он начинает вертеть хвостом. Я уже в голос — и тут он как подпрыгнет! И давай носиться по квартире, подкидывая лапами, тявкать, тыкаться носом мне в коленки…', 'Короче, через полчаса мы оба валялись на ковре: я — от смеха, он — от усталости, но с языком на плече и счастливой улыбкой во всю собачью пасть. С тех пор у нас ритуал: если Бублик начинает грустить — я достаю Мешочек и мы «лечимся» вместе. Он даже научился приносить его зубами, когда чует, что мне плохо.', 'Теперь соседи здороваются: «О, весёлый Бублик идёт!» А я отвечаю: «Не-а, это я иду — просто Бублик мой личный индикатор счастья». Если пёс улыбается — значит, всё в мире хорошо. А если нет — щепотка смеха, и порядок. 🐶✨'],
        signEmoji: '🐕',
        signature: 'Дима и Бублик, палата № 7'
      }, {
        emoji: '🚗',
        title: 'Пробка, которая стала концертом',
        tag: 'Дорожная история',
        teaser: 'Стою я в пробке на МКАДе. Час стою. Два стою. Настроение — бензин с кислотой. Вокруг — такие же озлобленные водители. И тут я вспоминаю, что в бардачке лежит…',
        readTime: '4 минуты',
        text: ['Москва. МКАД. Пятница. Вечер. Три слова, от которых у любого автомобилиста дёргается глаз. Я простоял в этом аду два с половиной часа. Впереди — бампер газели, сзади — Lexus, который моргает дальним так, будто я лично обещал ему пролететь над пробкой.', 'Радио орёт что-то про плохую погоду, навигатор перестраивает маршрут уже в восьмой раз, а в голове зреет план: бросить машину прямо здесь, уйти пешком в лес и стать отшельником. Но вместо этого я полез в бардачок за салфетками — и нащупал Мешочек.', '— А, была не была, — говорю вслух и сыплю щепотку прямо в ладонь. Вдыхаю. Выдыхаю. И начинаю тихонько хихикать. Сначала про себя, потом вслух. Представляю, как выглядит эта картина со стороны: мужик в машине один сидит и ржёт, как конь. Через стекло вижу — сосед справа смотрит на меня с подозрением. Я ему улыбаюсь во весь рот и показываю большой палец. Он сперва хмурится, потом — о чудо! — начинает улыбаться в ответ.', 'Дальше — как снежный ком. Я открываю окно и ору: «Мужики! А давайте представим, что мы не в пробке, а на параде! Улыбаемся и машем!» Сосед слева — ржёт. Через ряд — сигналят весёлыми гудками. Кто-то начинает петь «Всё хорошо, прекрасная маркиза». Ещё через минуту вся наша полоса превращается в импровизированный караоке-клуб. Девушка в белой «Мазде» через два ряда машет руками в такт музыке. Дядька в «Ниве» надевает на зеркало заднего вида новогоднюю гирлянду — оказывается, возил с прошлого года!', 'Пробка рассосалась через полчаса. Но когда движение пошло — никто не сигналил, не подрезал и не злился. Мы все расходились (разъезжались) с улыбками, махали друг другу. А я теперь вожу Мешочек в бардачке постоянно. И знаете что? Пробки стали… терпимыми. А иногда даже желанными — вдруг новый концерт получится? 😄🚗'],
        signEmoji: '🚙',
        signature: 'Алексей, водитель-хохотун (стаж 12 лет в пробках)'
      }, {
        emoji: '🏖️',
        title: 'Как мы Пуд Смеха на море возили',
        tag: 'Курортная история',
        teaser: 'Поехали мы с друзьями на море. Погода — сказка, настроение — песня. Но на третий день случилось непредвиденное: мы потеряли ключ от номера, деньги и… ну, в общем, садитесь поудобнее.',
        readTime: '4 минуты',
        text: ['Поехали мы компанией на море. Четыре взрослых человека с чемоданами, надеждами и иллюзией, что мы умеем отдыхать цивилизованно. На третий день случилось всё, что могло случиться: мы потеряли ключ от номера (остался внутри), деньги (остались в номере, до которого нет ключа), и по ошибке взяли чужой шезлонг. Хозяйка шезлонга, тётенька в соломенной шляпе, обещала «надрать нас как сидоровых козлов» с помощью администрации отеля.', 'Сидим мы вечером на пирсе, грустные, без ключа, без денег, но с бутылкой минералки и пакетом сушек. И тут у самого младшего из нас, Костика, в рюкзаке находится… правильно, Мешочек. Костик — тот ещё проказник — засунул его в дорогу «на всякий случай».', '— Ну что, — говорит Костик, — будем лечить безнадёгу? — и сыплет щепотку смеха прямо в минералку. Выпили по глотку. Секунда молчания… и понеслось!', 'Мы начали вспоминать, как Костик пытался покорить волны на надувном единороге и свалился лицом в песок, как я пытался произнести «забронируйте шезлонг» на турецком и случайно предложил официанту дружбу до гроба, как Наташа загорала с открытой книжкой на голове, потому что забыла панаму… Минут через десять мы уже катались по пирсу от смеха, а проходящие мимо отдыхающие улыбались и качали головами: «Весёлая компания!»', 'А наутро выяснилось, что администратор отеля — весёлый дядька, который видел нас на пирсе. Он сам, без всяких штрафов, открыл нам номер запасным ключом и сказал: «Таких весёлых постояльцев у нас ещё не было. Приезжайте ещё!» Мы вернули шезлонг, извинились перед тётенькой в шляпе (она, кстати, оказалась бывшей клоунессой и мы с ней в итоге пошли ужинать), и провели остаток отпуска так, как и мечтали — с утра до вечера хохоча.', 'Мораль: если потерял ключи, деньги и чувство собственного достоинства — не отчаивайся. Щепотка смеха и хорошая компания решают всё. Даже если вы сидите на пирсе с сушками. 🏖️😊'],
        signEmoji: '🌊',
        signature: 'Компания «Курортный беспредел»: Костик, Наташа, Лена и автор'
      }];
      const storiesEmojis = [{
        emoji: '🗣️',
        left: '3%',
        top: '12%',
        anim: 'float',
        delay: 0,
        duration: 3.5,
        size: 26
      }, {
        emoji: '💼',
        left: '93%',
        top: '8%',
        anim: 'wobble',
        delay: 0.5,
        duration: 3,
        size: 24
      }, {
        emoji: '👵',
        left: '5%',
        top: '78%',
        anim: 'hop',
        delay: 0.8,
        duration: 4,
        size: 26
      }, {
        emoji: '⚠️',
        left: '92%',
        top: '82%',
        anim: 'pulse',
        delay: 1.2,
        duration: 3,
        size: 22
      }, {
        emoji: '📖',
        left: '50%',
        top: '4%',
        anim: 'twinkle',
        delay: 1.8,
        duration: 2,
        size: 20
      }, {
        emoji: '💬',
        left: '96%',
        top: '50%',
        anim: 'bounce',
        delay: 0.3,
        duration: 3.5,
        size: 18
      }, {
        emoji: '🐶',
        left: '94%',
        top: '20%',
        anim: 'hop',
        delay: 1.5,
        duration: 3.2,
        size: 22
      }, {
        emoji: '🚗',
        left: '4%',
        top: '50%',
        anim: 'drift',
        delay: 0.6,
        duration: 4.5,
        size: 24
      }, {
        emoji: '🏖️',
        left: '96%',
        top: '60%',
        anim: 'float',
        delay: 2.2,
        duration: 3.8,
        size: 22
      }];
      const openIdx = ref(null);
      const visible = ref(false);
      const sectionRef = ref(null);
      function toggleStory(idx) {
        if (openIdx.value === idx) {
          openIdx.value = null;
        } else {
          openIdx.value = idx;
        }
      }
      onMounted(() => {
        const observer = new IntersectionObserver(entries => {
          const entry = entries[0];
          if (entry?.isIntersecting) {
            visible.value = true;
            observer.disconnect();
          }
        }, {
          threshold: 0.1
        });
        if (sectionRef.value) observer.observe(sectionRef.value);
      });
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock("section", _hoisted_1, [_cache[6] || (_cache[6] = _createElementVNode("div", {
          class: "absolute inset-0 pointer-events-none",
          "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:4"
        }, [_createElementVNode("div", {
          class: "absolute top-12 left-1/4 text-5xl opacity-5",
          "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:5"
        }, "📖"), _createElementVNode("div", {
          class: "absolute bottom-20 right-1/4 text-6xl opacity-5",
          "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:6"
        }, "🗣️"), _createElementVNode("div", {
          class: "absolute top-1/2 right-8 text-4xl opacity-5",
          "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:7"
        }, "💬")], -1)), _createVNode(FloatingEmojis, {
          emojis: storiesEmojis
        }), _createElementVNode("div", {
          class: "max-w-4xl mx-auto relative z-10",
          ref_key: "sectionRef",
          ref: sectionRef,
          "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:13"
        }, [_createElementVNode("div", {
          class: _normalizeClass(["text-center mb-12", visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']),
          style: {
            "transition": "all 0.8s ease-out"
          },
          "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:15"
        }, [...(_cache[0] || (_cache[0] = [_createStaticVNode("<div class=\"inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-5 story-icon-ring\" data-srcloc=\"/pud-smeha-ha/components/StoriesSection.vue:20\" data-v-7553a2bd><span class=\"text-3xl\" data-srcloc=\"/pud-smeha-ha/components/StoriesSection.vue:21\" data-v-7553a2bd>🗣️</span></div><h2 class=\"text-3xl md:text-4xl font-bold text-stone-800 mb-3\" data-srcloc=\"/pud-smeha-ha/components/StoriesSection.vue:23\" data-v-7553a2bd> Байки из Мешочка </h2><p class=\"text-stone-500 text-lg max-w-2xl mx-auto\" data-srcloc=\"/pud-smeha-ha/components/StoriesSection.vue:26\" data-v-7553a2bd> Гости делятся историями — кто как Пуд Смеха применял,<br data-srcloc=\"/pud-smeha-ha/components/StoriesSection.vue:27\" data-v-7553a2bd> кто рецепт бабушкин вспомнил, а кто и побочки пережил 😄 </p>", 3)]))], 2), _createElementVNode("div", _hoisted_2, [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(stories, (story, idx) => {
          return _createElementVNode("div", {
            key: idx,
            class: _normalizeClass(["story-block", [visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']]),
            style: _normalizeStyle({
              transitionDelay: `${0.2 + idx * 0.15}s`
            }),
            "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:34"
          }, [_createElementVNode("div", {
            class: _normalizeClass(["story-card", {
              'story-card--open': openIdx.value === idx
            }]),
            onClick: $event => toggleStory(idx),
            "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:42"
          }, [_createElementVNode("div", _hoisted_4, [_createElementVNode("div", _hoisted_5, [_createElementVNode("span", _hoisted_6, _toDisplayString(story.emoji), 1), _createElementVNode("div", _hoisted_7, [_createElementVNode("h3", _hoisted_8, _toDisplayString(story.title), 1), _createElementVNode("span", _hoisted_9, [_cache[1] || (_cache[1] = _createElementVNode("i", {
            class: "fas fa-feather-alt text-amber-400",
            "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:56"
          }, null, -1)), _createTextVNode(" " + _toDisplayString(story.tag), 1)])])]), _createElementVNode("p", _hoisted_10, _toDisplayString(story.teaser), 1), _createElementVNode("div", _hoisted_11, [_createElementVNode("span", _hoisted_12, [_cache[2] || (_cache[2] = _createElementVNode("i", {
            class: "far fa-clock",
            "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:66"
          }, null, -1)), _createTextVNode(" " + _toDisplayString(story.readTime), 1)]), _createElementVNode("span", {
            class: _normalizeClass(["text-sm font-medium read-toggle", openIdx.value === idx ? 'text-amber-600' : 'text-amber-500']),
            "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:68"
          }, [openIdx.value !== idx ? (_openBlock(), _createElementBlock("span", _hoisted_13, [...(_cache[3] || (_cache[3] = [_createTextVNode(" Прочитать историю ", -1), _createElementVNode("i", {
            class: "fas fa-chevron-down text-xs ml-1",
            "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:73"
          }, null, -1)]))])) : (_openBlock(), _createElementBlock("span", _hoisted_14, [...(_cache[4] || (_cache[4] = [_createTextVNode(" Свернуть ", -1), _createElementVNode("i", {
            class: "fas fa-chevron-up text-xs ml-1",
            "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:76"
          }, null, -1)]))]))], 2)])]), _withDirectives(_createElementVNode("div", _hoisted_15, [_createElementVNode("div", _hoisted_16, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(story.text, (paragraph, pIdx) => {
            return _openBlock(), _createElementBlock("div", {
              key: pIdx,
              class: "story-paragraph",
              style: _normalizeStyle({
                animationDelay: `${0.1 + pIdx * 0.08}s`
              }),
              "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:85"
            }, [_createElementVNode("p", _hoisted_17, _toDisplayString(paragraph), 1)], 4);
          }), 128)), _createElementVNode("div", _hoisted_18, [_createElementVNode("div", _hoisted_19, [_createElementVNode("span", _hoisted_20, _toDisplayString(story.signEmoji), 1), _createElementVNode("span", _hoisted_21, "— " + _toDisplayString(story.signature), 1)])])])], 512), [[_vShow, openIdx.value === idx]])], 10, _hoisted_3), idx < stories.length - 1 ? (_openBlock(), _createElementBlock("div", _hoisted_22, [...(_cache[5] || (_cache[5] = [_createElementVNode("span", {
            class: "text-stone-300 text-lg",
            "data-srcloc": "/pud-smeha-ha/components/StoriesSection.vue:107"
          }, "· · ·", -1)]))])) : _createCommentVNode("", true)], 6);
        }), 64))])], 512)]);
      };
    }
  });
  ;
  (function () {
    const style = document.createElement('style');
    style.innerHTML = "\n.stories-section[data-v-7553a2bd] {\n  background: linear-gradient(180deg, #FFF7ED 0%, #FFFBEB 40%, #FEF3C7 70%, #FFF7ED 100%);\n}\n\n/* Animated header icon */\n.story-icon-ring[data-v-7553a2bd] {\n  animation: story-icon-pulse-7553a2bd 2.5s ease-in-out infinite;\n}\n@keyframes story-icon-pulse-7553a2bd {\n0%, 100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.3);\n}\n50% { box-shadow: 0 0 24px 12px rgba(245, 158, 11, 0.15); transform: scale(1.05);\n}\n}\n\n/* Story cards */\n.story-block[data-v-7553a2bd] {\n  transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n}\n.story-card[data-v-7553a2bd] {\n  background: rgba(255, 255, 255, 0.88);\n  backdrop-filter: blur(8px);\n  border-radius: 24px;\n  border: 2px solid #FDE68A;\n  overflow: hidden;\n  cursor: pointer;\n  transition: box-shadow 0.4s ease, border-color 0.4s ease, transform 0.3s ease;\n}\n.story-card[data-v-7553a2bd]:hover {\n  border-color: #F59E0B;\n  box-shadow: 0 12px 40px rgba(245, 158, 11, 0.15);\n  transform: translateY(-3px);\n}\n.story-card--open[data-v-7553a2bd] {\n  border-color: #F59E0B;\n  background: rgba(255, 255, 255, 0.96);\n  box-shadow: 0 12px 50px rgba(245, 158, 11, 0.18);\n}\n.story-card__header[data-v-7553a2bd] {\n  padding: 24px 28px;\n  user-select: none;\n}\n.story-card--open .story-card__header[data-v-7553a2bd] {\n  padding-bottom: 16px;\n}\n.story-card__body[data-v-7553a2bd] {\n  animation: storyFadeSlideIn-7553a2bd 0.4s ease-out;\n}\n.story-card__content[data-v-7553a2bd] {\n  padding: 0 28px 28px;\n  border-top: 2px dashed #FEF3C7;\n}\n\n/* Story paragraphs with staggered animation */\n.story-paragraph[data-v-7553a2bd] {\n  animation: storyParaIn-7553a2bd 0.4s ease-out backwards;\n}\n.story-paragraph p[data-v-7553a2bd] {\n  font-size: 1rem;\n  line-height: 1.8;\n  color: #44403C;\n  margin-bottom: 1rem;\n}\n.story-paragraph:last-child p[data-v-7553a2bd] {\n  margin-bottom: 0;\n}\n\n/* Story footer */\n.story-footer[data-v-7553a2bd] {\n  background: linear-gradient(135deg, #FFFBEB, #FEF3C7);\n  border-radius: 16px;\n  padding: 16px 20px;\n}\n\n/* Read toggle */\n.read-toggle[data-v-7553a2bd] {\n  transition: color 0.2s ease;\n}\n.story-card:hover .read-toggle[data-v-7553a2bd] {\n  color: #D97706;\n}\n\n/* Story emoji */\n.story-emoji[data-v-7553a2bd] {\n  transition: transform 0.3s ease;\n}\n.story-card:hover .story-emoji[data-v-7553a2bd] {\n  animation: emojiBounce-7553a2bd 0.5s ease;\n}\n@keyframes emojiBounce-7553a2bd {\n0%, 100% { transform: scale(1) rotate(0deg);\n}\n25% { transform: scale(1.2) rotate(-8deg);\n}\n50% { transform: scale(0.95) rotate(5deg);\n}\n75% { transform: scale(1.1) rotate(-3deg);\n}\n}\n@keyframes storyFadeSlideIn-7553a2bd {\nfrom { opacity: 0; max-height: 0;\n}\nto { opacity: 1; max-height: 2000px;\n}\n}\n@keyframes storyParaIn-7553a2bd {\nfrom { opacity: 0; transform: translateY(-8px);\n}\nto { opacity: 1; transform: translateY(0);\n}\n}\n";
    document.head.appendChild(style);
  })();
  (__sfc__.__vccOpts || __sfc__).__scopeId = "data-v-7553a2bd";
  const __default_1 = __sfc__;
  __exports.default = __default_1;
  return __exports;
})();
export default __exports.default;
