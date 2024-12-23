import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App)
  .use(router) // Configura Vue Router
  .use(store)  // Configura Vuex
  .mount('#app'); // Monta la aplicación en el elemento con id "app"
