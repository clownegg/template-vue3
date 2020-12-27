import { Home, Button, NotFound } from '@/pages';
import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/component/button', component: Button },
  { path: '/:anyMatch(.*)', name: 'NotFound', component: NotFound }
];
