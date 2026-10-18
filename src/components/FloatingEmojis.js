import { defineComponent as _defineComponent } from 'vue';
import { renderList as _renderList } from 'vue';
import { Fragment as _Fragment } from 'vue';
import { openBlock as _openBlock } from 'vue';
import { createElementBlock as _createElementBlock } from 'vue';
import { toDisplayString as _toDisplayString } from 'vue';
import { normalizeClass as _normalizeClass } from 'vue';
import { normalizeStyle as _normalizeStyle } from 'vue';








const __exports = (() => {
  const __exports = {};
  const _hoisted_1 = {
    class: "floating-emojis",
    "aria-hidden": "true",
    "data-srcloc": "/pud-smeha-ha/components/FloatingEmojis.vue:2"
  };
  const __sfc__ = _defineComponent({
    __name: 'FloatingEmojis',
    props: {
      emojis: {
        type: Array,
        required: true
      },
      sizeMultiplier: {
        type: Number,
        required: false
      }
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock("div", _hoisted_1, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(__props.emojis, (e, idx) => {
          return _openBlock(), _createElementBlock("div", {
            key: idx,
            class: _normalizeClass(["fe-item", `anim--${e.anim}`]),
            style: _normalizeStyle({
              left: e.left,
              top: e.top,
              animationDelay: e.delay + 's',
              animationDuration: e.duration + 's',
              fontSize: Math.round((e.size ?? 26) * (props.sizeMultiplier ?? 1.5)) + 'px',
              opacity: e.opacity ?? 0.85
            }),
            "data-srcloc": "/pud-smeha-ha/components/FloatingEmojis.vue:3"
          }, _toDisplayString(e.emoji), 7);
        }), 128))]);
      };
    }
  });
  ;
  (function () {
    const style = document.createElement('style');
    style.innerHTML = "\n.floating-emojis[data-v-82c93c79] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  overflow: hidden;\n  z-index: 1;\n}\n.fe-item[data-v-82c93c79] {\n  position: absolute;\n  line-height: 1;\n  user-select: none;\n  will-change: transform;\n  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.12));\n  text-shadow: 0 0 8px rgba(255,255,255,0.6);\n  transition: opacity 0.3s ease;\n}\n\n/* ── Animation definitions ── */\n\n/* Gentle float up/down */\n@keyframes anim-float-82c93c79 {\n0% { transform: translateY(0) rotate(0deg);\n}\n100% { transform: translateY(-10px) rotate(4deg);\n}\n}\n.anim--float[data-v-82c93c79] { animation-name: anim-float-82c93c79;\n}\n\n/* Slow wobble left-right with rotation */\n@keyframes anim-wobble-82c93c79 {\n0% { transform: translateX(0) rotate(-6deg);\n}\n100% { transform: translateX(8px) rotate(6deg);\n}\n}\n.anim--wobble[data-v-82c93c79] { animation-name: anim-wobble-82c93c79;\n}\n\n/* Soft bounce */\n@keyframes anim-bounce-82c93c79 {\n0%, 100% { transform: translateY(0) scale(1);\n}\n50% { transform: translateY(-8px) scale(1.08);\n}\n}\n.anim--bounce[data-v-82c93c79] { animation-name: anim-bounce-82c93c79;\n}\n\n/* Slow spin */\n@keyframes anim-spin-82c93c79 {\n0% { transform: rotate(0deg);\n}\n100% { transform: rotate(360deg);\n}\n}\n.anim--spin[data-v-82c93c79] { animation-name: anim-spin-82c93c79;\n}\n\n/* Diagonal drift */\n@keyframes anim-drift-82c93c79 {\n0% { transform: translate(0, 0) rotate(0deg);\n}\n100% { transform: translate(-10px, -8px) rotate(-6deg);\n}\n}\n.anim--drift[data-v-82c93c79] { animation-name: anim-drift-82c93c79;\n}\n\n/* Pulse scale */\n@keyframes anim-pulse-82c93c79 {\n0% { transform: scale(1); opacity: 0.5;\n}\n100% { transform: scale(1.2); opacity: 1;\n}\n}\n.anim--pulse[data-v-82c93c79] { animation-name: anim-pulse-82c93c79;\n}\n\n/* Sway like a pendulum */\n@keyframes anim-sway-82c93c79 {\n0% { transform: rotate(-8deg);\n}\n50% { transform: rotate(8deg);\n}\n100% { transform: rotate(-8deg);\n}\n}\n.anim--sway[data-v-82c93c79] { animation-name: anim-sway-82c93c79;\n}\n\n/* Twinkle fade in/out */\n@keyframes anim-twinkle-82c93c79 {\n0% { opacity: 0.2; transform: scale(0.8);\n}\n50% { opacity: 0.8; transform: scale(1.1);\n}\n100% { opacity: 0.2; transform: scale(0.8);\n}\n}\n.anim--twinkle[data-v-82c93c79] { animation-name: anim-twinkle-82c93c79;\n}\n\n/* Happy hop */\n@keyframes anim-hop-82c93c79 {\n0% { transform: translateY(0) scale(1);\n}\n20% { transform: translateY(-12px) scale(1.1) rotate(-8deg);\n}\n40% { transform: translateY(0) scale(1);\n}\n60% { transform: translateY(-6px) scale(1.05) rotate(5deg);\n}\n80% { transform: translateY(0) scale(1);\n}\n}\n.anim--hop[data-v-82c93c79] { animation-name: anim-hop-82c93c79;\n}\n\n/* Zig-zag */\n@keyframes anim-zigzag-82c93c79 {\n0% { transform: translate(0, 0);\n}\n25% { transform: translate(6px, -6px);\n}\n50% { transform: translate(-4px, -10px);\n}\n75% { transform: translate(5px, -4px);\n}\n100% { transform: translate(0, 0);\n}\n}\n.anim--zigzag[data-v-82c93c79] { animation-name: anim-zigzag-82c93c79;\n}\n";
    document.head.appendChild(style);
  })();
  (__sfc__.__vccOpts || __sfc__).__scopeId = "data-v-82c93c79";
  const __default_1 = __sfc__;
  __exports.default = __default_1;
  return __exports;
})();
export default __exports.default;
