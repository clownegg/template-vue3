import { createApp } from 'vue';
import App from './app';
import router from './router';
import store from './store';
import './styles';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
