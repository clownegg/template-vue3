import { Home, NotFound } from '@/pages';
import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/:anyMatch(.*)', name: 'NotFound', component: NotFound }
];
