import { defineComponent as _defineComponent } from 'vue';
import { createElementVNode as _createElementVNode } from 'vue';
import { createVNode as _createVNode } from 'vue';
import { normalizeClass as _normalizeClass } from 'vue';
import { toDisplayString as _toDisplayString } from 'vue';
import { createTextVNode as _createTextVNode } from 'vue';
import { normalizeStyle as _normalizeStyle } from 'vue';
import { openBlock as _openBlock } from 'vue';
import { createElementBlock as _createElementBlock } from 'vue';
import { createCommentVNode as _createCommentVNode } from 'vue';
import { Transition as _Transition } from 'vue';
import { withCtx as _withCtx } from 'vue';
import { renderList as _renderList } from 'vue';
import { Fragment as _Fragment } from 'vue';
import { ref as ref } from 'vue';
import { computed as computed } from 'vue';
import { onMounted as onMounted } from 'vue';
import FloatingEmojis from './FloatingEmojis.js';


















const __exports = (() => {
  const __exports = {};
  const _hoisted_1 = {
    class: "therapy-section py-20 px-4 relative overflow-hidden",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:2"
  };
  const _hoisted_2 = {
    class: "bg-white/80 rounded-full px-4 py-2 shadow-sm border border-amber-100 flex items-center gap-2",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:39"
  };
  const _hoisted_3 = {
    class: "font-medium text-stone-700",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:41"
  };
  const _hoisted_4 = {
    class: "text-amber-600 text-base",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:41"
  };
  const _hoisted_5 = {
    class: "bg-white/80 rounded-full px-4 py-2 shadow-sm border border-amber-100 flex items-center gap-3",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:45"
  };
  const _hoisted_6 = {
    class: "w-20 h-2.5 bg-stone-100 rounded-full overflow-hidden",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:47"
  };
  const _hoisted_7 = {
    key: 0,
    class: "mb-6 text-center",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:62"
  };
  const _hoisted_8 = {
    class: "inline-block bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-200 rounded-2xl px-6 py-3 shadow-md milestone-bounce",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:66"
  };
  const _hoisted_9 = {
    class: "text-xl mr-2",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:67"
  };
  const _hoisted_10 = {
    class: "text-stone-700 font-medium",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:68"
  };
  const _hoisted_11 = ["disabled"];
  const _hoisted_12 = ["disabled"];
  const _hoisted_13 = ["disabled"];
  const _hoisted_14 = ["disabled"];
  const _hoisted_15 = {
    class: "text-sm",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:119"
  };
  const _hoisted_16 = {
    class: "text-xs opacity-60",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:120"
  };
  const _hoisted_17 = {
    key: 0,
    class: "absolute inset-0 pointer-events-none overflow-hidden confetti-container",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:131"
  };
  const _hoisted_18 = {
    key: 1,
    class: "absolute inset-0 pointer-events-none overflow-hidden",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:141"
  };
  const _hoisted_19 = {
    class: "text-lg md:text-xl text-stone-700 leading-relaxed max-w-md mx-auto font-medium",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:153"
  };
  const _hoisted_20 = {
    class: "mt-4 flex justify-center gap-2",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:156"
  };
  const _hoisted_21 = {
    key: 1,
    class: "text-center",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:166"
  };
  const _hoisted_22 = {
    class: "group",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:180"
  };
  const _hoisted_23 = {
    class: "cursor-pointer text-stone-500 hover:text-stone-700 text-sm font-medium flex items-center justify-center gap-2 transition-colors",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:181"
  };
  const _hoisted_24 = {
    key: 0,
    class: "mt-4 text-center text-stone-400 text-sm",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:186"
  };
  const _hoisted_25 = {
    key: 1,
    class: "mt-4 flex flex-wrap justify-center gap-2",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:190"
  };
  const _hoisted_26 = ["title"];
  const _hoisted_27 = {
    class: "text-lg",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:197"
  };
  const _hoisted_28 = {
    key: 0,
    class: "mt-2 text-amber-500 text-xs font-medium",
    "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:213"
  };
  const __sfc__ = _defineComponent({
    __name: 'LaughterTherapy',
    setup(__props) {
      const lightQuotes = [{
        emoji: '😊',
        text: 'Ты — это единственный ты во вселенной. Уже повод улыбнуться!'
      }, {
        emoji: '🌸',
        text: 'Где-то прямо сейчас распускается цветок. И он не знает слово "надо". Бери пример!'
      }, {
        emoji: '☀️',
        text: 'Солнце встало не для того, чтобы ты хмурился. Оно старалось — оцени!'
      }, {
        emoji: '🍀',
        text: 'Сегодня ты — везунчик по умолчанию. Просто потому что проснулся!'
      }, {
        emoji: '🦋',
        text: 'Даже бабочка знает: чтобы взлететь, нужно отпустить. Улыбнись и отпусти!'
      }, {
        emoji: '🐱',
        text: 'Котик где-то сейчас делает что-то милое. Представил? Уже легче!'
      }, {
        emoji: '🍪',
        text: 'Печенька к чаю — это не калория. Это объятие в съедобной форме!'
      }, {
        emoji: '🌿',
        text: 'Трава зелёная, небо голубое, а ты — прекрасный. Просто потому что!'
      }, {
        emoji: '🎈',
        text: 'Шарик улетает в небо — и ему всё равно, что о нём подумают. Вот бы нам так!'
      }, {
        emoji: '🪴',
        text: 'Даже кактус цветёт раз в год. Значит, и у тебя всё расцветёт!'
      }, {
        emoji: '🐧',
        text: 'Пингвин не парит, но он счастлив. Ты тоже можешь!'
      }, {
        emoji: '🍦',
        text: 'Мороженое тает — но оставляет сладкое послевкусие. Как хорошая улыбка!'
      }, {
        emoji: '🫐',
        text: 'Черника улучшает зрение — чтобы ты лучше видел хорошее вокруг!'
      }, {
        emoji: '🧸',
        text: 'У каждого взрослого внутри живёт маленький ребёнок. Погладь его по головке!'
      }, {
        emoji: '🎵',
        text: 'Твоя любимая песня уже играет в плеере вселенной. Наслаждайся!'
      }];
      const mediumQuotes = [{
        emoji: '🤭',
        text: 'Если бы твои мысли были сериалом — он бы назывался "Офис", но смешнее!'
      }, {
        emoji: '🎭',
        text: 'Твоя жизнь — это комедия, просто ты ещё не знаешь сценарий. Спойлер: там хэппи-энд!'
      }, {
        emoji: '🧦',
        text: 'Знаешь, куда пропадают носки? Они сбегают в страну, где все ходят босиком и смеются!'
      }, {
        emoji: '🍕',
        text: 'Пицца — это не еда. Это терапия в съедобной форме. И она никогда не осуждает!'
      }, {
        emoji: '🛋️',
        text: 'Диван — единственное место, где "ничегонеделание" — это продуктивный отдых. Ты молодец!'
      }, {
        emoji: '🎪',
        text: 'Жизнь — это цирк, но ты не обязан быть клоуном. Достаточно просто зрителем с попкорном!'
      }, {
        emoji: '🛒',
        text: 'Тележка в супермаркете всегда едет влево. Это не ты — это заговор. Расслабься!'
      }, {
        emoji: '📦',
        text: 'Ты заказывал спокойствие? Посылка застряла на сортировке. Но она уже в пути!'
      }, {
        emoji: '🪄',
        text: 'Если бы у тебя была волшебная палочка — ты бы взмахнул и... заказал бы пиццу. Это нормально!'
      }, {
        emoji: '🧩',
        text: 'Ты — пазл из 1000 деталей. И все детали на месте, даже если кажется иначе!'
      }, {
        emoji: '🎰',
        text: 'Жизнь — как автомат с игрушками. Иногда не везёт, но главное — не переставай дёргать ручку!'
      }, {
        emoji: '🎤',
        text: 'Пой в душе так, будто никто не слышит. Даже если соседи стучат по батарее — подпевают!'
      }, {
        emoji: '🕰️',
        text: 'Часы тикают, но время на счастье не ограничено. Успеешь!'
      }, {
        emoji: '🪶',
        text: 'Ты легче пёрышка, когда улыбаешься. А с грузом проблем — почти невесомый!'
      }, {
        emoji: '🧵',
        text: 'Жизнь — как нитка с иголкой. Иногда запутывается, но всегда можно отрезать и начать заново!'
      }];
      const strongQuotes = [{
        emoji: '🤣',
        text: 'Представь, что твой самый серьёзный начальник танцует тверк. Ну как, полегчало?!'
      }, {
        emoji: '🚀',
        text: 'Твои проблемы с высоты космоса — размером с пылинку. А ты — целая вселенная! Ура!'
      }, {
        emoji: '🦥',
        text: 'Ленивец — твой духовный зверь. Он медленный, но счастливый. И ты сможешь!'
      }, {
        emoji: '🎉',
        text: 'Если жизнь даёт тебе лимоны — сделай лимонад, добавь джина, позови друзей и устрой вечеринку!'
      }, {
        emoji: '🤪',
        text: 'Попробуй сейчас сделать смешное лицо в зеркале. Сделал? Поздравляю — ты вылечился!'
      }, {
        emoji: '✨',
        text: 'Ты — звёздная пыль, которая научилась шутить. Гравитация не одобряет, но нам плевать!'
      }, {
        emoji: '🐒',
        text: 'Если бы обезьяна эволюционировала в человека — то почему некоторые до сих пор кидаются какашками? Загадка!'
      }, {
        emoji: '🔥',
        text: 'Твой внутренний огонь никто не зальёт. Даже если ты сам поливаешь его переживаниями!'
      }, {
        emoji: '🦄',
        text: 'Единорогов не существует. Но ты в это верил в детстве. И был счастлив. Может, стоит поверить снова?'
      }, {
        emoji: '🎸',
        text: 'Сыграй на воображаемой гитаре соло. Прямо сейчас. Да, прямо здесь. Ты рок-звезда!'
      }, {
        emoji: '🧗',
        text: 'Ты карабкаешься в гору. Устал? Сядь на облако. Оно выдержит — ты же лёгкий!'
      }, {
        emoji: '🪐',
        text: 'У Сатурна есть кольца. У тебя — улыбка. Каждый аксессуар хорош по-своему!'
      }, {
        emoji: '🌪️',
        text: 'Твоя жизнь — ураган, но ты в центре шторма. А в центре всегда тихо. Слышишь? Это смех!'
      }, {
        emoji: '🎯',
        text: 'Ты попал в яблочко! Просто тем, что дожил до этого момента и читаешь это. Молодец!'
      }, {
        emoji: '🫂',
        text: 'Обними себя прямо сейчас. Серьёзно. Ты это заслужил. Ну как? Тепло?'
      }];
      // ─── STATE ──────────────────────────────────────────────────
      const activeDose = ref(null);
      const activeQuote = ref(null);
      const quoteKey = ref(0);
      const dosePower = ref(1);
      const visible = ref(false);
      const sectionRef = ref(null);
      const therapyEmojis = [{
        emoji: '💊',
        left: '4%',
        top: '15%',
        anim: 'bounce',
        delay: 0,
        duration: 2.5,
        size: 26
      }, {
        emoji: '😊',
        left: '93%',
        top: '18%',
        anim: 'float',
        delay: 0.5,
        duration: 3,
        size: 24
      }, {
        emoji: '🤭',
        left: '5%',
        top: '78%',
        anim: 'wobble',
        delay: 1.5,
        duration: 3.2,
        size: 22
      }, {
        emoji: '🤣',
        left: '93%',
        top: '80%',
        anim: 'hop',
        delay: 0.3,
        duration: 3.5,
        size: 24
      }, {
        emoji: '🎯',
        left: '50%',
        top: '5%',
        anim: 'pulse',
        delay: 2,
        duration: 2.5,
        size: 20
      }];
      const quoteAnimClass = ref('');
      const doseDotClass = ref('bg-emerald-400');
      // Marathon
      const marathonRunning = ref(false);
      // Stats
      const totalDoses = ref(0);
      // Milestones
      const milestoneMsg = ref('');
      const milestoneEmoji = ref('');
      const milestoneTimer = ref();
      // Confetti & sparkles
      const showConfetti = ref(false);
      const showSparkles = ref(false);
      // Discovered quotes collector
      const discoveredQuotes = ref([]);
      const totalUniqueQuotes = computed(() => lightQuotes.length + mediumQuotes.length + strongQuotes.length);
      // ─── COMPUTED ──────────────────────────────────────────────
      const normBarClass = computed(() => {
        if (totalDoses.value >= 10) return 'bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400';
        if (totalDoses.value >= 3) return 'bg-gradient-to-r from-emerald-400 to-emerald-500';
        return 'bg-gradient-to-r from-amber-300 to-amber-400';
      });
      const normTextClass = computed(() => {
        if (totalDoses.value >= 10) return 'text-violet-500';
        if (totalDoses.value >= 3) return 'text-emerald-600';
        return 'text-stone-500';
      });
      // ─── METHODS ───────────────────────────────────────────────
      function pickRandomQuotes(arr, count) {
        const shuffled = [...arr].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
      }
      function getRandomQuote(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }
      function addToDiscovered(quote) {
        if (!discoveredQuotes.value.some(q => q.text === quote.text)) {
          discoveredQuotes.value.push(quote);
        }
      }
      function showMilestone(emoji, msg) {
        if (milestoneTimer.value) clearTimeout(milestoneTimer.value);
        milestoneEmoji.value = emoji;
        milestoneMsg.value = msg;
        milestoneTimer.value = setTimeout(() => {
          milestoneMsg.value = '';
        }, 3000);
      }
      function triggerVisuals(level) {
        if (level === 'strong') {
          showConfetti.value = true;
          setTimeout(() => {
            showConfetti.value = false;
          }, 2000);
        }
      }
      function afterDose(level) {
        // Check milestones
        if (totalDoses.value === 1) {
          showMilestone('🌱', 'Первая доза! Путь к счастью начат!');
        } else if (totalDoses.value === 3) {
          showMilestone('✅', 'Дневная норма выполнена! Ты официально счастлив!');
        } else if (totalDoses.value === 5) {
          showMilestone('🎖️', '5 доз! Ты — серебряный пациент смехотерапии!');
        } else if (totalDoses.value === 10) {
          showMilestone('🏆', '10 ДОЗ! Ты — легенда! Памятник из улыбок тебе обеспечен!');
        }
      }
      function applyDose(level) {
        activeDose.value = level;
        quoteKey.value++;
        let quotes;
        let delay;
        switch (level) {
          case 'light':
            quotes = lightQuotes;
            dosePower.value = 1;
            quoteAnimClass.value = 'quote-light';
            doseDotClass.value = 'bg-emerald-400';
            delay = 200;
            break;
          case 'medium':
            quotes = mediumQuotes;
            dosePower.value = 2;
            quoteAnimClass.value = 'quote-medium';
            doseDotClass.value = 'bg-amber-400';
            delay = 400;
            break;
          case 'strong':
            quotes = strongQuotes;
            dosePower.value = 3;
            quoteAnimClass.value = 'quote-strong';
            doseDotClass.value = 'bg-rose-400';
            delay = 600;
            break;
        }
        setTimeout(() => {
          const quote = getRandomQuote(quotes);
          activeQuote.value = quote;
          totalDoses.value++;
          addToDiscovered(quote);
          triggerVisuals(level);
          afterDose(level);
        }, delay);
      }
      async function startMarathon() {
        if (marathonRunning.value) return;
        marathonRunning.value = true;
        showConfetti.value = false;
        showSparkles.value = false;
        const stages = ['light', 'medium', 'strong'];
        for (const stage of stages) {
          applyDose(stage);
          // Wait for the dose animation to complete + some extra
          const wait = stage === 'light' ? 2500 : stage === 'medium' ? 2800 : 3000;
          await new Promise(resolve => setTimeout(resolve, wait));
        }
        // Grand finale: sparkles!
        showSparkles.value = true;
        setTimeout(() => {
          showSparkles.value = false;
        }, 2500);
        showMilestone('🎯', 'Марафон завершён! Ты — чемпион по смеху! 🏅');
        marathonRunning.value = false;
      }
      function confettiStyle(n) {
        const colors = ['#FCD34D', '#FCA5A5', '#6EE7B7', '#93C5FD', '#C4B5FD', '#FDA4AF'];
        return {
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 0.5}s`,
          animationDuration: `${1 + Math.random() * 1.5}s`,
          backgroundColor: colors[n % colors.length],
          width: `${6 + Math.random() * 6}px`,
          height: `${6 + Math.random() * 6}px`
        };
      }
      function sparkleStyle(n) {
        const positions = [{
          top: '10%',
          left: '15%'
        }, {
          top: '20%',
          left: '80%'
        }, {
          top: '40%',
          left: '10%'
        }, {
          top: '15%',
          left: '50%'
        }, {
          top: '60%',
          left: '20%'
        }, {
          top: '70%',
          left: '85%'
        }, {
          top: '80%',
          left: '30%'
        }, {
          top: '45%',
          left: '75%'
        }, {
          top: '25%',
          left: '65%'
        }, {
          top: '65%',
          left: '55%'
        }, {
          top: '85%',
          left: '45%'
        }, {
          top: '5%',
          left: '90%'
        }];
        const pos = positions[n % positions.length];
        return {
          top: pos.top,
          left: pos.left,
          fontSize: `${14 + Math.random() * 18}px`,
          animationDelay: `${Math.random() * 0.8}s`
        };
      }
      // ─── LIFECYCLE ─────────────────────────────────────────────
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
        return _openBlock(), _createElementBlock("section", _hoisted_1, [_cache[15] || (_cache[15] = _createElementVNode("div", {
          class: "absolute inset-0 pointer-events-none overflow-hidden",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:4"
        }, [_createElementVNode("div", {
          class: "absolute top-5 left-1/3 w-32 h-32 bg-amber-200 rounded-full opacity-20 blur-3xl",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:5"
        }), _createElementVNode("div", {
          class: "absolute bottom-10 right-1/4 w-40 h-40 bg-rose-200 rounded-full opacity-15 blur-3xl",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:6"
        }), _createElementVNode("div", {
          class: "absolute top-1/2 right-1/2 w-24 h-24 bg-emerald-200 rounded-full opacity-10 blur-3xl",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:7"
        })], -1)), _createVNode(FloatingEmojis, {
          emojis: therapyEmojis
        }), _createElementVNode("div", {
          class: "max-w-3xl mx-auto relative z-10",
          ref_key: "sectionRef",
          ref: sectionRef,
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:13"
        }, [_createElementVNode("div", {
          class: _normalizeClass(["text-center mb-10", visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']),
          style: {
            "transition": "all 0.8s ease-out"
          },
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:15"
        }, [...(_cache[3] || (_cache[3] = [_createElementVNode("div", {
          class: "inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-5 therapy-icon-ring",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:20"
        }, [_createElementVNode("i", {
          class: "fas fa-kit-medical text-3xl text-green-500 animated-therapy-icon",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:21"
        })], -1), _createElementVNode("h2", {
          class: "text-3xl md:text-4xl font-bold text-stone-800 mb-3",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:23"
        }, " 💊 Срочная смехотерапия ", -1), _createElementVNode("p", {
          class: "text-stone-500 text-lg max-w-lg mx-auto",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:26"
        }, " Когда шутки заканчиваются, начинается магия! Выбери дозировку 😊 ", -1)]))], 2), totalDoses.value > 0 ? (_openBlock(), _createElementBlock("div", {
          key: 0,
          class: _normalizeClass(["mb-6 flex flex-wrap items-center justify-center gap-4 text-sm", visible.value ? 'opacity-100' : 'opacity-0']),
          style: {
            "transition": "all 0.6s ease-out 0.1s"
          },
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:32"
        }, [_createElementVNode("div", _hoisted_2, [_cache[5] || (_cache[5] = _createElementVNode("span", {
          class: "text-lg",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:40"
        }, "💊", -1)), _createElementVNode("span", _hoisted_3, [_cache[4] || (_cache[4] = _createTextVNode("Принято доз: ", -1)), _createElementVNode("strong", _hoisted_4, _toDisplayString(totalDoses.value), 1)])]), _createElementVNode("div", _hoisted_5, [_cache[6] || (_cache[6] = _createElementVNode("span", {
          class: "text-xs text-stone-500 whitespace-nowrap",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:46"
        }, "Норма на день:", -1)), _createElementVNode("div", _hoisted_6, [_createElementVNode("div", {
          class: _normalizeClass(["h-full rounded-full transition-all duration-500 ease-out", normBarClass.value]),
          style: _normalizeStyle({
            width: Math.min(totalDoses.value / 3 * 100, 100) + '%'
          }),
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:48"
        }, null, 6)]), _createElementVNode("span", {
          class: _normalizeClass(["text-xs font-medium", normTextClass.value]),
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:54"
        }, _toDisplayString(totalDoses.value >= 10 ? '✨ Перевыполнена!' : totalDoses.value >= 3 ? '✅ Выполнена' : `${totalDoses.value}/3`), 3)])], 2)) : _createCommentVNode("", true), _createVNode(_Transition, {
          name: "milestone-pop"
        }, {
          default: _withCtx(() => [milestoneMsg.value ? (_openBlock(), _createElementBlock("div", _hoisted_7, [_createElementVNode("div", _hoisted_8, [_createElementVNode("span", _hoisted_9, _toDisplayString(milestoneEmoji.value), 1), _createElementVNode("span", _hoisted_10, _toDisplayString(milestoneMsg.value), 1)])])) : _createCommentVNode("", true)]),
          _: 1
        }), _createElementVNode("div", {
          class: _normalizeClass(["flex flex-wrap justify-center gap-3 mb-8", visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']),
          style: {
            "transition": "all 0.8s ease-out 0.2s"
          },
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:74"
        }, [_createElementVNode("button", {
          onClick: _cache[0] || (_cache[0] = $event => applyDose('light')),
          class: _normalizeClass(["dose-btn bg-emerald-50 hover:bg-emerald-100 border-emerald-200 text-emerald-700 px-5 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 border shadow-sm flex flex-col items-center gap-1.5", {
            'dose-active': activeDose.value === 'light'
          }]),
          disabled: marathonRunning.value,
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:79"
        }, [...(_cache[7] || (_cache[7] = [_createElementVNode("span", {
          class: "text-2xl",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:85"
        }, "😊", -1), _createElementVNode("span", {
          class: "text-sm",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:86"
        }, "Лёгкая улыбка", -1), _createElementVNode("span", {
          class: "text-xs opacity-60",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:87"
        }, "1 капсула", -1)]))], 10, _hoisted_11), _createElementVNode("button", {
          onClick: _cache[1] || (_cache[1] = $event => applyDose('medium')),
          class: _normalizeClass(["dose-btn bg-amber-50 hover:bg-amber-100 border-amber-200 text-amber-700 px-5 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 border shadow-sm flex flex-col items-center gap-1.5", {
            'dose-active': activeDose.value === 'medium'
          }]),
          disabled: marathonRunning.value,
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:90"
        }, [...(_cache[8] || (_cache[8] = [_createElementVNode("span", {
          class: "text-2xl",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:96"
        }, "🤭", -1), _createElementVNode("span", {
          class: "text-sm",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:97"
        }, "Хихиканье", -1), _createElementVNode("span", {
          class: "text-xs opacity-60",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:98"
        }, "2 капсулы", -1)]))], 10, _hoisted_12), _createElementVNode("button", {
          onClick: _cache[2] || (_cache[2] = $event => applyDose('strong')),
          class: _normalizeClass(["dose-btn bg-rose-50 hover:bg-rose-100 border-rose-200 text-rose-700 px-5 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 border shadow-sm flex flex-col items-center gap-1.5", {
            'dose-active': activeDose.value === 'strong'
          }]),
          disabled: marathonRunning.value,
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:101"
        }, [...(_cache[9] || (_cache[9] = [_createElementVNode("span", {
          class: "text-2xl",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:107"
        }, "🤣", -1), _createElementVNode("span", {
          class: "text-sm",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:108"
        }, "Истерика", -1), _createElementVNode("span", {
          class: "text-xs opacity-60",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:109"
        }, "3 капсулы", -1)]))], 10, _hoisted_13), _createElementVNode("button", {
          onClick: startMarathon,
          class: "dose-btn marathon-btn bg-gradient-to-br from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100 border-violet-200 text-violet-700 px-5 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 border shadow-sm flex flex-col items-center gap-1.5",
          disabled: marathonRunning.value,
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:113"
        }, [_createElementVNode("span", {
          class: _normalizeClass(["text-2xl", {
            'marathon-spin': marathonRunning.value
          }]),
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:118"
        }, "🎯", 2), _createElementVNode("span", _hoisted_15, _toDisplayString(marathonRunning.value ? 'Бежим...' : 'Марафон хохота'), 1), _createElementVNode("span", _hoisted_16, _toDisplayString(marathonRunning.value ? '😊→🤭→🤣' : '3 дозы за раз'), 1)], 8, _hoisted_14)], 2), _createElementVNode("div", {
          class: _normalizeClass(["result-box min-h-[150px] bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-amber-100 flex items-center justify-center relative overflow-hidden", visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']),
          style: {
            "transition": "all 0.8s ease-out 0.4s"
          },
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:125"
        }, [showConfetti.value ? (_openBlock(), _createElementBlock("div", _hoisted_17, [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(30, n => {
          return _createElementVNode("div", {
            key: 'confetti-' + n,
            class: "confetti-piece",
            style: _normalizeStyle(confettiStyle(n)),
            "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:132"
          }, null, 4);
        }), 64))])) : _createCommentVNode("", true), showSparkles.value ? (_openBlock(), _createElementBlock("div", _hoisted_18, [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(12, n => {
          return _createElementVNode("div", {
            key: 'sparkle-' + n,
            class: "sparkle-star",
            style: _normalizeStyle(sparkleStyle(n)),
            "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:142"
          }, "✨", 4);
        }), 64))])) : _createCommentVNode("", true), _createVNode(_Transition, {
          name: "therapy-pop",
          mode: "out-in"
        }, {
          default: _withCtx(() => [activeQuote.value ? (_openBlock(), _createElementBlock("div", {
            key: quoteKey.value,
            class: "text-center relative z-10",
            "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:151"
          }, [_createElementVNode("div", {
            class: _normalizeClass(["text-6xl mb-4", quoteAnimClass.value]),
            "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:152"
          }, _toDisplayString(activeQuote.value.emoji), 3), _createElementVNode("p", _hoisted_19, _toDisplayString(activeQuote.value.text), 1), _createElementVNode("div", _hoisted_20, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(dosePower.value, n => {
            return _openBlock(), _createElementBlock("span", {
              key: n,
              class: _normalizeClass(["inline-block w-2.5 h-2.5 rounded-full dose-dot", doseDotClass.value]),
              style: _normalizeStyle({
                animationDelay: `${n * 0.2}s`
              }),
              "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:157"
            }, null, 6);
          }), 128))])])) : (_openBlock(), _createElementBlock("div", _hoisted_21, [...(_cache[10] || (_cache[10] = [_createElementVNode("p", {
            class: "text-stone-400 text-lg",
            "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:167"
          }, " 🫖 Выбери дозировку и получи порцию хорошего настроения! ", -1)]))]))]),
          _: 1
        })], 2), _createElementVNode("div", {
          class: _normalizeClass(["mt-8", visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']),
          style: {
            "transition": "all 0.8s ease-out 0.6s"
          },
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:175"
        }, [_createElementVNode("details", _hoisted_22, [_createElementVNode("summary", _hoisted_23, [_cache[11] || (_cache[11] = _createElementVNode("i", {
          class: "fas fa-book-open text-xs",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:182"
        }, null, -1)), _createTextVNode(" Коллекция открыток: " + _toDisplayString(discoveredQuotes.value.length) + " из " + _toDisplayString(totalUniqueQuotes.value) + " ", 1), _cache[12] || (_cache[12] = _createElementVNode("i", {
          class: "fas fa-chevron-down text-xs transition-transform group-open:rotate-180",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:184"
        }, null, -1))]), discoveredQuotes.value.length === 0 ? (_openBlock(), _createElementBlock("div", _hoisted_24, [...(_cache[13] || (_cache[13] = [_createElementVNode("i", {
          class: "fas fa-spinner text-xs animate-spin mr-1",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:187"
        }, null, -1), _createTextVNode(" Принимайте дозы, чтобы собрать коллекцию! ", -1)]))])) : (_openBlock(), _createElementBlock("div", _hoisted_25, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(discoveredQuotes.value, (q, i) => {
          return _openBlock(), _createElementBlock("div", {
            key: i,
            class: "discovered-badge",
            title: q.text,
            "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:191"
          }, [_createElementVNode("span", _hoisted_27, _toDisplayString(q.emoji), 1)], 8, _hoisted_26);
        }), 128))]))])], 2), _createElementVNode("div", {
          class: _normalizeClass(["text-center mt-8", visible.value ? 'opacity-100' : 'opacity-0']),
          style: {
            "transition": "all 0.6s ease-out 0.8s"
          },
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:204"
        }, [_cache[14] || (_cache[14] = _createElementVNode("p", {
          class: "text-stone-400 text-sm flex items-center justify-center gap-1",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:209"
        }, [_createElementVNode("i", {
          class: "fas fa-heart text-xs text-rose-300 animate-heartbeat",
          "data-srcloc": "/pud-smeha-ha/components/LaughterTherapy.vue:210"
        }), _createTextVNode(" Побочных эффектов нет. Кроме счастливой улыбки и желания обнять мир! ")], -1)), totalDoses.value >= 10 ? (_openBlock(), _createElementBlock("p", _hoisted_28, " 🏆 Вы — почётный пациент месяца! Бессрочная скидка на улыбки 100%! ")) : _createCommentVNode("", true)], 2)], 512)]);
      };
    }
  });
  ;
  (function () {
    const style = document.createElement('style');
    style.innerHTML = "\n.therapy-section[data-v-71f2a4f1] {\n  background: linear-gradient(180deg, #FDF2F8 0%, #ECFDF5 50%, #FFFBEB 100%);\n}\n\n/* Animated header icon */\n.therapy-icon-ring[data-v-71f2a4f1] {\n  animation: therapy-pulse-71f2a4f1 2.5s ease-in-out infinite;\n}\n.animated-therapy-icon[data-v-71f2a4f1] {\n  animation: therapy-shake-71f2a4f1 2s ease-in-out infinite;\n}\n@keyframes therapy-pulse-71f2a4f1 {\n0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.3);\n}\n50% { box-shadow: 0 0 24px 12px rgba(34, 197, 94, 0.12);\n}\n}\n@keyframes therapy-shake-71f2a4f1 {\n0%, 100% { transform: rotate(0deg);\n}\n20% { transform: rotate(-8deg);\n}\n40% { transform: rotate(8deg);\n}\n60% { transform: rotate(-5deg);\n}\n80% { transform: rotate(5deg);\n}\n}\n\n/* Dose buttons */\n.dose-btn[data-v-71f2a4f1] {\n  min-width: 130px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.05);\n}\n.dose-btn[data-v-71f2a4f1]:hover {\n  box-shadow: 0 4px 16px rgba(0,0,0,0.1);\n}\n.dose-btn[data-v-71f2a4f1]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.dose-active[data-v-71f2a4f1] {\n  transform: scale(1.05);\n  box-shadow: 0 4px 20px rgba(0,0,0,0.15);\n  border-width: 2px;\n}\n.dose-btn:first-child.dose-active[data-v-71f2a4f1] {\n  border-color: #10B981;\n  background: #D1FAE5;\n}\n.dose-btn:nth-child(2).dose-active[data-v-71f2a4f1] {\n  border-color: #F59E0B;\n  background: #FEF3C7;\n}\n.dose-btn:nth-child(3).dose-active[data-v-71f2a4f1] {\n  border-color: #F43F5E;\n  background: #FFE4E6;\n}\n\n/* Marathon button */\n.marathon-btn[data-v-71f2a4f1] {\n  min-width: 130px;\n}\n.marathon-spin[data-v-71f2a4f1] {\n  animation: spin-71f2a4f1 1s linear infinite;\n}\n@keyframes spin-71f2a4f1 {\nfrom { transform: rotate(0deg);\n}\nto { transform: rotate(360deg);\n}\n}\n\n/* Result box */\n.result-box[data-v-71f2a4f1] {\n  min-height: 150px;\n}\n\n/* Quote animations */\n.quote-light[data-v-71f2a4f1] {\n  animation: soft-appear-71f2a4f1 0.5s ease-out;\n}\n.quote-medium[data-v-71f2a4f1] {\n  animation: soft-appear-71f2a4f1 0.5s ease-out 0.2s both;\n}\n.quote-strong[data-v-71f2a4f1] {\n  animation: soft-appear-71f2a4f1 0.5s ease-out 0.4s both;\n}\n@keyframes soft-appear-71f2a4f1 {\nfrom { opacity: 0; transform: scale(0.8) rotate(-5deg);\n}\nto { opacity: 1; transform: scale(1) rotate(0deg);\n}\n}\n\n/* Therapy pop transition */\n.therapy-pop-enter-active[data-v-71f2a4f1] {\n  animation: pop-in-71f2a4f1 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.therapy-pop-leave-active[data-v-71f2a4f1] {\n  animation: pop-in-71f2a4f1 0.2s ease-in reverse;\n}\n@keyframes pop-in-71f2a4f1 {\nfrom { opacity: 0; transform: scale(0.7) translateY(10px);\n}\nto { opacity: 1; transform: scale(1) translateY(0);\n}\n}\n\n/* Dose dots */\n.dose-dot[data-v-71f2a4f1] {\n  animation: dot-pulse-71f2a4f1 1s ease-in-out infinite;\n}\n@keyframes dot-pulse-71f2a4f1 {\n0%, 100% { transform: scale(1); opacity: 0.6;\n}\n50% { transform: scale(1.3); opacity: 1;\n}\n}\n\n/* Confetti */\n.confetti-container[data-v-71f2a4f1] {\n  z-index: 1;\n}\n.confetti-piece[data-v-71f2a4f1] {\n  position: absolute;\n  top: -10px;\n  border-radius: 2px;\n  animation: confetti-fall-71f2a4f1 2s ease-in forwards;\n}\n@keyframes confetti-fall-71f2a4f1 {\n0% {\n    transform: translateY(-20px) rotate(0deg);\n    opacity: 1;\n}\n100% {\n    transform: translateY(250px) rotate(720deg);\n    opacity: 0;\n}\n}\n\n/* Sparkle stars */\n.sparkle-star[data-v-71f2a4f1] {\n  position: absolute;\n  animation: sparkle-pop-71f2a4f1 1.5s ease-out forwards;\n}\n@keyframes sparkle-pop-71f2a4f1 {\n0% {\n    transform: scale(0) rotate(0deg);\n    opacity: 0;\n}\n30% {\n    transform: scale(1.5) rotate(180deg);\n    opacity: 1;\n}\n100% {\n    transform: scale(0) rotate(360deg);\n    opacity: 0;\n}\n}\n\n/* Milestone */\n.milestone-pop-enter-active[data-v-71f2a4f1] {\n  animation: milestone-in-71f2a4f1 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.milestone-pop-leave-active[data-v-71f2a4f1] {\n  animation: milestone-in-71f2a4f1 0.3s ease-in reverse;\n}\n@keyframes milestone-in-71f2a4f1 {\nfrom { opacity: 0; transform: scale(0.5) translateY(-20px);\n}\nto { opacity: 1; transform: scale(1) translateY(0);\n}\n}\n.milestone-bounce[data-v-71f2a4f1] {\n  animation: soft-bounce-71f2a4f1 0.6s ease-out;\n}\n@keyframes soft-bounce-71f2a4f1 {\n0% { transform: scale(0.8);\n}\n40% { transform: scale(1.05);\n}\n70% { transform: scale(0.98);\n}\n100% { transform: scale(1);\n}\n}\n\n/* Discovered badges */\n.discovered-badge[data-v-71f2a4f1] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  background: white;\n  border: 1px solid #FDE68A;\n  border-radius: 12px;\n  cursor: help;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.05);\n}\n.discovered-badge[data-v-71f2a4f1]:hover {\n  transform: scale(1.15) rotate(-5deg);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.12);\n  border-color: #F59E0B;\n}\n\n/* Heartbeat */\n.animate-heartbeat[data-v-71f2a4f1] {\n  animation: heartbeat-71f2a4f1 1.5s ease-in-out infinite;\n}\n@keyframes heartbeat-71f2a4f1 {\n0%, 100% { transform: scale(1);\n}\n14% { transform: scale(1.3);\n}\n28% { transform: scale(1);\n}\n42% { transform: scale(1.2);\n}\n56% { transform: scale(1);\n}\n}\n";
    document.head.appendChild(style);
  })();
  (__sfc__.__vccOpts || __sfc__).__scopeId = "data-v-71f2a4f1";
  const __default_1 = __sfc__;
  __exports.default = __default_1;
  return __exports;
})();
export default __exports.default;
