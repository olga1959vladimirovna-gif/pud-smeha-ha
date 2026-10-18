import { defineComponent as _defineComponent } from 'vue';
import { createVNode as _createVNode } from 'vue';
import { createElementVNode as _createElementVNode } from 'vue';
import { renderList as _renderList } from 'vue';
import { Fragment as _Fragment } from 'vue';
import { openBlock as _openBlock } from 'vue';
import { createElementBlock as _createElementBlock } from 'vue';
import { toDisplayString as _toDisplayString } from 'vue';
import { normalizeClass as _normalizeClass } from 'vue';
import { createStaticVNode as _createStaticVNode } from 'vue';
import { reactive as reactive } from 'vue';
import FloatingEmojis from './FloatingEmojis.js';












const __exports = (() => {
  const __exports = {};
  const _hoisted_1 = {
    class: "symptoms-section py-20 px-4 relative overflow-hidden",
    "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:2"
  };
  const _hoisted_2 = {
    class: "max-w-4xl mx-auto",
    "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:5"
  };
  const _hoisted_3 = {
    class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
    "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:18"
  };
  const _hoisted_4 = ["onClick"];
  const _hoisted_5 = {
    class: "flex items-start gap-4",
    "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:26"
  };
  const _hoisted_6 = {
    class: "text-3xl flex-shrink-0",
    "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:27"
  };
  const _hoisted_7 = {
    class: "flex-1",
    "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:28"
  };
  const _hoisted_8 = {
    key: 0,
    "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:29"
  };
  const _hoisted_9 = {
    class: "font-bold text-lg text-stone-800 mb-2",
    "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:30"
  };
  const _hoisted_10 = {
    class: "text-stone-600",
    "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:31"
  };
  const _hoisted_11 = {
    key: 1,
    class: "reveal-content",
    "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:36"
  };
  const _hoisted_12 = {
    class: "text-stone-700",
    "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:38"
  };
  const __sfc__ = _defineComponent({
    __name: 'SymptomsSection',
    setup(__props) {
      const symptoms = [{
        emoji: '🌅',
        title: 'Утро без улыбки',
        teaser: 'Просыпаешься и первым делом проверяешь новости...',
        reveal: 'Спойлер: хороших новостей там не прибавилось. А вот смех — бесплатно и безлимитно! Попробуй начать утро с улыбки — это как кофе, только без кофеина.'
      }, {
        emoji: '😐',
        title: 'Улыбка — редкий гость',
        teaser: 'Улыбнулся — и сам испугался: "Что это со мной?"',
        reveal: 'Если твоя улыбка ржавеет от неиспользования — срочно смазывай её порцией хорошей комедии или старого доброго анекдота про Штирлица.'
      }, {
        emoji: '☕',
        title: 'Кофе — единственная радость',
        teaser: 'Утром — кофе, днём — кофе, вечером — "а почему бы и нет?"',
        reveal: 'Кофе — это не эмоция. А вот заливистый смех до слёз бодрит лучше любого латте и не вызывает бессонницы (ну, почти).'
      }, {
        emoji: '📖',
        title: 'Юмор стал теорией',
        teaser: 'Анекдоты кажутся "теоретическим материалом"',
        reveal: 'Когда последний раз ты смеялся так, что соседи постучали в стену? Если не вспомнишь — welcome to the club! Лечение: одна серия "Уральских пельменей" перед сном.'
      }, {
        emoji: '🧳',
        title: 'Чувство юмора в отпуске',
        teaser: 'Уехало на Мальдивы и не присылает открыток',
        reveal: 'Оно вернётся, если перестать относиться к жизни слишком серьёзно. Попробуй посмотреть на свои проблемы с высоты птичьего полёта — оттуда они кажутся смешными.'
      }, {
        emoji: '🔄',
        title: 'Грустный скроллинг',
        teaser: 'Листаешь ленту — и настроение падает быстрее курса биткоина',
        reveal: 'Алгоритмы соцсетей не хотят, чтобы ты смеялся (смех — контент, который нельзя монетизировать). Устрой себе digital-детокс и включи стендап — вылечишься!'
      }, {
        emoji: '😤',
        title: 'Серьёзность — вторая натура',
        teaser: 'На любую шутку реакция: «Ну, это не смешно»',
        reveal: 'А внутри-то всё равно хихикается! Просто твой внутренний критик глушит веселье. Разреши себе посмеяться — хотя бы над тем, как котик неудачно спрыгнул со стула.'
      }, {
        emoji: '📱',
        title: 'Мемный иммунитет',
        teaser: 'Даже кот в коробке вызывает лишь вежливое «хм»',
        reveal: 'Если мемы перестали заходить — это не мемы стали хуже. Это твой смеховой рецептор засорился серьёзными новостями. Нужна промывка: зайди на YouTube и вруби нарезки с животными минут на 20 — без скипперства!'
      }, {
        emoji: '🎭',
        title: 'Смех по расписанию',
        teaser: '«Посмеюсь, когда всё сделаю» — и не смеёшься никогда',
        reveal: 'Дела никогда не кончатся, а смех — да. Он не любит ждать. Срочно встрой в график пункт «Поржать 5 минут» — и выполняй его без отговорок! Это продуктивнее любого тайм-менеджмента.'
      }, {
        emoji: '🧠',
        title: 'Самоирония в отключке',
        teaser: 'Относишься к своим промахам как к личной трагедии',
        reveal: 'А зря! Каждый ляп — это будущий анекдот. Уронил телефон в суп? Через год будешь рассказывать друзьям со слезами смеха. Зачем ждать год? Смейся сейчас — супом меньше, кармой больше!'
      }, {
        emoji: '🤝',
        title: 'Комплиментофобия',
        teaser: '«Ты сегодня отлично выглядишь!» — «Что тебе надо?»',
        reveal: 'Диагноз: хроническое недоверие к добрым словам. Организм разучился принимать похвалу без подозрений. А зря! Комплимент — это как витаминка для души. Улыбнись в ответ и скажи «спасибо» — без подвоха, честно-честно!'
      }, {
        emoji: '🎶',
        title: 'Песенный ступор',
        teaser: 'Раньше пел в душе как соловей, теперь — молча мочалка...',
        reveal: 'Голос — он как смех: если его прятать по углам, он обижается и уходит навсегда. Срочно вруби любимый трек погромче и подпой от души! Соседи простят (ну, может быть), а хорошее настроение вернётся моментально.'
      }, {
        emoji: '🐢',
        title: 'Утренняя черепаха',
        teaser: 'Каждое утро — подвиг: встать, умыться, улыбнуться...',
        reveal: 'Улыбка — это такое упражнение для лица, которое делают по утрам те, кто не проверял почту. Попробуй альтернативу: проснись на 5 минут раньше и вспомни что-нибудь смешное из вчерашнего дня. Не вспомнил? Значит, срочно нужен Пуд Смеха!'
      }, {
        emoji: '🌵',
        title: 'Эмоциональный кактус',
        teaser: 'Колкий снаружи, колкий внутри...',
        reveal: 'Ты как тот кактус на подоконнике — всех отпугиваешь колючками, хотя на самом деле хочешь, чтобы тебя поливали добрым словом. Смех — лучшее удобрение для души. Попробуй сегодня улыбнуться прохожему — мир не рухнет, обещаем!'
      }, {
        emoji: '🦸',
        title: 'Супергерой бытовухи',
        teaser: '«Должен успеть всё!» А смеяться когда?',
        reveal: 'Ты работаешь без выходных, спасаешь мир на своей кухне и в офисе. Но даже Супермен брал отпуск! Позволь себе 5 минут смеха без повода — это входит в список твоих суперспособностей, ты просто забыл.'
      }, {
        emoji: '🎬',
        title: 'Сериальный побег',
        teaser: 'Лучше посмотрю ещё одну серию, чем пойду на вечеринку',
        reveal: 'Сериалы — это, конечно, хорошо, но они не умеют смеяться в ответ. Живой смех заразителен! Выйди в люди (или хотя бы позвони другу-хохотуну) — и ты вспомнишь, что такое икота от смеха.'
      }, {
        emoji: '🧊',
        title: 'Корпоративный холод',
        teaser: 'На работе шутят — я улыбаюсь уголками губ профессионально',
        reveal: 'Вежливая улыбка — это не смех, это социальная маска. Сними её иногда! Сходи с коллегами за пиццей и позволь себе рассмеяться в голос — это не запрещено трудовым кодексом (мы проверяли).'
      }, {
        emoji: '🌈',
        title: 'Радуга в оттенках серого',
        teaser: 'Всё нормально, всё стабильно, всё серо...',
        reveal: 'Спокойствие — это хорошо. Но когда жизнь становится похожа на карту метро — только линии, никаких красок — пора встряхнуться! Добавь в день хоть одну бессмысленную радость: съешь мороженое на завтрак, спой в лифте или просто потанцуй, пока никто не видит.'
      }];
      const symptomsEmojis = [{
        emoji: '🔍',
        left: '4%',
        top: '18%',
        anim: 'wobble',
        delay: 0,
        duration: 3,
        size: 26
      }, {
        emoji: '💊',
        left: '93%',
        top: '22%',
        anim: 'bounce',
        delay: 0.7,
        duration: 2.8,
        size: 24
      }, {
        emoji: '🩺',
        left: '6%',
        top: '72%',
        anim: 'sway',
        delay: 1.2,
        duration: 3.2,
        size: 22
      }, {
        emoji: '📋',
        left: '91%',
        top: '75%',
        anim: 'float',
        delay: 0.3,
        duration: 3.5,
        size: 24
      }, {
        emoji: '🤒',
        left: '50%',
        top: '6%',
        anim: 'pulse',
        delay: 2,
        duration: 2.5,
        size: 22
      }];
      const openCards = reactive({});
      function toggleCard(index) {
        openCards[index] = !openCards[index];
      }
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock("section", _hoisted_1, [_createVNode(FloatingEmojis, {
          emojis: symptomsEmojis
        }), _createElementVNode("div", _hoisted_2, [_cache[3] || (_cache[3] = _createStaticVNode("<div class=\"text-center mb-12\" data-srcloc=\"/pud-smeha-ha/components/SymptomsSection.vue:7\" data-v-8971f3c2><span class=\"inline-block text-4xl mb-2\" data-srcloc=\"/pud-smeha-ha/components/SymptomsSection.vue:8\" data-v-8971f3c2>🔍</span><h2 class=\"text-3xl md:text-4xl font-bold text-stone-800 mb-3\" data-srcloc=\"/pud-smeha-ha/components/SymptomsSection.vue:9\" data-v-8971f3c2> Диагноз: <span class=\"bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent\" data-srcloc=\"/pud-smeha-ha/components/SymptomsSection.vue:10\" data-v-8971f3c2>смеходефицит</span></h2><p class=\"text-stone-500 text-lg max-w-xl mx-auto\" data-srcloc=\"/pud-smeha-ha/components/SymptomsSection.vue:12\" data-v-8971f3c2> Проверь, не пора ли пополнить запасы веселья? </p></div>", 1)), _createElementVNode("div", _hoisted_3, [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(symptoms, (symptom, index) => {
          return _createElementVNode("div", {
            key: index,
            class: _normalizeClass(["symptom-card bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer", {
              'is-open': openCards[index]
            }]),
            onClick: $event => toggleCard(index),
            "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:19"
          }, [_createElementVNode("div", _hoisted_5, [_createElementVNode("span", _hoisted_6, _toDisplayString(symptom.emoji), 1), _createElementVNode("div", _hoisted_7, [!openCards[index] ? (_openBlock(), _createElementBlock("div", _hoisted_8, [_createElementVNode("h3", _hoisted_9, _toDisplayString(symptom.title), 1), _createElementVNode("p", _hoisted_10, _toDisplayString(symptom.teaser), 1), _cache[0] || (_cache[0] = _createElementVNode("div", {
            class: "mt-3 flex items-center gap-1 text-amber-500 text-sm",
            "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:32"
          }, [_createElementVNode("span", {
            "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:33"
          }, "👆 Нажми, чтобы узнать больше")], -1))])) : (_openBlock(), _createElementBlock("div", _hoisted_11, [_cache[1] || (_cache[1] = _createElementVNode("h3", {
            class: "font-bold text-lg text-rose-600 mb-2",
            "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:37"
          }, "✓ Диагноз подтверждён", -1)), _createElementVNode("p", _hoisted_12, _toDisplayString(symptom.reveal), 1), _cache[2] || (_cache[2] = _createElementVNode("div", {
            class: "mt-3 flex items-center gap-1 text-amber-500 text-sm",
            "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:39"
          }, [_createElementVNode("span", {
            "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:40"
          }, "👆 Свернуть")], -1))]))])])], 10, _hoisted_4);
        }), 64))]), _cache[4] || (_cache[4] = _createElementVNode("div", {
          class: "text-center mt-10 text-stone-400 text-sm",
          "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:49"
        }, [_createElementVNode("p", {
          "data-srcloc": "/pud-smeha-ha/components/SymptomsSection.vue:50"
        }, "* Узнал себя в трёх и более пунктах? Срочно пополняй запасы веселья! 🎒")], -1))])]);
      };
    }
  });
  ;
  (function () {
    const style = document.createElement('style');
    style.innerHTML = "\n.symptoms-section[data-v-8971f3c2] {\n  background: linear-gradient(180deg, #FFFBEB 0%, #FCE7F3 50%, #FFF1F2 100%);\n}\n.symptom-card[data-v-8971f3c2] {\n  transition: box-shadow 0.3s ease, border-color 0.3s ease;\n}\n.symptom-card[data-v-8971f3c2]:hover {\n  border-color: #FDE68A;\n}\n.reveal-content[data-v-8971f3c2] {\n  animation: fadeSlideIn-8971f3c2 0.3s ease-out;\n}\n@keyframes fadeSlideIn-8971f3c2 {\nfrom {\n    opacity: 0;\n    transform: translateY(6px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n";
    document.head.appendChild(style);
  })();
  (__sfc__.__vccOpts || __sfc__).__scopeId = "data-v-8971f3c2";
  const __default_1 = __sfc__;
  __exports.default = __default_1;
  return __exports;
})();
export default __exports.default;
