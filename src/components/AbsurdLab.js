import { h } from 'vue';
import { defineComponent as _defineComponent } from 'vue';
import { createElementVNode as _createElementVNode } from 'vue';
import { createVNode as _createVNode } from 'vue';
import { normalizeClass as _normalizeClass } from 'vue';
import { toDisplayString as _toDisplayString } from 'vue';
import { createTextVNode as _createTextVNode } from 'vue';
import { renderList as _renderList } from 'vue';
import { Fragment as _Fragment } from 'vue';
import { openBlock as _openBlock } from 'vue';
import { createElementBlock as _createElementBlock } from 'vue';
import { Transition as _Transition } from 'vue';
import { withCtx as _withCtx } from 'vue';
import { createStaticVNode as _createStaticVNode } from 'vue';
import { ref as ref } from 'vue';
import { onMounted as onMounted } from 'vue';
import FloatingEmojis from './FloatingEmojis.js';
















const __exports = (() => {
  const __exports = {};
  const _hoisted_1 = {
    class: "absurd-lab py-20 px-4 relative overflow-hidden",
    "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:2"
  };
  const _hoisted_2 = {
    class: "result-area min-h-[120px] flex items-center justify-center mb-8",
    "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:37"
  };
  const _hoisted_3 = {
    class: "text-4xl mb-3",
    "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:40"
  };
  const _hoisted_4 = {
    class: "text-xl md:text-2xl font-semibold text-stone-800 leading-relaxed",
    "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:41"
  };
  const _hoisted_5 = {
    class: "text-rose-500",
    "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:43"
  };
  const _hoisted_6 = {
    class: "mt-2 flex justify-center gap-1 text-amber-400",
    "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:46"
  };
  const _hoisted_7 = {
    key: 1,
    class: "text-center",
    "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:50"
  };
  const _hoisted_8 = {
    class: "text-center",
    "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:57"
  };
  const _hoisted_9 = {
    class: "flex items-center gap-3",
    "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:63"
  };
  const __sfc__ = _defineComponent({
    __name: 'AbsurdLab',
    setup(__props) {
      const whos = ['Бабушка-астроном', 'Продавец счастья', 'Кот в сапогах-кроссовках', 'Дрессировщик облаков', 'Пингвин-диджей', 'Сантехник-философ', 'Ёжик-паркурщик', 'Бухгалтер-серфингист', 'Ленивец-спринтер', 'Борщ-экстрасенс', 'Таксист-поэт', 'Диванный детектив', 'Сосиска-путешественница', 'Аквариумный кит', 'Пельмень-экстремал'];
      const doeses = ['танцует ламбаду', 'читает рэп', 'печёт бетонные пирожки', 'играет в шахматы с холодильником', 'проводит аудит радуги', 'жонглирует бутербродами', 'пишет диссертацию о храпе хомяков', 'запускает воздушные шары в ванной', 'медитирует на звук микроволновки', 'дирижирует оркестром пылесосов', 'устраивает концерт для кактусов', 'гоняет чаи с домовым', 'открывает портал в параллельный шкаф', 'треплет по щёчке гравитацию', 'ставит эксперимент над пельменями'];
      const wheres = ['в очереди за хлебом', 'на крыше маршрутки', 'в библиотеке подводных лодок', 'на фестивале лени', 'в космосе без скафандра (но с зонтиком)', 'в супермаркете посреди ночи', 'на научной конференции енотов', 'в бассейне с киселем', 'на репетиции оркестра вилок', 'в очереди за второй очередью', 'на курсах повышения квалификации ёлок', 'в TikTok-студии дедушки', 'на чемпионате мира по объятиям', 'в зоне турбулентности дивана', 'на дне рождения Буратино'];
      const currentPhrase = ref(null);
      const phraseKey = ref(0);
      const isGenerating = ref(false);
      const labEmojis = [{
        emoji: '🧪',
        left: '4%',
        top: '18%',
        anim: 'float',
        delay: 0,
        duration: 3,
        size: 28
      }, {
        emoji: '🔬',
        left: '93%',
        top: '15%',
        anim: 'wobble',
        delay: 0.8,
        duration: 2.8,
        size: 26
      }, {
        emoji: '⚗️',
        left: '5%',
        top: '75%',
        anim: 'bounce',
        delay: 1.2,
        duration: 3.5,
        size: 24
      }, {
        emoji: '🤪',
        left: '92%',
        top: '78%',
        anim: 'zigzag',
        delay: 0.3,
        duration: 3,
        size: 22
      }, {
        emoji: '💥',
        left: '50%',
        top: '6%',
        anim: 'pulse',
        delay: 2,
        duration: 2,
        size: 20
      }];
      const visible = ref(false);
      const sectionRef = ref(null);
      const starsCount = ref(3);
      function generatePhrase() {
        isGenerating.value = true;
        phraseKey.value++;
        setTimeout(() => {
          currentPhrase.value = {
            emoji: ['😄', '🤣', '😂', '😆', '🥴', '😅', '🤪', '😏'][Math.floor(Math.random() * 8)],
            who: whos[Math.floor(Math.random() * whos.length)],
            does: doeses[Math.floor(Math.random() * doeses.length)],
            where: wheres[Math.floor(Math.random() * wheres.length)]
          };
          starsCount.value = Math.floor(Math.random() * 3) + 3;
          isGenerating.value = false;
        }, 400);
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
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock("section", { ..._hoisted_1, id: 'absurd-lab' }, [h('img', {src: '/illustrations/lab.webp', alt: 'Ёжик в очках исследует пельмени, которые кружат над чашкой', width: 384, height: 256, loading: 'lazy', class: 'bag-vignette lab-vignette'}), _cache[3] || (_cache[3] = _createStaticVNode("<div class=\"absolute inset-0 pointer-events-none overflow-hidden\" data-srcloc=\"/pud-smeha-ha/components/AbsurdLab.vue:4\" data-v-295dea13><div class=\"absolute top-10 right-20 text-6xl opacity-5\" data-srcloc=\"/pud-smeha-ha/components/AbsurdLab.vue:5\" data-v-295dea13>🧪</div><div class=\"absolute bottom-20 left-16 text-5xl opacity-5\" data-srcloc=\"/pud-smeha-ha/components/AbsurdLab.vue:6\" data-v-295dea13>⚗️</div><div class=\"absolute top-1/2 left-1/4 text-4xl opacity-5\" data-srcloc=\"/pud-smeha-ha/components/AbsurdLab.vue:7\" data-v-295dea13>🔬</div><div class=\"bubble bubble-1\" data-srcloc=\"/pud-smeha-ha/components/AbsurdLab.vue:8\" data-v-295dea13></div><div class=\"bubble bubble-2\" data-srcloc=\"/pud-smeha-ha/components/AbsurdLab.vue:9\" data-v-295dea13></div><div class=\"bubble bubble-3\" data-srcloc=\"/pud-smeha-ha/components/AbsurdLab.vue:10\" data-v-295dea13></div></div>", 1)), _createVNode(FloatingEmojis, {
          emojis: labEmojis
        }), _createElementVNode("div", {
          class: "max-w-3xl mx-auto relative z-10",
          ref_key: "sectionRef",
          ref: sectionRef,
          "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:16"
        }, [_createElementVNode("div", {
          class: _normalizeClass(["text-center mb-12", visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']),
          style: {
            "transition": "all 0.8s ease-out"
          },
          "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:18"
        }, [...(_cache[0] || (_cache[0] = [_createElementVNode("div", {
          class: "inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-5 lab-icon-ring",
          "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:19"
        }, [_createElementVNode("i", {
          class: "fas fa-flask text-3xl text-purple-500 animated-lab-icon",
          "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:20"
        })], -1), _createElementVNode("h2", {
          class: "text-3xl md:text-4xl font-bold text-stone-800 mb-3",
          "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:22"
        }, " 🎲 Лаборатория абсурда ", -1), _createElementVNode("p", {
          class: "text-stone-500 text-lg max-w-xl mx-auto",
          "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:25"
        }, " Смешай несовместимое — получай улыбку! Нажми на кнопку — и мир станет чуточку смешнее ", -1)]))], 2), _createElementVNode("div", {
          class: _normalizeClass(["bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border-2 border-purple-100", visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']),
          style: {
            "transition": "all 0.8s ease-out 0.2s"
          },
          "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:31"
        }, [_createElementVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "result-pop",
          mode: "out-in"
        }, {
          default: _withCtx(() => [currentPhrase.value ? (_openBlock(), _createElementBlock("div", {
            key: phraseKey.value,
            class: "text-center",
            "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:39"
          }, [_createElementVNode("div", _hoisted_3, _toDisplayString(currentPhrase.value.emoji), 1), _createElementVNode("p", _hoisted_4, [_createTextVNode(" «" + _toDisplayString(currentPhrase.value.who) + " ", 1), _createElementVNode("span", _hoisted_5, _toDisplayString(currentPhrase.value.does), 1), _createTextVNode(" " + _toDisplayString(currentPhrase.value.where) + "» ", 1)]), _createElementVNode("div", _hoisted_6, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(starsCount.value, s => {
            return _openBlock(), _createElementBlock("span", {
              key: s,
              "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:47"
            }, "⭐");
          }), 128))])])) : (_openBlock(), _createElementBlock("div", _hoisted_7, [...(_cache[1] || (_cache[1] = [_createElementVNode("p", {
            class: "text-stone-400 text-lg",
            "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:51"
          }, "🔀 Нажми на кнопку — и мир заиграет новыми красками!", -1)]))]))]),
          _: 1
        })]), _createElementVNode("div", _hoisted_8, [_createElementVNode("button", {
          onClick: generatePhrase,
          class: _normalizeClass(["generate-btn bg-gradient-to-r from-purple-500 via-rose-500 to-amber-500 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl", {
            'btn-generating': isGenerating.value
          }]),
          "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:58"
        }, [_createElementVNode("span", _hoisted_9, [_createElementVNode("i", {
          class: _normalizeClass(["fas fa-shuffle", {
            'fa-spin': isGenerating.value
          }]),
          "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:64"
        }, null, 2), _createTextVNode(" " + _toDisplayString(isGenerating.value ? 'Смешиваем...' : '🔀 Смешать ещё!'), 1)])], 2)]), _cache[2] || (_cache[2] = _createElementVNode("p", {
          class: "text-center mt-6 text-stone-400 text-sm",
          "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:71"
        }, [_createElementVNode("i", {
          class: "fas fa-sync-alt text-xs mr-1",
          "data-srcloc": "/pud-smeha-ha/components/AbsurdLab.vue:72"
        }), _createTextVNode(" Менять можно сколько угодно — абсурд не кончается! ")], -1))], 2)], 512)]);
      };
    }
  });
  ;
  (function () {
    const style = document.createElement('style');
    style.innerHTML = "\n.absurd-lab[data-v-295dea13] {\n  background: linear-gradient(180deg, #FFFBEB 0%, #F3E8FF 50%, #F5F3FF 100%);\n}\n\n/* Animated header icon */\n.lab-icon-ring[data-v-295dea13] {\n  animation: lab-pulse-295dea13 2.5s ease-in-out infinite;\n}\n.animated-lab-icon[data-v-295dea13] {\n  animation: lab-bubble-295dea13 2s ease-in-out infinite;\n}\n@keyframes lab-pulse-295dea13 {\n0%, 100% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.3);\n}\n50% { box-shadow: 0 0 24px 12px rgba(168, 85, 247, 0.12);\n}\n}\n@keyframes lab-bubble-295dea13 {\n0%, 100% { transform: scale(1) translateY(0);\n}\n30% { transform: scale(1.1) translateY(-4px);\n}\n60% { transform: scale(1.05) translateY(-2px);\n}\n}\n\n/* Floating bubbles */\n.bubble[data-v-295dea13] {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0.08;\n  pointer-events: none;\n}\n.bubble-1[data-v-295dea13] {\n  width: 60px;\n  height: 60px;\n  background: linear-gradient(135deg, #A855F7, #D946EF);\n  top: 15%;\n  left: 8%;\n  animation: bubble-rise-295dea13 5s ease-in-out infinite;\n}\n.bubble-2[data-v-295dea13] {\n  width: 40px;\n  height: 40px;\n  background: linear-gradient(135deg, #F59E0B, #EF4444);\n  top: 60%;\n  right: 10%;\n  animation: bubble-rise-295dea13 4s ease-in-out infinite 1.5s;\n}\n.bubble-3[data-v-295dea13] {\n  width: 30px;\n  height: 30px;\n  background: linear-gradient(135deg, #3B82F6, #8B5CF6);\n  top: 30%;\n  right: 25%;\n  animation: bubble-rise-295dea13 6s ease-in-out infinite 3s;\n}\n@keyframes bubble-rise-295dea13 {\n0%, 100% { transform: translateY(0) scale(1);\n}\n50% { transform: translateY(-30px) scale(1.2);\n}\n}\n\n/* Result animations */\n.result-area[data-v-295dea13] {\n  transition: all 0.3s ease;\n}\n.result-pop-enter-active[data-v-295dea13] {\n  animation: pop-in-295dea13 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.result-pop-leave-active[data-v-295dea13] {\n  animation: pop-in-295dea13 0.2s ease-in reverse;\n}\n@keyframes pop-in-295dea13 {\nfrom { opacity: 0; transform: scale(0.8) translateY(10px);\n}\nto { opacity: 1; transform: scale(1) translateY(0);\n}\n}\n\n/* Generate button */\n.generate-btn[data-v-295dea13] {\n  box-shadow: 0 4px 20px rgba(168, 85, 247, 0.3);\n}\n.generate-btn[data-v-295dea13]:hover {\n  box-shadow: 0 6px 30px rgba(168, 85, 247, 0.4);\n}\n.btn-generating[data-v-295dea13] {\n  animation: generating-glow-295dea13 0.6s ease-in-out infinite alternate;\n}\n@keyframes generating-glow-295dea13 {\nfrom { box-shadow: 0 4px 20px rgba(168, 85, 247, 0.3);\n}\nto { box-shadow: 0 4px 30px rgba(239, 68, 68, 0.4);\n}\n}\n";
    document.head.appendChild(style);
  })();
  (__sfc__.__vccOpts || __sfc__).__scopeId = "data-v-295dea13";
  const __default_1 = __sfc__;
  __exports.default = __default_1;
  return __exports;
})();
export default __exports.default;
