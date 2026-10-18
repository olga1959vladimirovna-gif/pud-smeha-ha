import { createApp } from 'vue';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
import MainPage from './components/MainPage.js';

createApp(MainPage, {
  videoUrl: '',
  directMp4Url: '/media/meshochek.mp4',
  videoPoster: '/media/meshochek.jpg',
}).mount('#app');

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
function syncVideoMotion() {
  for (const video of document.querySelectorAll('video')) {
    if (motionPreference.matches) {
      video.pause();
      video.autoplay = false;
      video.controls = true;
    }
  }
}
syncVideoMotion();
motionPreference.addEventListener('change', syncVideoMotion);
