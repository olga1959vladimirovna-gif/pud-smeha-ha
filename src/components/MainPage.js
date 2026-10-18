import { defineComponent as _defineComponent } from 'vue';
import { createVNode as _createVNode } from 'vue';
import { openBlock as _openBlock } from 'vue';
import { createElementBlock as _createElementBlock } from 'vue';
import HeroSection from './HeroSection.js';
import StorySection from './StorySection.js';
import StoriesSection from './StoriesSection.js';
import FunFactsSection from './FunFactsSection.js';
import MailSection from './MailSection.js';
import SymptomsSection from './SymptomsSection.js';
import RecipeSection from './RecipeSection.js';
import AbsurdLab from './AbsurdLab.js';
import UsefulTips from './UsefulTips.js';
import HarmfulTips from './HarmfulTips.js';
import ShareSection from './ShareSection.js';
import LaughterTherapy from './LaughterTherapy.js';
import FooterSection from './FooterSection.js';
import VisitorStories from '../moderation/VisitorStories.js';
import EverydaySmileSection from './EverydaySmileSection.js';

















const __exports = (() => {
  const __exports = {};
  const _hoisted_1 = {
    class: "main-page min-h-screen font-sans",
    "data-srcloc": "/pud-smeha-ha/pages/MainPage.vue:2"
  };
  const __sfc__ = _defineComponent({
    __name: 'MainPage',
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
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock("div", _hoisted_1, [_createVNode(HeroSection, {
          videoUrl: __props.videoUrl,
          directMp4Url: __props.directMp4Url,
          videoPoster: __props.videoPoster
        }, null, 8, ["videoUrl", "directMp4Url", "videoPoster"]), _createVNode(StorySection), _createVNode(EverydaySmileSection), _createVNode(StoriesSection), _createVNode(VisitorStories), _createVNode(FunFactsSection), _createVNode(MailSection), _createVNode(SymptomsSection), _createVNode(RecipeSection), _createVNode(AbsurdLab), _createVNode(UsefulTips), _createVNode(HarmfulTips), _createVNode(ShareSection), _createVNode(LaughterTherapy), _createVNode(FooterSection)]);
      };
    }
  });
  ;
  (function () {
    const style = document.createElement('style');
    style.innerHTML = "\n/* Global styles */\nhtml {\n  scroll-behavior: smooth;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Roboto, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/* Custom scrollbar */\n::-webkit-scrollbar {\n  width: 10px;\n}\n::-webkit-scrollbar-track {\n  background: #FFFBEB;\n}\n::-webkit-scrollbar-thumb {\n  background: linear-gradient(180deg, #FBBF24, #F59E0B);\n  border-radius: 5px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #D97706;\n}\n\n/* Selection color */\n::selection {\n  background: #FDE68A;\n  color: #1C1917;\n}\n";
    document.head.appendChild(style);
  })();
  const __default_1 = __sfc__;
  __exports.default = __default_1;
  return __exports;
})();
export default __exports.default;
