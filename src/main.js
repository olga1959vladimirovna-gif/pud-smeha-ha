import { createApp } from 'vue';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
import MainPage from './components/MainPage.js';

createApp(MainPage, {
  videoUrl: '',
  directMp4Url: '/media/meshochek.mp4',
  videoPoster: '/media/meshochek.jpg',
}).mount('#app');
