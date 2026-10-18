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
    class: "harmful-tips py-20 px-4 relative overflow-hidden",
    "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:2"
  };
  const _hoisted_2 = {
    class: "grid grid-cols-1 md:grid-cols-2 gap-6",
    "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:28"
  };
  const _hoisted_3 = ["onClick"];
  const _hoisted_4 = {
    class: "harmful-card__header",
    "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:41"
  };
  const _hoisted_5 = {
    class: "flex items-center gap-3 mb-1",
    "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:42"
  };
  const _hoisted_6 = {
    class: "text-3xl",
    "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:43"
  };
  const _hoisted_7 = {
    "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:44"
  };
  const _hoisted_8 = {
    class: "text-lg font-bold text-stone-800",
    "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:45"
  };
  const _hoisted_9 = {
    class: "flex items-center justify-between mt-1",
    "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:48"
  };
  const _hoisted_10 = {
    class: "harmful-card__body",
    "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:57"
  };
  const _hoisted_11 = {
    class: "harmful-card__content",
    "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:58"
  };
  const _hoisted_12 = {
    class: "flex items-start gap-2 text-sm text-stone-600 leading-relaxed",
    "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:59"
  };
  const _hoisted_13 = {
    "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:61"
  };
  const _hoisted_14 = {
    class: "bg-rose-50 rounded-xl p-3 border border-rose-100 mt-3",
    "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:63"
  };
  const _hoisted_15 = {
    class: "text-xs text-rose-700 italic flex items-center gap-2",
    "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:64"
  };
  const _hoisted_16 = {
    "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:65"
  };
  const _hoisted_17 = {
    "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:66"
  };
  const __sfc__ = _defineComponent({
    __name: 'HarmfulTips',
    setup(__props) {
      const tips = [{
        emoji: '👄',
        title: 'Отвечай на звонки вместо кота',
        advice: 'Если у кота зазвонил телефон (у котов они бывают, просто вы не знаете) — хватай трубку и начинай разговор сам: "Мяу? Пардон, ошиблись номером". Во-первых, кот будет считать тебя секретарём. Во-вторых, если звонила тёща — она точно не поймёт, что происходит. В-третьих, представь лицо коллектора, когда ему отвечают "мяу". Бесценно!',
        funIcon: '📞',
        funNote: 'Побочка: кот может потребовать зарплату за использование его имени в корыстных целях.'
      }, {
        emoji: '🧻',
        title: 'Запасайся туалетной бумагой — весь мир сошёл с ума',
        advice: 'Купи сразу 100 рулонов. Поставь из них пирамиду в гостиной. Когда придут гости, скажи что это современная инсталляция "Конец близко, но мы готовы". Если кто-то попросит рулончик — дай строго один и запиши фамилию в журнал учёта. Дисциплина превыше всего! А когда туалетная бумага закончится — используй салфетки, газеты или, в крайнем случае, фантики от конфет.',
        funIcon: '🧻',
        funNote: 'Главный вред: после 50 рулонов начинаешь видеть туалетную бумагу в кошмарах. Она повсюду.'
      }, {
        emoji: '🍕',
        title: 'Ешь пиццу вилкой и ножом — шокируй всех!',
        advice: 'Закажи самую большую пиццу и, глядя прямо в глаза официанту, начинай аккуратно отрезать маленькие кусочки вилкой и ножом. На каждый кусочек делай задумчивое лицо, как дегустатор изысканных блюд. Можно даже причмокивать и говорить: "Ммм, деликатес… чувствуются нотки сыра с оттенком глубокой философии". Пальцы, конечно, вкуснее, но театр абсурда дороже!',
        funIcon: '🍽️',
        funNote: 'Реальный риск: официант вызовет санитаров, а пиццу заберут как вещдок кулинарного преступления.'
      }, {
        emoji: '🛵',
        title: 'Гуляй с зонтиком в солнечную погоду',
        advice: 'Вышел солнце? Отлично! Раскрывай большой пёстрый зонт и иди по улице с гордо поднятой головой. На недоумённые взгляды прохожих отвечай: "Готовлюсь к переменам!" или "Защищаюсь от падающих метеоритов". Если жарко — поясни, что это "теневая йога". А если кто-то скажет, что дождя нет — улыбнись загадочно и ответь: "Он внутри меня".',
        funIcon: '☂️',
        funNote: 'Самое вредное: привыкнув ходить с зонтиком в солнце, ты обязательно забудешь его взять в дождь. Вселенная любит иронию.'
      }, {
        emoji: '🥚',
        title: 'Проверяй свежесть яиц… в магазине',
        advice: 'Перед покупкой каждого яйца поднеси его к уху и энергично потряси. Если слышишь бульканье — яйцо норм. Если тишина — яйцо мертвое, не бери. Когда продавщица спросит, что ты делаешь, важно ответить: "Слушаю, о чём они говорят. Это яйца-несушки, они могут быть болтливыми". Если яйцо вдруг треснет в руке — не теряйся: скажи, что оно "проклюнулось" и требуй скидку на цыплёнка.',
        funIcon: '🐣',
        funNote: 'Учти: после такого перформанса тебя могут попросить больше не приходить в этот магазин. Но слава того стоит!'
      }, {
        emoji: '🧳',
        title: 'Корми бездомных хлебом… с маслом!',
        advice: 'Собери бутерброды: хлеб, масло, сверху — красная икорка, веточка петрушки. Выйди на улицу и торжественно вручи каждому бездомному коту по бутерброду. Коты будут в шоке. Прохожие — в культурном шоке. Потом коты привыкнут и начнут требовать бутерброды регулярно. И вот уже ты — главный спонсор кошачьего гастрономического общества. Гордись!',
        funIcon: '🐈',
        funNote: 'Главный вред: коты перестанут есть обычный корм и начнут плеваться на вискас. Ты испортил целое поколение уличных котов!'
      }];
      const harmfulEmojis = [{
        emoji: '😈',
        left: '4%',
        top: '18%',
        anim: 'sway',
        delay: 0,
        duration: 3,
        size: 26
      }, {
        emoji: '💀',
        left: '94%',
        top: '15%',
        anim: 'wobble',
        delay: 0.7,
        duration: 3.2,
        size: 24
      }, {
        emoji: '👿',
        left: '5%',
        top: '78%',
        anim: 'bounce',
        delay: 1.5,
        duration: 2.5,
        size: 22
      }, {
        emoji: '🔥',
        left: '93%',
        top: '80%',
        anim: 'pulse',
        delay: 0.3,
        duration: 2.8,
        size: 24
      }, {
        emoji: '👹',
        left: '50%',
        top: '6%',
        anim: 'zigzag',
        delay: 2,
        duration: 3,
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
          "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:4"
        }, [_createElementVNode("div", {
          class: "absolute top-10 left-8 text-5xl opacity-5",
          "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:5"
        }, "😈"), _createElementVNode("div", {
          class: "absolute bottom-16 right-12 text-6xl opacity-5",
          "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:6"
        }, "👿"), _createElementVNode("div", {
          class: "absolute top-1/2 right-1/4 text-4xl opacity-5",
          "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:7"
        }, "🔥")], -1)), _createVNode(FloatingEmojis, {
          emojis: harmfulEmojis
        }), _createElementVNode("div", {
          class: "max-w-5xl mx-auto relative z-10",
          ref_key: "sectionRef",
          ref: sectionRef,
          "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:13"
        }, [_createElementVNode("div", {
          class: _normalizeClass(["text-center mb-12", visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']),
          style: {
            "transition": "all 0.8s ease-out"
          },
          "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:15"
        }, [...(_cache[0] || (_cache[0] = [_createElementVNode("div", {
          class: "inline-flex items-center justify-center w-20 h-20 bg-rose-100 rounded-full mb-5 harmful-icon-ring",
          "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:16"
        }, [_createElementVNode("i", {
          class: "fas fa-skull text-3xl text-rose-500 animated-harmful-icon",
          "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:17"
        })], -1), _createElementVNode("h2", {
          class: "text-3xl md:text-4xl font-bold text-stone-800 mb-3",
          "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:19"
        }, " 😈 Вредные советы ", -1), _createElementVNode("p", {
          class: "text-stone-500 text-lg max-w-xl mx-auto",
          "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:22"
        }, " Не делай так! Но если очень хочется — делай с улыбкой ", -1)]))], 2), _createElementVNode("div", _hoisted_2, [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(tips, (tip, idx) => {
          return _createElementVNode("div", {
            key: idx,
            class: _normalizeClass(["harmful-card", [visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10', {
              'harmful-card--open': openIdx.value === idx
            }]]),
            style: _normalizeStyle({
              transitionDelay: `${0.15 + idx * 0.1}s`
            }),
            "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:29"
          }, [_createElementVNode("div", {
            class: "harmful-card__click-area",
            onClick: $event => toggleCard(idx),
            "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:39"
          }, [_createElementVNode("div", _hoisted_4, [_createElementVNode("div", _hoisted_5, [_createElementVNode("span", _hoisted_6, _toDisplayString(tip.emoji), 1), _createElementVNode("div", _hoisted_7, [_createElementVNode("h3", _hoisted_8, _toDisplayString(tip.title), 1)])]), _createElementVNode("div", _hoisted_9, [_cache[1] || (_cache[1] = _createElementVNode("span", {
            class: "text-xs text-rose-600 font-medium flex items-center gap-1",
            "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:49"
          }, [_createElementVNode("i", {
            class: "fas fa-triangle-exclamation",
            "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:50"
          }), _createTextVNode(" Осторожно, абсурд! ")], -1)), _createElementVNode("span", {
            class: _normalizeClass(["text-xs text-stone-400", openIdx.value === idx ? 'arrow-up' : 'arrow-down']),
            "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:52"
          }, "▼", 2)])]), _withDirectives(_createElementVNode("div", _hoisted_10, [_createElementVNode("div", _hoisted_11, [_createElementVNode("div", _hoisted_12, [_cache[2] || (_cache[2] = _createElementVNode("span", {
            class: "text-rose-400 text-lg flex-shrink-0 mt-0.5",
            "data-srcloc": "/pud-smeha-ha/components/HarmfulTips.vue:60"
          }, "👿", -1)), _createElementVNode("p", _hoisted_13, _toDisplayString(tip.advice), 1)]), _createElementVNode("div", _hoisted_14, [_createElementVNode("p", _hoisted_15, [_createElementVNode("span", _hoisted_16, _toDisplayString(tip.funIcon), 1), _createElementVNode("span", _hoisted_17, _toDisplayString(tip.funNote), 1)])])])], 512), [[_vShow, openIdx.value === idx]])], 8, _hoisted_3)], 6);
        }), 64))])], 512)]);
      };
    }
  });
  ;
  (function () {
    const style = document.createElement('style');
    style.innerHTML = "\n.harmful-tips[data-v-ed3c0b72] {\n  background: linear-gradient(180deg, #FFF1F2 0%, #FFF7ED 50%, #FEF2F2 100%);\n}\n\n/* Animated header icon */\n.harmful-icon-ring[data-v-ed3c0b72] {\n  animation: harmful-pulse-ed3c0b72 2s ease-in-out infinite;\n}\n.animated-harmful-icon[data-v-ed3c0b72] {\n  animation: harmful-shake-ed3c0b72 2.5s ease-in-out infinite;\n}\n@keyframes harmful-pulse-ed3c0b72 {\n0%, 100% { box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.3);\n}\n50% { box-shadow: 0 0 24px 12px rgba(244, 63, 94, 0.15);\n}\n}\n@keyframes harmful-shake-ed3c0b72 {\n0%, 100% { transform: rotate(0deg);\n}\n15% { transform: rotate(-10deg);\n}\n30% { transform: rotate(8deg);\n}\n45% { transform: rotate(-6deg);\n}\n60% { transform: rotate(4deg);\n}\n}\n\n/* Harmful cards */\n.harmful-card[data-v-ed3c0b72] {\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(4px);\n  border-radius: 20px;\n  border: 2px solid #FECACA;\n  overflow: hidden;\n  transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;\n}\n.harmful-card[data-v-ed3c0b72]:hover {\n  border-color: #FB7185;\n  box-shadow: 0 8px 30px rgba(244, 63, 94, 0.12);\n  transform: translateY(-2px);\n}\n.harmful-card--open[data-v-ed3c0b72] {\n  border-color: #FB7185;\n  background: white;\n  box-shadow: 0 8px 30px rgba(244, 63, 94, 0.12);\n}\n.harmful-card__click-area[data-v-ed3c0b72] {\n  cursor: pointer;\n}\n.harmful-card__header[data-v-ed3c0b72] {\n  padding: 20px;\n  user-select: none;\n}\n.harmful-card--open .harmful-card__header[data-v-ed3c0b72] {\n  padding-bottom: 12px;\n}\n.harmful-card__body[data-v-ed3c0b72] {\n  animation: fadeSlideIn-ed3c0b72 0.3s ease-out;\n}\n.harmful-card__content[data-v-ed3c0b72] {\n  padding: 0 20px 20px;\n  border-top: 2px dashed #FEE2E2;\n}\n.harmful-card__content > div[data-v-ed3c0b72] {\n  margin-top: 16px;\n}\n.arrow-up[data-v-ed3c0b72] {\n  display: inline-block;\n  transform: rotate(180deg);\n}\n.arrow-down[data-v-ed3c0b72] {\n  display: inline-block;\n}\n@keyframes fadeSlideIn-ed3c0b72 {\nfrom { opacity: 0; transform: translateY(-6px);\n}\nto { opacity: 1; transform: translateY(0);\n}\n}\n";
    document.head.appendChild(style);
  })();
  (__sfc__.__vccOpts || __sfc__).__scopeId = "data-v-ed3c0b72";
  const __default_1 = __sfc__;
  __exports.default = __default_1;
  return __exports;
})();
export default __exports.default;
