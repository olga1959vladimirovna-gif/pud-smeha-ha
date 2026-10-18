import { h } from 'vue';
import { defineComponent as _defineComponent } from 'vue';
import { createElementVNode as _createElementVNode } from 'vue';
import { createVNode as _createVNode } from 'vue';
import { normalizeClass as _normalizeClass } from 'vue';
import { renderList as _renderList } from 'vue';
import { Fragment as _Fragment } from 'vue';
import { openBlock as _openBlock } from 'vue';
import { createElementBlock as _createElementBlock } from 'vue';
import { toDisplayString as _toDisplayString } from 'vue';
import { normalizeStyle as _normalizeStyle } from 'vue';
import { createCommentVNode as _createCommentVNode } from 'vue';
import { Transition as _Transition } from 'vue';
import { withCtx as _withCtx } from 'vue';
import { ref as ref } from 'vue';
import { onMounted as onMounted } from 'vue';
import FloatingEmojis from './FloatingEmojis.js';
















const __exports = (() => {
  const __exports = {};
  const _hoisted_1 = {
    class: "mail-section py-20 px-4 relative overflow-hidden",
    "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:2"
  };
  const _hoisted_2 = {
    class: "relative w-72 h-48 mb-6",
    "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:33"
  };
  const _hoisted_3 = ["onClick"];
  const _hoisted_4 = {
    class: "envelope-front",
    "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:42"
  };
  const _hoisted_5 = {
    class: "stamp",
    "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:47"
  };
  const _hoisted_6 = {
    key: 0,
    class: "letter-content bg-white rounded-2xl p-8 shadow-lg border border-amber-100 max-w-lg w-full",
    "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:59"
  };
  const _hoisted_7 = {
    class: "flex items-center gap-2 mb-4 pb-3 border-b border-dashed border-amber-100",
    "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:60"
  };
  const _hoisted_8 = {
    class: "text-2xl",
    "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:61"
  };
  const _hoisted_9 = {
    "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:62"
  };
  const _hoisted_10 = {
    class: "font-bold text-stone-800",
    "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:63"
  };
  const _hoisted_11 = {
    class: "text-xs text-stone-400",
    "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:64"
  };
  const _hoisted_12 = {
    class: "text-stone-700 leading-relaxed text-lg italic",
    "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:67"
  };
  const _hoisted_13 = {
    key: 0,
    class: "text-stone-400 text-sm mt-4 animate-pulse",
    "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:83"
  };
  const __sfc__ = _defineComponent({
    __name: 'MailSection',
    setup(__props) {
      const letters = [{
        emoji: '🌈',
        title: 'Обыкновенное чудо',
        who: 'Понедельничное утро',
        text: 'Дорогой мой человек! Знаешь, я тут подумал: смех — это единственная вещь на свете, которой чем больше делишься, тем больше становится. Парадокс, да? Попробуй сегодня улыбнуться трём незнакомцам. Первый удивится, второй нахмурится, третий улыбнётся в ответ. И всё — мир стал чуточку теплее. Спасибо, что ты есть!'
      }, {
        emoji: '🦋',
        title: 'Про крылья',
        who: 'Секрет счастья',
        text: 'Говорят, что смех — это крылья души. Когда ты смеёшься, ты взлетаешь над проблемами, над серыми буднями, над «надо», «должен» и «успею». Пусть даже на минуту. Но эта минута — твоя. Чистая, лёгкая, свободная. Не лишай себя полёта. Даже если вокруг всё серьёзно — внутри можно порхать!'
      }, {
        emoji: '🌟',
        title: 'Звёздная пыль',
        who: 'Маленькая магия',
        text: 'Каждый раз, когда ты смеёшься от души, где-то зажигается маленькая звёздочка. Серьёзно! Я проверял. Самые яркие звёзды на небе — это смех влюблённых, друзей за ужином и тех, кто забыл, что «так не принято». Смейся чаще — пусть твоя галактика сияет!'
      }, {
        emoji: '🍪',
        title: 'Печенье с предсказанием',
        who: 'Ночной разговор',
        text: 'Ты замечал, что лучшие разговоры случаются ночью на кухне? Когда чай остыл, печенье закончилось, а темы для смеха — нет. Вот ради таких моментов я и хожу по миру. Храни их в сердце. А если не с кем сейчас сидеть на кухне — знай, я с тобой. Посмейся просто так, я услышу!'
      }, {
        emoji: '🎈',
        title: 'Воздушный шарик',
        who: 'Субботнее настроение',
        text: 'Сегодня я надул целый воздушный шарик смеха и отправил его по ветру. Он летит к тому, кто сейчас грустит. Может быть, он залетит к тебе в окошко? Лови! Внутри — порция лёгкости, щепотка абсурда и большой тёплый «привет». Держи крепче, чтобы не улетел обратно!'
      }, {
        emoji: '🎭',
        title: 'Театр одного зрителя',
        who: 'Маленькая исповедь',
        text: 'Иногда я думаю: а что, если все люди на самом деле весёлые, просто забыли об этом? Как будто надели серьёзную маску и не могут снять. Но маска — это не лицо. Твой настоящий смех живёт под ней и ждёт своего часа. Снимай маску, когда никто не видит. Или когда все видят — так даже смешнее!'
      }];
      const openedIndex = ref(0);
      const currentLetter = ref(null);
      const visible = ref(false);
      const sectionRef = ref(null);
      const pastelColors = [{
        bg: '#FEF3C7',
        border: '#FDE68A',
        shadow: 'rgba(251,191,36,0.2)'
      }, {
        bg: '#FCE7F3',
        border: '#F9A8D4',
        shadow: 'rgba(244,114,182,0.2)'
      }, {
        bg: '#DBEAFE',
        border: '#93C5FD',
        shadow: 'rgba(96,165,250,0.2)'
      }];
      function envelopeStyle(n) {
        const color = pastelColors[(n - 1) % pastelColors.length];
        return {
          background: color.bg,
          borderColor: color.border,
          boxShadow: `0 4px 12px ${color.shadow}`
        };
      }
      function openLetter(n) {
        // Don't open if already opened
        if (openedIndex.value >= n) return;
        openedIndex.value = n;
        // Pick a random letter after the animation
        setTimeout(() => {
          const available = [...letters];
          // Avoid the same letter if possible
          const idx = Math.floor(Math.random() * available.length);
          currentLetter.value = available[idx];
        }, 400);
      }
      function resetLetters() {
        currentLetter.value = null;
        openedIndex.value = 0;
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
      const mailEmojis = [{
        emoji: '✉️',
        left: '5%',
        top: '15%',
        anim: 'float',
        delay: 0,
        duration: 3,
        size: 28
      }, {
        emoji: '💌',
        left: '91%',
        top: '20%',
        anim: 'hop',
        delay: 0.5,
        duration: 3.5,
        size: 26
      }, {
        emoji: '📬',
        left: '3%',
        top: '75%',
        anim: 'bounce',
        delay: 1.5,
        duration: 2.5,
        size: 24
      }, {
        emoji: '📮',
        left: '93%',
        top: '72%',
        anim: 'wobble',
        delay: 0.3,
        duration: 3,
        size: 22
      }, {
        emoji: '📨',
        left: '50%',
        top: '8%',
        anim: 'drift',
        delay: 2,
        duration: 4,
        size: 20
      }];
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock("section", _hoisted_1, [h('img', {src: '/illustrations/mail.webp', alt: 'Мешочек выглядывает из конверта с добрым письмом', width: 384, height: 256, loading: 'lazy', class: 'bag-vignette'}), _cache[4] || (_cache[4] = _createElementVNode("div", {
          class: "absolute inset-0 pointer-events-none overflow-hidden",
          "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:4"
        }, [_createElementVNode("div", {
          class: "absolute -top-16 -right-16 w-48 h-48 bg-rose-100 rounded-full opacity-30 blur-2xl",
          "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:5"
        }), _createElementVNode("div", {
          class: "absolute -bottom-16 -left-16 w-56 h-56 bg-amber-100 rounded-full opacity-30 blur-2xl",
          "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:6"
        })], -1)), _createVNode(FloatingEmojis, {
          emojis: mailEmojis
        }), _createElementVNode("div", {
          class: "max-w-3xl mx-auto relative z-10",
          ref_key: "sectionRef",
          ref: sectionRef,
          "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:12"
        }, [_createElementVNode("div", {
          class: _normalizeClass(["text-center mb-12", visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']),
          style: {
            "transition": "all 0.8s ease-out"
          },
          "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:14"
        }, [...(_cache[0] || (_cache[0] = [_createElementVNode("div", {
          class: "inline-flex items-center justify-center w-20 h-20 bg-rose-100 rounded-full mb-5 mail-icon-ring",
          "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:15"
        }, [_createElementVNode("i", {
          class: "fas fa-envelope-open-text text-3xl text-rose-500 animated-mail-icon",
          "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:16"
        })], -1), _createElementVNode("h2", {
          class: "text-3xl md:text-4xl font-bold text-stone-800 mb-3",
          "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:18"
        }, " ✉️ Почта Мешочка ", -1), _createElementVNode("p", {
          class: "text-stone-500 text-lg max-w-xl mx-auto",
          "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:21"
        }, " Наш талисман написал тебе письмо! Открой — там тепло и уютно 😊 ", -1)]))], 2), _createElementVNode("div", {
          class: _normalizeClass(["relative flex flex-col items-center", visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']),
          style: {
            "transition": "all 0.8s ease-out 0.2s"
          },
          "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:27"
        }, [_createElementVNode("div", _hoisted_2, [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(3, n => {
          return _createElementVNode("div", {
            key: n,
            class: _normalizeClass(["envelope absolute inset-0 rounded-2xl border-2 transition-all duration-500 cursor-pointer", [`envelope-${n}`, {
              'envelope-opened': openedIndex.value >= n
            }]]),
            style: _normalizeStyle(envelopeStyle(n)),
            onClick: $event => openLetter(n),
            "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:34"
          }, [_createElementVNode("div", _hoisted_4, [_createElementVNode("div", {
            class: _normalizeClass(["envelope-flap", {
              'flap-open': openedIndex.value >= n
            }]),
            "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:43"
          }, [...(_cache[1] || (_cache[1] = [_createElementVNode("div", {
            class: "flap-triangle",
            "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:44"
          }, null, -1)]))], 2), _createElementVNode("div", {
            class: _normalizeClass(["envelope-body", {
              'body-revealed': openedIndex.value >= n
            }]),
            "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:46"
          }, [_createElementVNode("div", _hoisted_5, _toDisplayString(['🎒', '✨', '😊'][n - 1]), 1), _cache[2] || (_cache[2] = _createElementVNode("div", {
            class: "address",
            "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:48"
          }, [_createElementVNode("span", {
            class: "text-xs text-stone-400",
            "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:49"
          }, "Кому:"), _createElementVNode("span", {
            class: "text-sm font-semibold text-stone-700",
            "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:50"
          }, "Дорогому Гостю")], -1))], 2)])], 14, _hoisted_3);
        }), 64))]), _createVNode(_Transition, {
          name: "letter-fade"
        }, {
          default: _withCtx(() => [currentLetter.value ? (_openBlock(), _createElementBlock("div", _hoisted_6, [_createElementVNode("div", _hoisted_7, [_createElementVNode("span", _hoisted_8, _toDisplayString(currentLetter.value.emoji), 1), _createElementVNode("div", _hoisted_9, [_createElementVNode("h3", _hoisted_10, _toDisplayString(currentLetter.value.title), 1), _createElementVNode("p", _hoisted_11, _toDisplayString(currentLetter.value.who), 1)])]), _createElementVNode("p", _hoisted_12, " \"" + _toDisplayString(currentLetter.value.text) + "\" ", 1), _createElementVNode("div", {
            class: "mt-4 pt-3 border-t border-dashed border-amber-100 flex items-center justify-between",
            "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:70"
          }, [_cache[3] || (_cache[3] = _createElementVNode("span", {
            class: "text-amber-500 text-sm font-medium",
            "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:71"
          }, "❤️ С теплом, Мешочек", -1)), _createElementVNode("button", {
            onClick: resetLetters,
            class: "text-stone-400 hover:text-amber-500 text-sm transition-colors",
            "data-srcloc": "/pud-smeha-ha/components/MailSection.vue:72"
          }, " 🔄 Ещё письмо ")])])) : _createCommentVNode("", true)]),
          _: 1
        }), !currentLetter.value && visible.value ? (_openBlock(), _createElementBlock("p", _hoisted_13, " 👆 Нажми на конверт, чтобы прочитать письмо ")) : _createCommentVNode("", true)], 2)], 512)]);
      };
    }
  });
  ;
  (function () {
    const style = document.createElement('style');
    style.innerHTML = "\n.mail-section[data-v-0078232d] {\n  background: linear-gradient(180deg, #FDF2F8 0%, #FFFBEB 50%, #F5F3FF 100%);\n}\n\n/* Animated header icon */\n.mail-icon-ring[data-v-0078232d] {\n  animation: mail-pulse-0078232d 2.5s ease-in-out infinite;\n}\n.animated-mail-icon[data-v-0078232d] {\n  animation: mail-flutter-0078232d 1.8s ease-in-out infinite;\n}\n@keyframes mail-pulse-0078232d {\n0%, 100% { box-shadow: 0 0 0 0 rgba(244, 114, 182, 0.3);\n}\n50% { box-shadow: 0 0 24px 12px rgba(244, 114, 182, 0.12);\n}\n}\n@keyframes mail-flutter-0078232d {\n0%, 100% { transform: translateY(0) rotate(0deg);\n}\n25% { transform: translateY(-4px) rotate(-3deg);\n}\n50% { transform: translateY(0) rotate(0deg);\n}\n75% { transform: translateY(-4px) rotate(3deg);\n}\n}\n\n/* Envelopes */\n.envelope[data-v-0078232d] {\n  cursor: pointer;\n  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.envelope-1[data-v-0078232d] {\n  transform: rotate(-2deg) translateY(8px);\n  z-index: 3;\n}\n.envelope-2[data-v-0078232d] {\n  transform: rotate(1deg) translateY(4px);\n  z-index: 2;\n}\n.envelope-3[data-v-0078232d] {\n  transform: rotate(-0.5deg);\n  z-index: 1;\n}\n.envelope[data-v-0078232d]:hover:not(.envelope-opened) {\n  transform: scale(1.03);\n}\n.envelope-opened[data-v-0078232d] {\n  transform: rotate(0deg) translateY(-10px) scale(1.02);\n  opacity: 0.6;\n  pointer-events: none;\n}\n.envelope-front[data-v-0078232d] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  border-radius: 14px;\n}\n.envelope-flap[data-v-0078232d] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  transition: all 0.5s ease;\n  z-index: 2;\n}\n.flap-triangle[data-v-0078232d] {\n  width: 100%;\n  height: 100%;\n  background: inherit;\n  clip-path: polygon(0 0, 50% 100%, 100% 0);\n  opacity: 0.9;\n}\n.flap-open[data-v-0078232d] {\n  transform: translateY(-100%);\n}\n.envelope-body[data-v-0078232d] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.5s ease;\n  z-index: 1;\n}\n.body-revealed[data-v-0078232d] {\n  transform: scale(0.9);\n  opacity: 0.5;\n}\n.stamp[data-v-0078232d] {\n  font-size: 2rem;\n  transform: rotate(15deg);\n}\n.address[data-v-0078232d] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n\n/* Letter content */\n.letter-content[data-v-0078232d] {\n  animation: letter-appear-0078232d 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes letter-appear-0078232d {\nfrom { opacity: 0; transform: translateY(20px) scale(0.95);\n}\nto { opacity: 1; transform: translateY(0) scale(1);\n}\n}\n.letter-fade-enter-active[data-v-0078232d] {\n  animation: letter-appear-0078232d 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.letter-fade-leave-active[data-v-0078232d] {\n  animation: letter-appear-0078232d 0.3s ease-in reverse;\n}\n";
    document.head.appendChild(style);
  })();
  (__sfc__.__vccOpts || __sfc__).__scopeId = "data-v-0078232d";
  const __default_1 = __sfc__;
  __exports.default = __default_1;
  return __exports;
})();
export default __exports.default;
