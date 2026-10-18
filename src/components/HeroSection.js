import { defineComponent as _defineComponent } from 'vue';
import { createElementVNode as _createElementVNode } from 'vue';
import { createVNode as _createVNode } from 'vue';
import { createStaticVNode as _createStaticVNode } from 'vue';
import { openBlock as _openBlock } from 'vue';
import { createElementBlock as _createElementBlock } from 'vue';
import AnimatedBagHero from './AnimatedBagHero.js';
import FloatingEmojis from './FloatingEmojis.js';








const __exports = (() => {
  const __exports = {};
  const _hoisted_1 = {
    class: "hero-section min-h-screen flex items-center justify-center relative overflow-hidden px-4",
    "data-srcloc": "/pud-smeha-ha/components/HeroSection.vue:2"
  };
  const _hoisted_2 = {
    class: "text-center relative z-10 max-w-3xl mx-auto",
    "data-srcloc": "/pud-smeha-ha/components/HeroSection.vue:19"
  };
  const _hoisted_3 = {
    class: "flex justify-center mb-10",
    "data-srcloc": "/pud-smeha-ha/components/HeroSection.vue:48"
  };
  const __sfc__ = _defineComponent({
    __name: 'HeroSection',
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
      const heroEmojis = [{
        emoji: '😂',
        left: '5%',
        top: '20%',
        anim: 'float',
        delay: 0,
        duration: 3,
        size: 28
      }, {
        emoji: '🤣',
        left: '92%',
        top: '25%',
        anim: 'wobble',
        delay: 0.5,
        duration: 3.5,
        size: 32
      }, {
        emoji: '🎭',
        left: '8%',
        top: '70%',
        anim: 'bounce',
        delay: 1,
        duration: 2.5,
        size: 26
      }, {
        emoji: '🌟',
        left: '90%',
        top: '65%',
        anim: 'twinkle',
        delay: 0.3,
        duration: 2,
        size: 22
      }, {
        emoji: '✨',
        left: '50%',
        top: '10%',
        anim: 'twinkle',
        delay: 1.5,
        duration: 1.8,
        size: 20
      }, {
        emoji: '🎒',
        left: '85%',
        top: '15%',
        anim: 'hop',
        delay: 2,
        duration: 4,
        size: 24
      }];
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock("section", _hoisted_1, [_cache[2] || (_cache[2] = _createStaticVNode("<div class=\"absolute inset-0 pointer-events-none overflow-hidden\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:4\" data-v-c43c3260><div class=\"absolute top-10 left-10 text-4xl opacity-10 rotate-12\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:5\" data-v-c43c3260>😂</div><div class=\"absolute top-20 right-20 text-5xl opacity-10 -rotate-6\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:6\" data-v-c43c3260>🤣</div><div class=\"absolute bottom-20 left-20 text-3xl opacity-10 rotate-45\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:7\" data-v-c43c3260>😄</div><div class=\"absolute bottom-10 right-10 text-5xl opacity-10 -rotate-12\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:8\" data-v-c43c3260>😊</div><div class=\"absolute top-1/3 right-1/4 text-4xl opacity-10\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:9\" data-v-c43c3260>✨</div><div class=\"absolute bottom-1/3 left-1/4 text-3xl opacity-10\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:10\" data-v-c43c3260>🌟</div><div class=\"absolute -top-24 -left-24 w-64 h-64 bg-amber-200 rounded-full opacity-20 blur-3xl\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:11\" data-v-c43c3260></div><div class=\"absolute -bottom-24 -right-24 w-80 h-80 bg-rose-200 rounded-full opacity-20 blur-3xl\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:12\" data-v-c43c3260></div><div class=\"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-100 rounded-full opacity-10 blur-3xl\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:13\" data-v-c43c3260></div></div>", 1)), _createVNode(FloatingEmojis, {
          emojis: heroEmojis
        }), _createElementVNode("div", _hoisted_2, [_cache[0] || (_cache[0] = _createStaticVNode("<div class=\"inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6 border border-amber-200\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:21\" data-v-c43c3260><span data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:22\" data-v-c43c3260>🎭</span><span data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:23\" data-v-c43c3260>Сказка для взрослых</span><span data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:24\" data-v-c43c3260>🎭</span></div><h1 class=\"text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:28\" data-v-c43c3260><span class=\"bg-gradient-to-r from-amber-500 via-rose-500 to-amber-500 bg-clip-text text-transparent\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:29\" data-v-c43c3260> Почём пуд </span><br data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:32\" data-v-c43c3260><span class=\"relative\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:33\" data-v-c43c3260><span class=\"bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500 bg-clip-text text-transparent\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:34\" data-v-c43c3260> СМЕХА? </span><span class=\"absolute -top-3 -right-8 text-2xl md:text-3xl animate-pulse\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:37\" data-v-c43c3260>😂</span></span></h1><p class=\"text-lg md:text-xl text-stone-600 mb-8 max-w-xl mx-auto leading-relaxed\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:42\" data-v-c43c3260> Добро пожаловать, дорогой Гость! 👋<br data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:43\" data-v-c43c3260><span class=\"text-stone-500\" data-srcloc=\"/pud-smeha-ha/components/HeroSection.vue:44\" data-v-c43c3260>Ты попал в место, где смех — главная валюта, а улыбка — лучший пропуск</span></p>", 3)), _createElementVNode("div", _hoisted_3, [_createVNode(AnimatedBagHero, {
          videoUrl: __props.videoUrl,
          directMp4Url: __props.directMp4Url,
          videoPoster: __props.videoPoster
        }, null, 8, ["videoUrl", "directMp4Url", "videoPoster"])]), _cache[1] || (_cache[1] = _createElementVNode("div", {
          class: "animate-bounce mt-8",
          "data-srcloc": "/pud-smeha-ha/components/HeroSection.vue:53"
        }, [_createElementVNode("svg", {
          class: "w-6 h-6 mx-auto text-amber-400",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          "data-srcloc": "/pud-smeha-ha/components/HeroSection.vue:54"
        }, [_createElementVNode("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M19 14l-7 7m0 0l-7-7m7 7V3",
          "data-srcloc": "/pud-smeha-ha/components/HeroSection.vue:55"
        })])], -1))])]);
      };
    }
  });
  ;
  (function () {
    const style = document.createElement('style');
    style.innerHTML = "\n.hero-section[data-v-c43c3260] {\n  background: linear-gradient(180deg, #FFFBEB 0%, #FEF3C7 40%, #FCE7F3 70%, #FFFBEB 100%);\n}\n";
    document.head.appendChild(style);
  })();
  (__sfc__.__vccOpts || __sfc__).__scopeId = "data-v-c43c3260";
  const __default_1 = __sfc__;
  __exports.default = __default_1;
  return __exports;
})();
export default __exports.default;
