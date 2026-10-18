import { defineComponent as _defineComponent } from 'vue';
import { normalizeClass as _normalizeClass } from 'vue';
import { createElementVNode as _createElementVNode } from 'vue';
import { renderList as _renderList } from 'vue';
import { Fragment as _Fragment } from 'vue';
import { openBlock as _openBlock } from 'vue';
import { createElementBlock as _createElementBlock } from 'vue';
import { toDisplayString as _toDisplayString } from 'vue';
import { ref as ref } from 'vue';
import { onMounted as onMounted } from 'vue';
import { onBeforeUnmount as onBeforeUnmount } from 'vue';











const __exports = (() => {
  const __exports = {};
  const _hoisted_1 = {
    class: "bag-body",
    "data-srcloc": "/pud-smeha-ha/components/AnimatedBagHero.vue:17"
  };
  const _hoisted_2 = ["poster"];
  const _hoisted_3 = ["src"];
  const _hoisted_4 = ["src"];
  const __sfc__ = _defineComponent({
    __name: 'AnimatedBagHero',
    props: {
      videoUrl: {
        type: String,
        required: true
      },
      directMp4Url: {
        type: String,
        required: true
      },
      videoPoster: {
        type: String,
        required: true
      }
    },
    setup(__props) {
      const props = __props;
      const excited = ref(false);
      const videoEl = ref(null);
      let hlsInstance = null;
      function initHls() {
        const el = videoEl.value;
        if (!el || !props.videoUrl) return;
        // Если браузер уже смог проиграть mp4 через <source> — не нужно hls.js
        // Пробуем hls.js для браузеров без нативной поддержки HLS
        if (!el.canPlayType('application/vnd.apple.mpegurl')) {
          const Hls = window.Hls;
          if (Hls?.isSupported && Hls.isSupported()) {
            hlsInstance = new Hls();
            hlsInstance.loadSource(props.videoUrl);
            hlsInstance.attachMedia(el);
            // Останавливаем нативный источник, используем только hls.js
            el.querySelector('source')?.remove();
          }
        }
      }
      onMounted(() => {
        // Пробуем hls.js сразу (если mp4 не загрузился через <source>)
        setTimeout(initHls, 300);
        // Повторная попытка если скрипт подгрузился позже
        setTimeout(() => {
          if (!hlsInstance) initHls();
        }, 1500);
      });
      onBeforeUnmount(() => {
        hlsInstance?.destroy();
      });
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock("div", {
          class: "animated-bag-wrapper",
          onMouseenter: _cache[0] || (_cache[0] = $event => excited.value = true),
          onMouseleave: _cache[1] || (_cache[1] = $event => excited.value = false),
          "data-srcloc": "/pud-smeha-ha/components/AnimatedBagHero.vue:2"
        }, [_createElementVNode("div", {
          class: _normalizeClass(["aura", {
            'aura-excited': excited.value
          }]),
          "data-srcloc": "/pud-smeha-ha/components/AnimatedBagHero.vue:4"
        }, null, 2), (_openBlock(), _createElementBlock(_Fragment, null, _renderList(8, n => {
          return _createElementVNode("div", {
            key: n,
            class: _normalizeClass(["particle", [`particle-${n}`, {
              'particle-active': excited.value
            }]]),
            "data-srcloc": "/pud-smeha-ha/components/AnimatedBagHero.vue:7"
          }, "✨", 2);
        }), 64)), _createElementVNode("div", {
          class: _normalizeClass(["bag-character", {
            'bag-excited': excited.value
          }]),
          "data-srcloc": "/pud-smeha-ha/components/AnimatedBagHero.vue:15"
        }, [_createElementVNode("div", _hoisted_1, [_cache[2] || (_cache[2] = _createElementVNode("div", {
          class: "drawstring-left",
          "data-srcloc": "/pud-smeha-ha/components/AnimatedBagHero.vue:19"
        }, null, -1)), _cache[3] || (_cache[3] = _createElementVNode("div", {
          class: "drawstring-right",
          "data-srcloc": "/pud-smeha-ha/components/AnimatedBagHero.vue:20"
        }, null, -1)), _cache[4] || (_cache[4] = _createElementVNode("div", {
          class: "drawstring-knot",
          "data-srcloc": "/pud-smeha-ha/components/AnimatedBagHero.vue:21"
        }, null, -1)), _cache[5] || (_cache[5] = _createElementVNode("div", {
          class: "bag-rim",
          "data-srcloc": "/pud-smeha-ha/components/AnimatedBagHero.vue:24"
        }, null, -1)), _createElementVNode("video", {
          class: "bag-video",
          poster: __props.videoPoster,
          autoplay: "",
          muted: "",
          loop: "",
          playsinline: "",
          ref_key: "videoEl",
          ref: videoEl,
          "data-srcloc": "/pud-smeha-ha/components/AnimatedBagHero.vue:27"
        }, [_createElementVNode("source", {
          src: __props.directMp4Url,
          type: "video/mp4",
          "data-srcloc": "/pud-smeha-ha/components/AnimatedBagHero.vue:36"
        }, null, 8, _hoisted_3), _createElementVNode("source", {
          src: __props.videoUrl,
          type: "application/x-mpegURL",
          "data-srcloc": "/pud-smeha-ha/components/AnimatedBagHero.vue:37"
        }, null, 8, _hoisted_4)], 8, _hoisted_2), _cache[6] || (_cache[6] = _createElementVNode("div", {
          class: "bag-shadow-overlay",
          "data-srcloc": "/pud-smeha-ha/components/AnimatedBagHero.vue:41"
        }, null, -1))]), _createElementVNode("div", {
          class: _normalizeClass(["bag-label", {
            'label-excited': excited.value
          }]),
          "data-srcloc": "/pud-smeha-ha/components/AnimatedBagHero.vue:45"
        }, _toDisplayString(excited.value ? 'Хи-хи! 🎉' : '🎒 Пуд Смеха'), 3)], 2)], 32);
      };
    }
  });
  ;
  (function () {
    const style = document.createElement('style');
    style.innerHTML = "\n.animated-bag-wrapper[data-v-aefe9c88] {\n  position: relative;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  padding: 12px;\n}\n\n/* ====== AURA ====== */\n.aura[data-v-aefe9c88] {\n  position: absolute;\n  width: 160px;\n  height: 160px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(251,191,36,0.25) 0%, rgba(251,191,36,0.05) 60%, transparent 80%);\n  animation: aura-pulse-aefe9c88 3s ease-in-out infinite;\n  transition: all 0.5s ease;\n}\n.aura-excited[data-v-aefe9c88] {\n  background: radial-gradient(circle, rgba(251,191,36,0.4) 0%, rgba(249,115,22,0.15) 50%, transparent 70%);\n  animation: aura-pulse-fast-aefe9c88 1.2s ease-in-out infinite;\n  width: 190px;\n  height: 190px;\n}\n@keyframes aura-pulse-aefe9c88 {\n0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7;\n}\n50% { transform: translate(-50%, -50%) scale(1.15); opacity: 1;\n}\n}\n@keyframes aura-pulse-fast-aefe9c88 {\n0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6;\n}\n50% { transform: translate(-50%, -50%) scale(1.25); opacity: 1;\n}\n}\n\n/* ====== PARTICLES ====== */\n.particle[data-v-aefe9c88] {\n  position: absolute;\n  font-size: 14px;\n  opacity: 0;\n  animation: none;\n  pointer-events: none;\n  z-index: 2;\n}\n.particle-1[data-v-aefe9c88] { top: -5%; left: 5%;\n}\n.particle-2[data-v-aefe9c88] { top: -8%; left: 30%;\n}\n.particle-3[data-v-aefe9c88] { top: -3%; left: 65%;\n}\n.particle-4[data-v-aefe9c88] { top: -10%; right: 5%;\n}\n.particle-5[data-v-aefe9c88] { bottom: 10%; left: -8%;\n}\n.particle-6[data-v-aefe9c88] { bottom: 25%; right: -10%;\n}\n.particle-7[data-v-aefe9c88] { top: 40%; left: -12%;\n}\n.particle-8[data-v-aefe9c88] { top: 15%; right: -8%;\n}\n.particle-active[data-v-aefe9c88] {\n  animation: particle-float-aefe9c88 1.8s ease-out infinite;\n}\n.particle-active.particle-1[data-v-aefe9c88] { animation-delay: 0s;\n}\n.particle-active.particle-2[data-v-aefe9c88] { animation-delay: 0.3s;\n}\n.particle-active.particle-3[data-v-aefe9c88] { animation-delay: 0.7s;\n}\n.particle-active.particle-4[data-v-aefe9c88] { animation-delay: 0.5s;\n}\n.particle-active.particle-5[data-v-aefe9c88] { animation-delay: 1.0s;\n}\n.particle-active.particle-6[data-v-aefe9c88] { animation-delay: 0.2s;\n}\n.particle-active.particle-7[data-v-aefe9c88] { animation-delay: 1.3s;\n}\n.particle-active.particle-8[data-v-aefe9c88] { animation-delay: 0.8s;\n}\n@keyframes particle-float-aefe9c88 {\n0% { opacity: 0; transform: translateY(0) scale(0.5) rotate(0deg);\n}\n20% { opacity: 1; transform: translateY(-10px) scale(1) rotate(10deg);\n}\n80% { opacity: 0.8; transform: translateY(-25px) scale(1.1) rotate(-5deg);\n}\n100% { opacity: 0; transform: translateY(-35px) scale(0.5) rotate(-15deg);\n}\n}\n\n/* ====== BAG CHARACTER ====== */\n.bag-character[data-v-aefe9c88] {\n  position: relative;\n  z-index: 3;\n  animation: bag-float-aefe9c88 3.5s ease-in-out infinite;\n  transition: transform 0.3s ease;\n}\n.bag-excited[data-v-aefe9c88] {\n  animation: bag-dance-aefe9c88 0.7s ease-in-out infinite;\n}\n@keyframes bag-float-aefe9c88 {\n0%, 100% { transform: translateY(0);\n}\n30% { transform: translateY(-8px);\n}\n60% { transform: translateY(-4px);\n}\n}\n@keyframes bag-dance-aefe9c88 {\n0% { transform: translateY(0) rotate(0deg) scale(1);\n}\n15% { transform: translateY(-6px) rotate(-4deg) scale(1.03);\n}\n30% { transform: translateY(-10px) rotate(4deg) scale(1.06);\n}\n45% { transform: translateY(-4px) rotate(-2deg) scale(1.03);\n}\n60% { transform: translateY(-8px) rotate(2deg) scale(1.05);\n}\n80% { transform: translateY(-2px) rotate(-1deg) scale(1.02);\n}\n100% { transform: translateY(0) rotate(0deg) scale(1);\n}\n}\n\n/* ====== BAG BODY ====== */\n.bag-body[data-v-aefe9c88] {\n  position: relative;\n  width: 110px;\n  height: 120px;\n  border-radius: 14px 14px 35% 35%;\n  border: 3px solid #B45309;\n  box-shadow:\n    0 6px 20px rgba(245, 158, 11, 0.35),\n    inset 0 2px 4px rgba(255,255,255,0.3);\n  overflow: hidden;\n  transition: all 0.4s ease;\n  background: #D97706;\n}\n.bag-excited .bag-body[data-v-aefe9c88] {\n  border-color: #9A3412;\n  box-shadow:\n    0 8px 30px rgba(249, 115, 22, 0.45),\n    inset 0 2px 4px rgba(255,255,255,0.3);\n}\n\n/* ====== BAG VIDEO ====== */\n.bag-video[data-v-aefe9c88] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 12px 12px 35% 35%;\n}\n\n/* Shadow overlay at bottom to blend video into bag roundness */\n.bag-shadow-overlay[data-v-aefe9c88] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 25%;\n  background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.06));\n  border-radius: 0 0 35% 35%;\n  pointer-events: none;\n}\n\n/* ====== DRAWSTRINGS ====== */\n.drawstring-left[data-v-aefe9c88],\n.drawstring-right[data-v-aefe9c88] {\n  position: absolute;\n  top: -18px;\n  width: 3px;\n  height: 24px;\n  background: linear-gradient(180deg, #A16207, #854D0E);\n  border-radius: 2px;\n  z-index: 4;\n}\n.drawstring-left[data-v-aefe9c88] {\n  left: 30px;\n  transform: rotate(-8deg);\n}\n.drawstring-right[data-v-aefe9c88] {\n  right: 30px;\n  transform: rotate(8deg);\n}\n.drawstring-knot[data-v-aefe9c88] {\n  position: absolute;\n  top: -24px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 10px;\n  height: 10px;\n  background: #854D0E;\n  border-radius: 50%;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.2);\n  z-index: 4;\n}\n.bag-excited .drawstring-left[data-v-aefe9c88] {\n  animation: string-wiggle-aefe9c88 0.5s ease-in-out infinite alternate;\n}\n.bag-excited .drawstring-right[data-v-aefe9c88] {\n  animation: string-wiggle-aefe9c88 0.5s ease-in-out infinite alternate-reverse;\n}\n@keyframes string-wiggle-aefe9c88 {\n0% { transform: rotate(-8deg);\n}\n100% { transform: rotate(8deg);\n}\n}\n.bag-rim[data-v-aefe9c88] {\n  position: absolute;\n  top: -5px;\n  left: -3px;\n  right: -3px;\n  height: 12px;\n  background: linear-gradient(180deg, #B45309, #92400E);\n  border-radius: 6px 6px 0 0;\n  border: 2px solid #78350F;\n  z-index: 4;\n}\n\n/* ====== LABEL ====== */\n.bag-label[data-v-aefe9c88] {\n  margin-top: 10px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #92400E;\n  text-align: center;\n  letter-spacing: 0.04em;\n  transition: all 0.3s ease;\n}\n.label-excited[data-v-aefe9c88] {\n  color: #E11D48;\n  transform: scale(1.1);\n  text-shadow: 0 2px 8px rgba(225, 29, 72, 0.2);\n}\n";
    document.head.appendChild(style);
  })();
  (__sfc__.__vccOpts || __sfc__).__scopeId = "data-v-aefe9c88";
  const __default_1 = __sfc__;
  __exports.default = __default_1;
  return __exports;
})();
export default __exports.default;
