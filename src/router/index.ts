import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import example from '@/router/example';
import exampleArray from '@/router/example.array';

const routes: Array<RouteRecordRaw> = [
  example,
  ...exampleArray,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
