import { defineComponent as _defineComponent } from 'vue';
import { createElementVNode as _createElementVNode } from 'vue';
import { createVNode as _createVNode } from 'vue';
import { normalizeClass as _normalizeClass } from 'vue';
import { renderList as _renderList } from 'vue';
import { Fragment as _Fragment } from 'vue';
import { openBlock as _openBlock } from 'vue';
import { createElementBlock as _createElementBlock } from 'vue';
import { toDisplayString as _toDisplayString } from 'vue';
import { createTextVNode as _createTextVNode } from 'vue';
import { ref as ref } from 'vue';
import { reactive as reactive } from 'vue';
import { onMounted as onMounted } from 'vue';
import FloatingEmojis from './FloatingEmojis.js';














const __exports = (() => {
  const __exports = {};
  const _hoisted_1 = {
    class: "funfacts-section py-20 px-4 relative overflow-hidden",
    "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:2"
  };
  const _hoisted_2 = {
    class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
    "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:28"
  };
  const _hoisted_3 = ["onClick"];
  const _hoisted_4 = {
    class: "flex items-start gap-4 relative z-10",
    "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:39"
  };
  const _hoisted_5 = {
    class: "flex-1 min-w-0",
    "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:41"
  };
  const _hoisted_6 = {
    key: 0,
    "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:42"
  };
  const _hoisted_7 = {
    class: "text-stone-700 leading-relaxed",
    "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:43"
  };
  const _hoisted_8 = {
    key: 1,
    class: "fact-reveal",
    "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:50"
  };
  const _hoisted_9 = {
    class: "text-stone-700 leading-relaxed",
    "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:51"
  };
  const _hoisted_10 = {
    class: "text-amber-600 font-semibold",
    "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:52"
  };
  const __sfc__ = _defineComponent({
    __name: 'FunFactsSection',
    setup(__props) {
      const facts = [{
        emoji: '🧒',
        teaser: 'Дети смеются в среднем 300 раз в день...',
        title: '300 vs 15: неравный бой 😄',
        reveal: '…а взрослые — всего 15–20 раз! Это понижение в должности, а не взросление. Пора навёрстывать — улыбнись прямо сейчас!'
      }, {
        emoji: '🧠',
        teaser: 'Смех — лучшее обезболивающее...',
        title: 'Рецепт без рецепта! 💊',
        reveal: 'Во время смеха вырабатываются эндорфины — природные обезболивающие. 10 минут хохота могут снизить боль на 2–3 часа! Побочка: возможно подтекание слёз.'
      }, {
        emoji: '💪',
        teaser: 'Когда ты смеёшься, работают 15 мышц лица...',
        title: 'Фитнес для лица! 🏋️',
        reveal: 'А когда пытаешься не смеяться в серьёзном месте — все 50! Профилактика морщин и абс — два в одном. Абонемент в спортзал не нужен, достаточно хорошей шутки.'
      }, {
        emoji: '🔥',
        teaser: 'Минута смеха сжигает до 10 калорий...',
        title: 'Диета смехом 🍕',
        reveal: '15 минут хохота в день = 1 кг за год! Конечно, это не замена фитнесу. Но пицца после смеха как будто менее калорийная, правда?'
      }, {
        emoji: '❤️',
        teaser: 'Смех продлевает жизнь...',
        title: 'Научно доказано! 📊',
        reveal: 'Исследования показывают: люди с хорошим чувством юмора живут в среднем на 4–5 лет дольше. Каждый заливистый хохот — это +5 минут к пенсии!'
      }, {
        emoji: '🐶',
        teaser: 'Звук смеха действует на мозг как...',
        title: 'Социальный клей 🤝',
        reveal: '…эволюционный механизм сплочения! Когда мы слышим смех, в мозге активируются зеркальные нейроны — и мы начинаем улыбаться в ответ. Это заразно — чихать рядом безопаснее!'
      }, {
        emoji: '🎵',
        teaser: 'Когда мы смеёмся, мозг производит альфа-волны...',
        title: 'Мозговой оркестр 🎶',
        reveal: '…такие же, как когда слушаем любимую музыку! Смех настраивает мозг на гармоничный лад. Смейся — это дешевле абонемента в филармонию.'
      }, {
        emoji: '🛌',
        teaser: '10 минут хохота перед сном улучшают качество сна...',
        title: 'Спать и смеяться 😴',
        reveal: '…на 30%! Серотонин из смеха перерабатывается в мелатонин — гормон сна. Хохочи перед сном — храпеть будешь с улыбкой!'
      }, {
        emoji: '🌍',
        teaser: 'Люди любой культуры понимают смех без перевода...',
        title: 'Эсперанто эмоций 🌐',
        reveal: '…даже если говорят на разных языках! Люди отличают искренний смех от поддельного на 90% точности. Смех — настоящий универсальный язык.'
      }, {
        emoji: '🦷',
        teaser: 'Смех увеличивает слюноотделение, а слюна защищает зубы...',
        title: 'Кариес не пройдёт! 🦷',
        reveal: '…в слюне есть антибактериальные вещества, защищающие эмаль. Зубная паста и смех — команда мечты. Но чистить зубы всё равно надо!'
      }, {
        emoji: '🐱',
        teaser: 'Наши питомцы тоже умеют «смеяться»...',
        title: 'Мур-мур-хи-хи 🐈',
        reveal: '…собаки делают «задыхающийся» выдох-смех, а кошки мурлыкают — их версия улыбки. Когда пёс виляет хвостом — он смеётся хвостом!'
      }, {
        emoji: '🏆',
        teaser: 'Самый долгий смех в истории длился...',
        title: 'Книга Гиннесса смеётся 📖',
        reveal: '…36 часов! Зафиксировано в 2013 году в Британии. После марафона участники не могли нормально есть и говорить. 5 минут смеха в день — норма!'
      }, {
        emoji: '😱',
        teaser: 'Люди смеются в стрессовых ситуациях не просто так...',
        title: 'Нервный хохоток 😅',
        reveal: '…это эволюционный механизм снятия напряжения! Когда страшно или неловко, мозг включает «аварийный смех» для снижения кортизола. Твой супергеройский щит!'
      }, {
        emoji: '🧪',
        teaser: 'Исследователи различают 10 типов смеха...',
        title: 'Таксономия хохота 🔬',
        reveal: '…от искреннего до вежливого и саркастического! По смеху определяют, друзья вы или враги. Но настоящий смех один — тот, от которого живот болит!'
      }, {
        emoji: '🎂',
        teaser: 'Первоапрельские розыгрыши отмечали ещё в Древнем Риме...',
        title: 'Древние тролли 🏛️',
        reveal: '…а в Индии праздник Холи — тоже про веселье! Люди всегда знали: жизнь без шуток — как пицца без сыра. Вроде съедобно, но грустно.'
      }, {
        emoji: '🦋',
        teaser: 'При смехе и оргазме в мозге активируются одни и те же зоны...',
        title: 'Химия счастья ⚡',
        reveal: '…дофамин, эндорфины, окситоцин — коктейль один и тот же! Для смеха не нужно искать партнёра, достаточно хорошего анекдота. Экономия нервов!'
      }, {
        emoji: '👶',
        teaser: 'УЗИ показывает, что плод улыбается с 23 недели...',
        title: 'Внутриутробный хохотатель 🤰',
        reveal: '…а глухонемые дети, никогда не слышавшие смеха, тоже смеются! Это врождённый рефлекс. Смех у нас в крови — буквально!'
      }, {
        emoji: '🎯',
        teaser: 'После комедии люди решают головоломки быстрее...',
        title: 'Творческий допинг 🚀',
        reveal: '…на 30% быстрее! Смех расслабляет префронтальную кору и даёт мыслям течь свободно. Залипание в стендап перед работой — это профессиональный рост!'
      }];
      const openCards = reactive({});
      const visible = ref(false);
      const sectionRef = ref(null);
      function toggleCard(index) {
        openCards[index] = !openCards[index];
      }
      onMounted(() => {
        const observer = new IntersectionObserver(entries => {
          const entry = entries[0];
          if (entry?.isIntersecting) {
            visible.value = true;
            observer.disconnect();
          }
        }, {
          threshold: 0.15
        });
        if (sectionRef.value) observer.observe(sectionRef.value);
      });
      const factsEmojis = [{
        emoji: '💡',
        left: '4%',
        top: '20%',
        anim: 'pulse',
        delay: 0,
        duration: 2.5,
        size: 26
      }, {
        emoji: '🧠',
        left: '93%',
        top: '18%',
        anim: 'wobble',
        delay: 0.6,
        duration: 3.2,
        size: 24
      }, {
        emoji: '🤔',
        left: '6%',
        top: '70%',
        anim: 'sway',
        delay: 1.2,
        duration: 3,
        size: 22
      }, {
        emoji: '🎯',
        left: '92%',
        top: '75%',
        anim: 'bounce',
        delay: 0.2,
        duration: 2.8,
        size: 24
      }, {
        emoji: '😄',
        left: '50%',
        top: '5%',
        anim: 'float',
        delay: 2,
        duration: 3.5,
        size: 20
      }];
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock("section", _hoisted_1, [_cache[4] || (_cache[4] = _createElementVNode("div", {
          class: "absolute inset-0 pointer-events-none",
          "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:4"
        }, [_createElementVNode("div", {
          class: "absolute top-10 left-8 text-5xl opacity-5",
          "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:5"
        }, "😂"), _createElementVNode("div", {
          class: "absolute bottom-16 right-12 text-6xl opacity-5",
          "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:6"
        }, "🤣"), _createElementVNode("div", {
          class: "absolute top-1/3 right-1/4 text-4xl opacity-5",
          "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:7"
        }, "😄")], -1)), _createVNode(FloatingEmojis, {
          emojis: factsEmojis
        }), _createElementVNode("div", {
          class: "max-w-4xl mx-auto relative z-10",
          ref_key: "sectionRef",
          ref: sectionRef,
          "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:13"
        }, [_createElementVNode("div", {
          class: _normalizeClass(["text-center mb-12", visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']),
          style: {
            "transition": "all 0.8s ease-out"
          },
          "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:15"
        }, [...(_cache[0] || (_cache[0] = [_createElementVNode("div", {
          class: "inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-5 fact-icon-ring",
          "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:16"
        }, [_createElementVNode("i", {
          class: "fas fa-face-laugh-squint text-3xl text-amber-500 animated-fact-icon",
          "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:17"
        })], -1), _createElementVNode("h2", {
          class: "text-3xl md:text-4xl font-bold text-stone-800 mb-3",
          "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:19"
        }, " 🎪 Весёлые факты о смехе ", -1), _createElementVNode("p", {
          class: "text-stone-500 text-lg max-w-xl mx-auto",
          "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:22"
        }, " Знай: твой организм умеет смеяться ещё в утробе! А это тебе на закуску 😉 ", -1)]))], 2), _createElementVNode("div", _hoisted_2, [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(facts, (fact, index) => {
          return _createElementVNode("div", {
            key: index,
            class: _normalizeClass(["fact-card bg-white rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden", {
              'fact-open': openCards[index]
            }]),
            onClick: $event => toggleCard(index),
            "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:29"
          }, [_cache[3] || (_cache[3] = _createElementVNode("div", {
            class: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-rose-300 to-amber-300",
            "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:37"
          }, null, -1)), _createElementVNode("div", _hoisted_4, [_createElementVNode("span", {
            class: _normalizeClass(["text-3xl flex-shrink-0 fact-emoji", {
              'fact-emoji-active': openCards[index]
            }]),
            "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:40"
          }, _toDisplayString(fact.emoji), 3), _createElementVNode("div", _hoisted_5, [!openCards[index] ? (_openBlock(), _createElementBlock("div", _hoisted_6, [_createElementVNode("p", _hoisted_7, _toDisplayString(fact.teaser), 1), _cache[1] || (_cache[1] = _createElementVNode("div", {
            class: "mt-3 flex items-center gap-1 text-amber-500 text-sm font-medium",
            "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:46"
          }, [_createElementVNode("span", {
            "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:47"
          }, "👆 Узнать факт")], -1))])) : (_openBlock(), _createElementBlock("div", _hoisted_8, [_createElementVNode("p", _hoisted_9, [_createElementVNode("span", _hoisted_10, _toDisplayString(fact.title), 1), _createTextVNode(" " + _toDisplayString(fact.reveal), 1)]), _cache[2] || (_cache[2] = _createElementVNode("div", {
            class: "mt-3 flex items-center gap-1 text-stone-400 text-sm",
            "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:55"
          }, [_createElementVNode("span", {
            "data-srcloc": "/pud-smeha-ha/components/FunFactsSection.vue:56"
          }, "👆 Свернуть")], -1))]))])])], 10, _hoisted_3);
        }), 64))])], 512)]);
      };
    }
  });
  ;
  (function () {
    const style = document.createElement('style');
    style.innerHTML = "\n.funfacts-section[data-v-de553e72] {\n  background: linear-gradient(180deg, #FFFBEB 0%, #F5F3FF 50%, #FDF2F8 100%);\n}\n\n/* Animated header icon */\n.fact-icon-ring[data-v-de553e72] {\n  position: relative;\n  animation: ring-pulse-de553e72 2.5s ease-in-out infinite;\n}\n.animated-fact-icon[data-v-de553e72] {\n  animation: icon-wobble-de553e72 2s ease-in-out infinite;\n}\n@keyframes ring-pulse-de553e72 {\n0%, 100% { box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.3);\n}\n50% { box-shadow: 0 0 24px 12px rgba(251, 191, 36, 0.12);\n}\n}\n@keyframes icon-wobble-de553e72 {\n0%, 100% { transform: rotate(0deg);\n}\n25% { transform: rotate(-6deg);\n}\n50% { transform: rotate(6deg);\n}\n75% { transform: rotate(-3deg);\n}\n}\n\n/* Fact cards */\n.fact-card[data-v-de553e72] {\n  transition: all 0.3s ease;\n}\n.fact-card[data-v-de553e72]:hover {\n  border-color: #FDE68A;\n  transform: translateY(-2px);\n}\n.fact-card.fact-open[data-v-de553e72] {\n  background: linear-gradient(135deg, #FFFBEB, #FFF1F2);\n  border-color: #FBBF24;\n}\n.fact-emoji[data-v-de553e72] {\n  transition: transform 0.3s ease;\n  display: inline-block;\n}\n.fact-emoji-active[data-v-de553e72] {\n  animation: emoji-bounce-de553e72 0.4s ease;\n}\n@keyframes emoji-bounce-de553e72 {\n0% { transform: scale(1);\n}\n30% { transform: scale(1.3) rotate(-10deg);\n}\n60% { transform: scale(1.1) rotate(5deg);\n}\n100% { transform: scale(1) rotate(0deg);\n}\n}\n.fact-reveal[data-v-de553e72] {\n  animation: fadeSlideIn-de553e72 0.3s ease-out;\n}\n@keyframes fadeSlideIn-de553e72 {\nfrom { opacity: 0; transform: translateY(6px);\n}\nto { opacity: 1; transform: translateY(0);\n}\n}\n";
    document.head.appendChild(style);
  })();
  (__sfc__.__vccOpts || __sfc__).__scopeId = "data-v-de553e72";
  const __default_1 = __sfc__;
  __exports.default = __default_1;
  return __exports;
})();
export default __exports.default;
