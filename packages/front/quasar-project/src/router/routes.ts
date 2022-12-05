import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/sign-in',
    component: ()=> import('layouts/MainLayout.vue'),
    children: [{path: '', component: ()=> import('pages/')}]
  },
  {
    path: '/sign-up',
    component: () => import('layouts/MainLayout.vue'),
    children: [{path: '', component: ()=> import('pages/')}]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
