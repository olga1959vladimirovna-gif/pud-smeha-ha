import { defineComponent as _defineComponent } from 'vue';
import { createVNode as _createVNode } from 'vue';
import { createElementVNode as _createElementVNode } from 'vue';
import { normalizeClass as _normalizeClass } from 'vue';
import { createTextVNode as _createTextVNode } from 'vue';
import { toDisplayString as _toDisplayString } from 'vue';
import { openBlock as _openBlock } from 'vue';
import { createElementBlock as _createElementBlock } from 'vue';
import { ref as ref } from 'vue';
import { onMounted as onMounted } from 'vue';
import FloatingEmojis from './FloatingEmojis.js';











const __exports = (() => {
  const __exports = {};
  const _hoisted_1 = {
    class: "max-w-2xl mx-auto text-center",
    "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:5"
  };
  const shareText = '🤣 Нашёл пуд смеха! Забирай свою порцию:';
  const __sfc__ = _defineComponent({
    __name: 'ShareSection',
    setup(__props) {
      const shareEmojis = [{
        emoji: '🎁',
        left: '5%',
        top: '20%',
        anim: 'bounce',
        delay: 0,
        duration: 2.5,
        size: 26
      }, {
        emoji: '📤',
        left: '92%',
        top: '25%',
        anim: 'float',
        delay: 0.6,
        duration: 3,
        size: 24
      }, {
        emoji: '📢',
        left: '3%',
        top: '72%',
        anim: 'wobble',
        delay: 1.2,
        duration: 3.2,
        size: 22
      }, {
        emoji: '🎊',
        left: '93%',
        top: '70%',
        anim: 'twinkle',
        delay: 0.3,
        duration: 2,
        size: 24
      }, {
        emoji: '💌',
        left: '50%',
        top: '8%',
        anim: 'hop',
        delay: 2,
        duration: 3.5,
        size: 20
      }];
      const visible = ref(false);
      const copied = ref(false);
      const sectionRef = ref(null);
      const currentUrl = ref('');
      onMounted(() => {
        currentUrl.value = window.location.href;
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
      function shareTelegram() {
        window.open(`https://t.me/share/url?url=${encodeURIComponent(currentUrl.value)}&text=${encodeURIComponent(shareText)}`, '_blank');
      }
      function shareWhatsApp() {
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + currentUrl.value)}`, '_blank');
      }
      function shareVK() {
        window.open(`https://vk.com/share.php?url=${encodeURIComponent(currentUrl.value)}&title=${encodeURIComponent('Почём пуд СМЕХА?')}`, '_blank');
      }
      async function copyLink() {
        try {
          await navigator.clipboard.writeText(currentUrl.value);
          copied.value = true;
          setTimeout(() => {
            copied.value = false;
          }, 3000);
        } catch {
          // Fallback
          const textArea = document.createElement('textarea');
          textArea.value = currentUrl.value;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          copied.value = true;
          setTimeout(() => {
            copied.value = false;
          }, 3000);
        }
      }
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock("section", {
          class: "share-section py-20 px-4 relative overflow-hidden",
          ref_key: "sectionRef",
          ref: sectionRef,
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:2"
        }, [_createVNode(FloatingEmojis, {
          emojis: shareEmojis
        }), _createElementVNode("div", _hoisted_1, [_createElementVNode("div", {
          class: _normalizeClass(["mb-10", visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']),
          style: {
            "transition": "all 0.8s ease-out"
          },
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:7"
        }, [...(_cache[0] || (_cache[0] = [_createElementVNode("span", {
          class: "inline-block text-4xl mb-2",
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:8"
        }, "🎁", -1), _createElementVNode("h2", {
          class: "text-3xl md:text-4xl font-bold text-stone-800 mb-3",
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:9"
        }, " Поделись смехом — и он приумножится! ", -1), _createElementVNode("p", {
          class: "text-stone-500 text-lg max-w-md mx-auto",
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:12"
        }, " Отправь эту страницу тому, кто сейчас особенно нуждается в улыбке. Это бесплатно и работает лучше любого лекарства! ", -1)]))], 2), _createElementVNode("div", {
          class: _normalizeClass(["flex flex-wrap justify-center gap-4 mb-8", visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']),
          style: {
            "transition": "all 0.8s ease-out 0.3s"
          },
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:18"
        }, [_createElementVNode("button", {
          onClick: shareTelegram,
          class: "share-btn bg-sky-100 hover:bg-sky-200 text-sky-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 border border-sky-200 flex items-center gap-2",
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:24"
        }, [...(_cache[1] || (_cache[1] = [_createElementVNode("i", {
          class: "fab fa-telegram-plane text-lg",
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:28"
        }, null, -1), _createTextVNode(" Telegram ", -1)]))]), _createElementVNode("button", {
          onClick: shareWhatsApp,
          class: "share-btn bg-green-100 hover:bg-green-200 text-green-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 border border-green-200 flex items-center gap-2",
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:33"
        }, [...(_cache[2] || (_cache[2] = [_createElementVNode("i", {
          class: "fab fa-whatsapp text-lg",
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:37"
        }, null, -1), _createTextVNode(" WhatsApp ", -1)]))]), _createElementVNode("button", {
          onClick: shareVK,
          class: "share-btn bg-blue-100 hover:bg-blue-200 text-blue-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 border border-blue-200 flex items-center gap-2",
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:42"
        }, [...(_cache[3] || (_cache[3] = [_createElementVNode("i", {
          class: "fab fa-vk text-lg",
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:46"
        }, null, -1), _createTextVNode(" ВКонтакте ", -1)]))]), _createElementVNode("button", {
          onClick: copyLink,
          class: "share-btn bg-amber-100 hover:bg-amber-200 text-amber-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 border border-amber-200 flex items-center gap-2",
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:51"
        }, [_cache[4] || (_cache[4] = _createElementVNode("i", {
          class: "fas fa-link text-lg",
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:55"
        }, null, -1)), _createTextVNode(" " + _toDisplayString(copied.value ? 'Скопировано! ✓' : 'Копировать ссылку'), 1)])], 2), _createElementVNode("div", {
          class: _normalizeClass(["inline-flex items-center gap-3 bg-white/80 rounded-2xl px-6 py-4 shadow-sm border border-amber-100", visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']),
          style: {
            "transition": "all 0.8s ease-out 0.5s"
          },
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:61"
        }, [...(_cache[5] || (_cache[5] = [_createElementVNode("span", {
          class: "text-2xl",
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:66"
        }, "🎒", -1), _createElementVNode("p", {
          class: "text-stone-600 text-sm",
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:67"
        }, [_createElementVNode("span", {
          class: "font-semibold text-amber-700",
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:68"
        }, "Мешочек одобряет!"), _createElementVNode("br", {
          "data-srcloc": "/pud-smeha-ha/components/ShareSection.vue:69"
        }), _createTextVNode("Каждый, кому ты отправишь эту страницу, получит свою порцию смеха. Бесплатно. Честно. Без спама! ")], -1)]))], 2)])], 512);
      };
    }
  });
  ;
  (function () {
    const style = document.createElement('style');
    style.innerHTML = "\n.share-section[data-v-cb2702b8] {\n  background: linear-gradient(180deg, #FEF3C7 0%, #FFFBEB 50%, #FDF2F8 100%);\n}\n.share-btn[data-v-cb2702b8] {\n  box-shadow: 0 2px 8px rgba(0,0,0,0.05);\n}\n.share-btn[data-v-cb2702b8]:hover {\n  box-shadow: 0 4px 16px rgba(0,0,0,0.1);\n}\n";
    document.head.appendChild(style);
  })();
  (__sfc__.__vccOpts || __sfc__).__scopeId = "data-v-cb2702b8";
  const __default_1 = __sfc__;
  __exports.default = __default_1;
  return __exports;
})();
export default __exports.default;
