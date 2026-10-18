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
import { vShow as _vShow } from 'vue';
import { withDirectives as _withDirectives } from 'vue';
import { normalizeStyle as _normalizeStyle } from 'vue';
import { ref as ref } from 'vue';
import { onMounted as onMounted } from 'vue';
import FloatingEmojis from './FloatingEmojis.js';
















const __exports = (() => {
  const __exports = {};
  const _hoisted_1 = {
    class: "useful-tips py-20 px-4 relative overflow-hidden",
    "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:2"
  };
  const _hoisted_2 = {
    class: "grid grid-cols-1 md:grid-cols-2 gap-6",
    "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:28"
  };
  const _hoisted_3 = ["onClick"];
  const _hoisted_4 = {
    class: "tip-card__header",
    "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:41"
  };
  const _hoisted_5 = {
    class: "flex items-center gap-3 mb-1",
    "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:42"
  };
  const _hoisted_6 = {
    class: "text-3xl",
    "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:43"
  };
  const _hoisted_7 = {
    "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:44"
  };
  const _hoisted_8 = {
    class: "text-lg font-bold text-stone-800",
    "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:45"
  };
  const _hoisted_9 = {
    class: "flex items-center justify-between mt-1",
    "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:48"
  };
  const _hoisted_10 = {
    class: "tip-card__body",
    "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:57"
  };
  const _hoisted_11 = {
    class: "tip-card__content",
    "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:58"
  };
  const _hoisted_12 = {
    class: "flex items-start gap-2 text-sm text-stone-600 leading-relaxed",
    "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:59"
  };
  const _hoisted_13 = {
    "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:61"
  };
  const _hoisted_14 = {
    class: "bg-emerald-50 rounded-xl p-3 border border-emerald-100 mt-3",
    "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:63"
  };
  const _hoisted_15 = {
    class: "text-xs text-emerald-700 italic flex items-center gap-2",
    "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:64"
  };
  const _hoisted_16 = {
    "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:65"
  };
  const _hoisted_17 = {
    "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:66"
  };
  const __sfc__ = _defineComponent({
    __name: 'UsefulTips',
    setup(__props) {
      const tips = [{
        emoji: '🚿',
        title: 'Начинай утро с холодного душа',
        advice: 'Проснувшись, сразу беги в душ и включай ледяную воду. Во-первых, ты мгновенно взбодришься. Во-вторых, если соседи снизу позвонят в дверь спросить, не утонул ли ты — считай, зарядка для голосовых связок готова. А если вода вдруг окажется горячей — не расстраивайся, просто считай это тренировкой силы воли: ты же хотел холодный, а терпишь тёплый — значит, закаляешь характер!',
        funIcon: '🧊',
        funNote: 'После третьего раза начинаешь подозревать, что смелость — это просто неспособность вовремя выключить воду.'
      }, {
        emoji: '🍲',
        title: 'Ешь суп каждый день — будешь здоров!',
        advice: 'Мама была права: суп — это жидкое счастье. Если тебе грустно — свари суп. Если весело — свари суп побольше. Если некогда — суп из пакетика тоже считается, главное — плеснуть туда щепотку самоиронии. А если суп убежал — догони и скажи ему: "Куда же ты, родимый?!"',
        funIcon: '🥣',
        funNote: 'Главное правило супомудрия: если в суп упала муха — вынь её и скажи, что это мясо по-китайски.'
      }, {
        emoji: '🧘',
        title: 'Медитируй на звук микроволновки',
        advice: 'Сядь поудобнее, закрой глаза и вслушайся в мерное "бззззз" разогревающейся пиццы. Представь, что это космический корабль уносит тебя в галактику сырного блаженства. Когда раздастся "дзынь" — прозрение наступит само собой (а заодно и ужин готов).',
        funIcon: '🎵',
        funNote: 'Гуру йоги советуют не медитировать на звук попкорна — взрывы сбивают чакры.'
      }, {
        emoji: '💤',
        title: 'Спи днём — это перезагрузка системы',
        advice: 'Организму нужна перезагрузка! 20 минут дневного сна заменяют чашку кофе и повышают продуктивность на 30%. А если начальник застукал — скажи, что ты не спишь, а проводишь "сеанс восстановления нейронных связей в горизонтальном положении". Звучит научно — значит, прокатит!',
        funIcon: '😴',
        funNote: 'Важно: если спишь больше часа — это уже не перезагрузка, а "режим hibernation". Зимняя спячка посреди рабочего дня.'
      }, {
        emoji: '🗣️',
        title: 'Разговаривай с растениями',
        advice: 'Учёные доказали: растения лучше растут, когда с ними разговаривают. Но не просто "привет, как дела", а рассказывай им анекдоты! Фикусы любят стендап, кактусы — сухую иронию, а орхидеи — французский юмор с намёком. Если растение завяло — значит, шутка не зашла. Меняй репертуар!',
        funIcon: '🌱',
        funNote: 'Если соседи видели, как ты шепчешь фикусу про "тещу и удава" — просто скажи, что это новый формат "Stand-up for Plants".'
      }, {
        emoji: '🏃',
        title: 'Бегай по утрам — но от радости!',
        advice: 'Выходи на улицу и беги с широкой улыбкой, размахивая руками. Пусть прохожие думают, что ты выиграл в лотерею или встретил любовь всей жизни. Во-первых, это поднимает настроение окружающим. Во-вторых, бежать с улыбкой почему-то легче! А если кто-то спросит — отвечай: "Я убегаю от серости будней!"',
        funIcon: '🌟',
        funNote: 'Предупреждение: если бежать и одновременно смеяться над собственной шуткой — можно споткнуться об кота. Коты не разделяют твоих спортивных амбиций.'
      }];
      const usefulEmojis = [{
        emoji: '💡',
        left: '4%',
        top: '15%',
        anim: 'pulse',
        delay: 0,
        duration: 2.5,
        size: 26
      }, {
        emoji: '✅',
        left: '94%',
        top: '12%',
        anim: 'float',
        delay: 0.5,
        duration: 3,
        size: 24
      }, {
        emoji: '⭐',
        left: '3%',
        top: '80%',
        anim: 'twinkle',
        delay: 1.5,
        duration: 2,
        size: 22
      }, {
        emoji: '🌟',
        left: '93%',
        top: '82%',
        anim: 'hop',
        delay: 0.3,
        duration: 3.5,
        size: 24
      }, {
        emoji: '👍',
        left: '50%',
        top: '5%',
        anim: 'bounce',
        delay: 2,
        duration: 2.8,
        size: 20
      }];
      const openIdx = ref(null);
      const visible = ref(false);
      const sectionRef = ref(null);
      function toggleCard(idx) {
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
        return _openBlock(), _createElementBlock("section", _hoisted_1, [_cache[3] || (_cache[3] = _createElementVNode("div", {
          class: "absolute inset-0 pointer-events-none",
          "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:4"
        }, [_createElementVNode("div", {
          class: "absolute top-10 right-8 text-5xl opacity-5",
          "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:5"
        }, "💡"), _createElementVNode("div", {
          class: "absolute bottom-16 left-12 text-6xl opacity-5",
          "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:6"
        }, "✅"), _createElementVNode("div", {
          class: "absolute top-1/3 left-1/5 text-4xl opacity-5",
          "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:7"
        }, "⭐")], -1)), _createVNode(FloatingEmojis, {
          emojis: usefulEmojis
        }), _createElementVNode("div", {
          class: "max-w-5xl mx-auto relative z-10",
          ref_key: "sectionRef",
          ref: sectionRef,
          "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:13"
        }, [_createElementVNode("div", {
          class: _normalizeClass(["text-center mb-12", visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']),
          style: {
            "transition": "all 0.8s ease-out"
          },
          "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:15"
        }, [...(_cache[0] || (_cache[0] = [_createElementVNode("div", {
          class: "inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-5 tip-icon-ring",
          "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:16"
        }, [_createElementVNode("i", {
          class: "fas fa-lightbulb text-3xl text-emerald-500 animated-tip-icon",
          "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:17"
        })], -1), _createElementVNode("h2", {
          class: "text-3xl md:text-4xl font-bold text-stone-800 mb-3",
          "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:19"
        }, " ✅ Полезные советы ", -1), _createElementVNode("p", {
          class: "text-stone-500 text-lg max-w-xl mx-auto",
          "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:22"
        }, " Одобрено бабушкой, проверено жизнью. Ну, почти проверено… ", -1)]))], 2), _createElementVNode("div", _hoisted_2, [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(tips, (tip, idx) => {
          return _createElementVNode("div", {
            key: idx,
            class: _normalizeClass(["tip-card", [visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10', {
              'tip-card--open': openIdx.value === idx
            }]]),
            style: _normalizeStyle({
              transitionDelay: `${0.15 + idx * 0.1}s`
            }),
            "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:29"
          }, [_createElementVNode("div", {
            class: "tip-card__click-area",
            onClick: $event => toggleCard(idx),
            "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:39"
          }, [_createElementVNode("div", _hoisted_4, [_createElementVNode("div", _hoisted_5, [_createElementVNode("span", _hoisted_6, _toDisplayString(tip.emoji), 1), _createElementVNode("div", _hoisted_7, [_createElementVNode("h3", _hoisted_8, _toDisplayString(tip.title), 1)])]), _createElementVNode("div", _hoisted_9, [_cache[1] || (_cache[1] = _createElementVNode("span", {
            class: "text-xs text-emerald-600 font-medium flex items-center gap-1",
            "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:49"
          }, [_createElementVNode("i", {
            class: "fas fa-check-circle",
            "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:50"
          }), _createTextVNode(" Совет дня ")], -1)), _createElementVNode("span", {
            class: _normalizeClass(["text-xs text-stone-400", openIdx.value === idx ? 'arrow-up' : 'arrow-down']),
            "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:52"
          }, "▼", 2)])]), _withDirectives(_createElementVNode("div", _hoisted_10, [_createElementVNode("div", _hoisted_11, [_createElementVNode("div", _hoisted_12, [_cache[2] || (_cache[2] = _createElementVNode("span", {
            class: "text-emerald-400 text-lg flex-shrink-0 mt-0.5",
            "data-srcloc": "/pud-smeha-ha/components/UsefulTips.vue:60"
          }, "💬", -1)), _createElementVNode("p", _hoisted_13, _toDisplayString(tip.advice), 1)]), _createElementVNode("div", _hoisted_14, [_createElementVNode("p", _hoisted_15, [_createElementVNode("span", _hoisted_16, _toDisplayString(tip.funIcon), 1), _createElementVNode("span", _hoisted_17, _toDisplayString(tip.funNote), 1)])])])], 512), [[_vShow, openIdx.value === idx]])], 8, _hoisted_3)], 6);
        }), 64))])], 512)]);
      };
    }
  });
  ;
  (function () {
    const style = document.createElement('style');
    style.innerHTML = "\n.useful-tips[data-v-b201a7b1] {\n  background: linear-gradient(180deg, #F5F3FF 0%, #ECFDF5 50%, #F0FDF4 100%);\n}\n\n/* Animated header icon */\n.tip-icon-ring[data-v-b201a7b1] {\n  animation: tip-pulse-b201a7b1 2.5s ease-in-out infinite;\n}\n.animated-tip-icon[data-v-b201a7b1] {\n  animation: tip-glow-b201a7b1 2s ease-in-out infinite;\n}\n@keyframes tip-pulse-b201a7b1 {\n0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.3);\n}\n50% { box-shadow: 0 0 24px 12px rgba(16, 185, 129, 0.12);\n}\n}\n@keyframes tip-glow-b201a7b1 {\n0%, 100% { transform: scale(1) rotate(0deg); filter: brightness(1);\n}\n30% { transform: scale(1.15) rotate(-8deg); filter: brightness(1.2);\n}\n60% { transform: scale(1.05) rotate(4deg); filter: brightness(1.1);\n}\n}\n\n/* Tip cards */\n.tip-card[data-v-b201a7b1] {\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(4px);\n  border-radius: 20px;\n  border: 2px solid #A7F3D0;\n  overflow: hidden;\n  transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;\n}\n.tip-card[data-v-b201a7b1]:hover {\n  border-color: #34D399;\n  box-shadow: 0 8px 30px rgba(16, 185, 129, 0.15);\n  transform: translateY(-2px);\n}\n.tip-card--open[data-v-b201a7b1] {\n  border-color: #34D399;\n  background: white;\n  box-shadow: 0 8px 30px rgba(16, 185, 129, 0.15);\n}\n.tip-card__click-area[data-v-b201a7b1] {\n  cursor: pointer;\n}\n.tip-card__header[data-v-b201a7b1] {\n  padding: 20px;\n  user-select: none;\n}\n.tip-card--open .tip-card__header[data-v-b201a7b1] {\n  padding-bottom: 12px;\n}\n.tip-card__body[data-v-b201a7b1] {\n  animation: fadeSlideIn-b201a7b1 0.3s ease-out;\n}\n.tip-card__content[data-v-b201a7b1] {\n  padding: 0 20px 20px;\n  border-top: 2px dashed #D1FAE5;\n}\n.tip-card__content > div[data-v-b201a7b1] {\n  margin-top: 16px;\n}\n.arrow-up[data-v-b201a7b1] {\n  display: inline-block;\n  transform: rotate(180deg);\n}\n.arrow-down[data-v-b201a7b1] {\n  display: inline-block;\n}\n@keyframes fadeSlideIn-b201a7b1 {\nfrom { opacity: 0; transform: translateY(-6px);\n}\nto { opacity: 1; transform: translateY(0);\n}\n}\n";
    document.head.appendChild(style);
  })();
  (__sfc__.__vccOpts || __sfc__).__scopeId = "data-v-b201a7b1";
  const __default_1 = __sfc__;
  __exports.default = __default_1;
  return __exports;
})();
export default __exports.default;
