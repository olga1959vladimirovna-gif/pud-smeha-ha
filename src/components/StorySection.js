import { defineComponent as _defineComponent } from 'vue';
import { createElementVNode as _createElementVNode } from 'vue';
import { createVNode as _createVNode } from 'vue';
import { normalizeClass as _normalizeClass } from 'vue';
import { createStaticVNode as _createStaticVNode } from 'vue';
import { openBlock as _openBlock } from 'vue';
import { createElementBlock as _createElementBlock } from 'vue';
import { ref as ref } from 'vue';
import { onMounted as onMounted } from 'vue';
import FloatingEmojis from './FloatingEmojis.js';










const __exports = (() => {
  const __exports = {};
  const __sfc__ = _defineComponent({
    __name: 'StorySection',
    setup(__props) {
      const sectionRef = ref(null);
      const visible = ref(false);
      onMounted(() => {
        const observer = new IntersectionObserver(entries => {
          const entry = entries[0];
          if (entry?.isIntersecting) {
            visible.value = true;
            observer.disconnect();
          }
        }, {
          threshold: 0.2
        });
        if (sectionRef.value) observer.observe(sectionRef.value);
      });
      const storyEmojis = [{
        emoji: '📜',
        left: '5%',
        top: '15%',
        anim: 'float',
        delay: 0,
        duration: 3.5,
        size: 28
      }, {
        emoji: '🪄',
        left: '92%',
        top: '20%',
        anim: 'wobble',
        delay: 0.8,
        duration: 3,
        size: 26
      }, {
        emoji: '🌟',
        left: '3%',
        top: '75%',
        anim: 'twinkle',
        delay: 1.5,
        duration: 2,
        size: 20
      }, {
        emoji: '🎒',
        left: '90%',
        top: '70%',
        anim: 'hop',
        delay: 0.3,
        duration: 4,
        size: 24
      }, {
        emoji: '✨',
        left: '50%',
        top: '8%',
        anim: 'twinkle',
        delay: 2,
        duration: 1.5,
        size: 18
      }];
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock("section", {
          class: "story-section py-20 px-4 relative overflow-hidden",
          ref_key: "sectionRef",
          ref: sectionRef,
          "data-srcloc": "/pud-smeha-ha/components/StorySection.vue:2"
        }, [_cache[1] || (_cache[1] = _createElementVNode("div", {
          class: "absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-300 via-rose-300 to-amber-300 opacity-50",
          "data-srcloc": "/pud-smeha-ha/components/StorySection.vue:4"
        }, null, -1)), _createVNode(FloatingEmojis, {
          emojis: storyEmojis
        }), _createElementVNode("div", {
          class: _normalizeClass(["max-w-3xl mx-auto relative", visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']),
          style: {
            "transition": "all 0.8s ease-out"
          },
          "data-srcloc": "/pud-smeha-ha/components/StorySection.vue:9"
        }, [...(_cache[0] || (_cache[0] = [_createStaticVNode("<div class=\"text-center mb-4\" data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:11\" data-v-bf45df3d><span class=\"inline-block text-4xl\" data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:12\" data-v-bf45df3d>📜</span></div><h2 class=\"text-3xl md:text-4xl font-bold text-center mb-8 text-stone-800\" data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:15\" data-v-bf45df3d> Сказ о том, как Мешочек смех по миру разносил </h2><div class=\"bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-amber-100 relative\" data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:20\" data-v-bf45df3d><div class=\"absolute -top-4 -left-4 text-6xl text-amber-200 font-serif leading-none\" data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:22\" data-v-bf45df3d>&quot;</div><div class=\"absolute -bottom-10 -right-4 text-6xl text-amber-200 font-serif leading-none transform rotate-180\" data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:23\" data-v-bf45df3d>&quot;</div><div class=\"story-text space-y-4 text-lg md:text-xl leading-relaxed text-stone-700 relative z-10\" data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:25\" data-v-bf45df3d><p data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:26\" data-v-bf45df3d> Говорят, в стародавние времена, когда люди ещё умели смеяться просто так, <span class=\"text-amber-600 font-semibold\" data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:28\" data-v-bf45df3d>без причины</span>, жил на свете Мешочек. </p><p data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:30\" data-v-bf45df3d> Не простой — <span class=\"text-rose-600 font-semibold\" data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:31\" data-v-bf45df3d>Пудовой</span>. Вмещал ровно <span class=\"font-bold text-amber-600\" data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:32\" data-v-bf45df3d>пуд смеха</span> — ни граммом больше, ни граммом меньше. </p><p data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:34\" data-v-bf45df3d> И ходил он по миру, и где остановится — там начиналось веселье. Люди забывали о печалях, мирились те, кто в ссоре, и даже булки в пекарне начинали подпрыгивать от смеха. </p><p data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:39\" data-v-bf45df3d> Но однажды... люди стали слишком серьёзными. «Нам некогда смеяться, — говорили они. — У нас дела, ипотека, новости...» </p><p class=\"text-stone-500 italic\" data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:43\" data-v-bf45df3d> И Мешочек загрустил. Потому что пуд смеха — он для того и создан, чтобы им делиться. А иначе какой в нём прок? </p><div class=\"pt-4 text-center\" data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:47\" data-v-bf45df3d><span class=\"inline-block text-3xl animate-pulse\" data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:48\" data-v-bf45df3d>🎒</span><p class=\"mt-2 text-stone-600 font-medium\" data-srcloc=\"/pud-smeha-ha/components/StorySection.vue:49\" data-v-bf45df3d> Так может, наполним его заново? 😊 </p></div></div></div>", 3)]))], 2)], 512);
      };
    }
  });
  ;
  (function () {
    const style = document.createElement('style');
    style.innerHTML = "\n.story-section[data-v-bf45df3d] {\n  background: linear-gradient(180deg, #FFFBEB 0%, #FEF3C7 50%, #FFFBEB 100%);\n}\n";
    document.head.appendChild(style);
  })();
  (__sfc__.__vccOpts || __sfc__).__scopeId = "data-v-bf45df3d";
  const __default_1 = __sfc__;
  __exports.default = __default_1;
  return __exports;
})();
export default __exports.default;
