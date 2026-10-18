import { defineComponent as _defineComponent } from 'vue';
import { createVNode as _createVNode } from 'vue';
import { createElementVNode as _createElementVNode } from 'vue';
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
    class: "max-w-5xl mx-auto",
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:5"
  };
  const _hoisted_2 = {
    class: "grid grid-cols-1 md:grid-cols-2 gap-6",
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:18"
  };
  const _hoisted_3 = ["onClick"];
  const _hoisted_4 = {
    class: "recipe-card__header",
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:31"
  };
  const _hoisted_5 = {
    class: "flex items-center gap-3 mb-2",
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:32"
  };
  const _hoisted_6 = {
    class: "text-3xl",
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:33"
  };
  const _hoisted_7 = {
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:34"
  };
  const _hoisted_8 = {
    class: "text-lg font-bold text-stone-800",
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:35"
  };
  const _hoisted_9 = {
    class: "text-stone-500 text-xs italic",
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:36"
  };
  const _hoisted_10 = {
    class: "flex items-center justify-between mt-1",
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:39"
  };
  const _hoisted_11 = {
    class: "text-xs text-amber-600 font-medium",
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:40"
  };
  const _hoisted_12 = {
    class: "recipe-card__body",
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:46"
  };
  const _hoisted_13 = {
    class: "recipe-card__content",
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:47"
  };
  const _hoisted_14 = {
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:48"
  };
  const _hoisted_15 = {
    class: "space-y-1",
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:52"
  };
  const _hoisted_16 = {
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:55"
  };
  const _hoisted_17 = {
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:59"
  };
  const _hoisted_18 = {
    class: "text-sm text-stone-600 leading-relaxed",
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:63"
  };
  const _hoisted_19 = {
    class: "bg-amber-50 rounded-xl p-3 border border-amber-100",
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:65"
  };
  const _hoisted_20 = {
    class: "text-xs text-amber-700 italic flex items-center gap-2",
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:66"
  };
  const _hoisted_21 = {
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:67"
  };
  const _hoisted_22 = {
    "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:68"
  };
  const __sfc__ = _defineComponent({
    __name: 'RecipeSection',
    setup(__props) {
      const recipes = [{
        emoji: '🥣',
        title: 'Щи да каша — веселье наше!',
        tagline: 'Классика русского смеха',
        time: '15 минут',
        ingredients: ['Улыбка широкая — 2 ст. ложки', 'Доброта душевная — 1 кружка', 'Хорошая новость — по вкусу', 'Лапша самоиронии — горсть'],
        method: 'Разогреть на сковороде доброту. Добавить улыбку и хорошую новость. Варить на медленном огне 5 минут, периодически помешивая. За минуту до готовности бросить горсть лапши самоиронии. Подавать с чёрным хлебом и белой завистью.',
        funIcon: '🧑‍🌾',
        funNote: '"Щи — всему голова! А смех — всему душа!" — говорила бабушка, наливая добавку.'
      }, {
        emoji: '🍹',
        title: 'Компот из хихиканья',
        tagline: 'Освежает лучше лимонада',
        time: '5 минут',
        ingredients: ['Хихиканье звонкое — 3 стакана', 'Смешинки отборные — горсть', 'Лёд из безразличия — по желанию', 'Веточка мяты для настроения'],
        method: 'Насыпать смешинки в стакан. Залить охлаждённым хихиканьем. Добавить лёд — он растопит любую серьёзность. Украсить веточкой мяты. Пить через трубочку-улыбку, прихлёбывая и хохоча!',
        funIcon: '🧊',
        funNote: 'Врачи рекомендуют: 1 стакан компота заменяет 3 сеанса психотерапии. Проверено на котах!'
      }, {
        emoji: '🥟',
        title: 'Пельмени радости с сюрпризом',
        tagline: 'В каждом — начинка из анекдота',
        time: '30 минут',
        ingredients: ['Тесто для улыбки — 500 г', 'Фарш из свежих анекдотов — 300 г', 'Сметана самоиронии — 3 ст. ложки', 'Уксус веселья — чайная ложка'],
        method: 'Замесить тесто на воде с юмором. В каждый кружочек теста завернуть по одному анекдоту. Варить в бульоне из смеха 7 минут. Подавать со сметаной самоиронии и каплей уксуса веселья. Осторожно: можно лопнуть от смеха!',
        funIcon: '🔥',
        funNote: 'Главное правило: пельмени не прилипают друг к другу, если их варить в хорошем настроении!'
      }, {
        emoji: '🥗',
        title: 'Окрошка весельная',
        tagline: 'Холодное решение для жарких дней',
        time: '10 минут',
        ingredients: ['Квас веселья — 1 литр', 'Редиска-хохотушка — 5 штук', 'Яйца всмятку от смеха — 2 шт.', 'Огурцы свежие — 3 шт.', 'Зелень ехидства — пучок'],
        method: 'Нарезать всё кубиками-улыбками: редиску, яйца, огурцы. Залить квасом веселья. Посыпать зеленью ехидства. Добавить ложку сметаны. Кушать и хохотать, особенно если квас попал в нос!',
        funIcon: '🥒',
        funNote: 'Лучше всего готовить на даче в компании соседей. Шум, гам и общее веселье входят в рецепт!'
      }, {
        emoji: '🍳',
        title: 'Яичница-хохотунья',
        tagline: 'Завтрак, который задаст тон',
        time: '7 минут',
        ingredients: ['Яйца куриные — 2 шт.', 'Масло сливочное — 20 г', 'Желток радости — 1 дополнительный', 'Хлеб бородинский — 2 ломтика', 'Соль смеховая — щепотка'],
        method: 'Разбить яйца на сковороду так, чтобы желток улыбался. Добавить капельку масла. Обжарить до золотистого настроения. Посолить щепоткой смеха. Подавать с бородинским хлебом и чашкой оптимизма.',
        funIcon: '🍞',
        funNote: 'Если желток потек не в ту сторону — не беда! Просто скажи: "Так и задумано!"'
      }, {
        emoji: '☕',
        title: 'Чай с сушками самоиронии',
        tagline: 'Для уютных посиделок',
        time: '10 минут',
        ingredients: ['Чай чёрный листовой — 2 ч. ложки', 'Сушки хрустящие — 4 шт.', 'Варенье из воспоминаний — 3 ст. ложки', 'Сахар — 1 кусочек ностальгии'],
        method: 'Заварить чай в заварнике. Разложить сушки на блюдце. Намазать варенье из воспоминаний. За чаем вспомнить что-то смешное из прошлого. Сушку макать в чай — но не выпускать из рук, пока не намокнет!',
        funIcon: '🍵',
        funNote: 'Сушка, упавшая в чай — к счастью. Две сушки — к двойному счастью. Три — зови гостей!'
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
      const recipeEmojis = [{
        emoji: '🍳',
        left: '4%',
        top: '15%',
        anim: 'bounce',
        delay: 0,
        duration: 2.5,
        size: 26
      }, {
        emoji: '🥘',
        left: '94%',
        top: '12%',
        anim: 'float',
        delay: 0.6,
        duration: 3,
        size: 24
      }, {
        emoji: '🥣',
        left: '3%',
        top: '78%',
        anim: 'wobble',
        delay: 1.5,
        duration: 3.2,
        size: 22
      }, {
        emoji: '🍪',
        left: '93%',
        top: '80%',
        anim: 'hop',
        delay: 0.3,
        duration: 3.5,
        size: 24
      }, {
        emoji: '🥟',
        left: '50%',
        top: '5%',
        anim: 'twinkle',
        delay: 2,
        duration: 2,
        size: 20
      }];
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
        return _openBlock(), _createElementBlock("section", {
          class: "recipe-section py-20 px-4 relative overflow-hidden",
          ref_key: "sectionRef",
          ref: sectionRef,
          "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:2"
        }, [_createVNode(FloatingEmojis, {
          emojis: recipeEmojis
        }), _createElementVNode("div", _hoisted_1, [_createElementVNode("div", {
          class: _normalizeClass(["text-center mb-12", visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']),
          style: {
            "transition": "all 0.8s ease-out"
          },
          "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:7"
        }, [...(_cache[0] || (_cache[0] = [_createElementVNode("span", {
          class: "inline-block text-4xl mb-2",
          "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:8"
        }, "🧾", -1), _createElementVNode("h2", {
          class: "text-3xl md:text-4xl font-bold text-stone-800 mb-3",
          "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:9"
        }, " Рецепты Пуда Смеха ", -1), _createElementVNode("p", {
          class: "text-stone-500 text-lg max-w-xl mx-auto",
          "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:12"
        }, " Одобрено Министерством Радости. Побочных эффектов нет (кроме счастливой улыбки). ", -1)]))], 2), _createElementVNode("div", _hoisted_2, [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(recipes, (recipe, idx) => {
          return _createElementVNode("div", {
            key: idx,
            class: _normalizeClass(["recipe-card", [visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10', {
              'recipe-card--open': openIdx.value === idx
            }]]),
            style: _normalizeStyle({
              transitionDelay: `${0.15 + idx * 0.1}s`
            }),
            "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:19"
          }, [_createElementVNode("div", {
            class: "recipe-card__click-area",
            onClick: $event => toggleCard(idx),
            "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:29"
          }, [_createElementVNode("div", _hoisted_4, [_createElementVNode("div", _hoisted_5, [_createElementVNode("span", _hoisted_6, _toDisplayString(recipe.emoji), 1), _createElementVNode("div", _hoisted_7, [_createElementVNode("h3", _hoisted_8, _toDisplayString(recipe.title), 1), _createElementVNode("p", _hoisted_9, _toDisplayString(recipe.tagline), 1)])]), _createElementVNode("div", _hoisted_10, [_createElementVNode("span", _hoisted_11, _toDisplayString(recipe.time), 1), _createElementVNode("span", {
            class: _normalizeClass(["text-xs text-stone-400", openIdx.value === idx ? 'arrow-up' : 'arrow-down']),
            "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:41"
          }, "▼", 2)])]), _withDirectives(_createElementVNode("div", _hoisted_12, [_createElementVNode("div", _hoisted_13, [_createElementVNode("div", _hoisted_14, [_cache[2] || (_cache[2] = _createElementVNode("h4", {
            class: "font-semibold text-stone-700 text-sm flex items-center gap-1.5 mb-2",
            "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:49"
          }, [_createElementVNode("span", {
            class: "text-amber-500",
            "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:50"
          }, "🧂"), _createTextVNode(" Ингредиенты ")], -1)), _createElementVNode("ul", _hoisted_15, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(recipe.ingredients, (ing, i) => {
            return _openBlock(), _createElementBlock("li", {
              key: i,
              class: "flex items-center gap-2 text-sm text-stone-600",
              "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:53"
            }, [_cache[1] || (_cache[1] = _createElementVNode("span", {
              class: "w-1.5 h-1.5 rounded-full bg-amber-300 flex-shrink-0",
              "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:54"
            }, null, -1)), _createElementVNode("span", _hoisted_16, _toDisplayString(ing), 1)]);
          }), 128))])]), _createElementVNode("div", _hoisted_17, [_cache[3] || (_cache[3] = _createElementVNode("h4", {
            class: "font-semibold text-stone-700 text-sm flex items-center gap-1.5 mb-2",
            "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:60"
          }, [_createElementVNode("span", {
            class: "text-rose-400",
            "data-srcloc": "/pud-smeha-ha/components/RecipeSection.vue:61"
          }, "👨‍🍳"), _createTextVNode(" Приготовление ")], -1)), _createElementVNode("p", _hoisted_18, _toDisplayString(recipe.method), 1)]), _createElementVNode("div", _hoisted_19, [_createElementVNode("p", _hoisted_20, [_createElementVNode("span", _hoisted_21, _toDisplayString(recipe.funIcon), 1), _createElementVNode("span", _hoisted_22, _toDisplayString(recipe.funNote), 1)])])])], 512), [[_vShow, openIdx.value === idx]])], 8, _hoisted_3)], 6);
        }), 64))])])], 512);
      };
    }
  });
  ;
  (function () {
    const style = document.createElement('style');
    style.innerHTML = "\n.recipe-section[data-v-7f07a69e] {\n  background: linear-gradient(180deg, #FFF1F2 0%, #FFFBEB 50%, #FEF3C7 100%);\n}\n.recipe-card[data-v-7f07a69e] {\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(4px);\n  border-radius: 20px;\n  border: 2px solid #FDE68A;\n  overflow: hidden;\n  transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;\n}\n.recipe-card[data-v-7f07a69e]:hover {\n  border-color: #F59E0B;\n  box-shadow: 0 8px 30px rgba(245, 158, 11, 0.15);\n  transform: translateY(-2px);\n}\n.recipe-card--open[data-v-7f07a69e] {\n  border-color: #F59E0B;\n  background: white;\n  box-shadow: 0 8px 30px rgba(245, 158, 11, 0.15);\n}\n.recipe-card__click-area[data-v-7f07a69e] {\n  cursor: pointer;\n}\n.recipe-card__header[data-v-7f07a69e] {\n  padding: 20px;\n  user-select: none;\n}\n.recipe-card--open .recipe-card__header[data-v-7f07a69e] {\n  padding-bottom: 12px;\n}\n.recipe-card__body[data-v-7f07a69e] {\n  animation: fadeSlideIn-7f07a69e 0.3s ease-out;\n}\n.recipe-card__content[data-v-7f07a69e] {\n  padding: 0 20px 20px;\n  border-top: 2px dashed #FEF3C7;\n}\n.recipe-card__content > div[data-v-7f07a69e] {\n  margin-top: 16px;\n}\n.arrow-up[data-v-7f07a69e] {\n  display: inline-block;\n  transform: rotate(180deg);\n}\n.arrow-down[data-v-7f07a69e] {\n  display: inline-block;\n}\n@keyframes fadeSlideIn-7f07a69e {\nfrom { opacity: 0; transform: translateY(-6px);\n}\nto { opacity: 1; transform: translateY(0);\n}\n}\n";
    document.head.appendChild(style);
  })();
  (__sfc__.__vccOpts || __sfc__).__scopeId = "data-v-7f07a69e";
  const __default_1 = __sfc__;
  __exports.default = __default_1;
  return __exports;
})();
export default __exports.default;
