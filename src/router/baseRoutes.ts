import type { RouteRecordRaw } from 'vue-router';

// TODO: Add Route Handling for All routes currently in Wix Version
export const baseRoutes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    components: {
      default: () => import('@/views/HomeView.vue'),
      header: () => import('@/components/layout/Header.vue'),
    },
  },
  {
    name: 'contact',
    path: '/contact',
    components: {
      default: () => import('@/views/ContactView.vue'),
      header: () => import('@/components/layout/Header.vue'),
    },
  },
  {
    name: 'privacy-policy',
    path: '/privacy-policy',
    components: {
      default: () => import('@/views/PrivacyPolicyView.vue'),
      header: () => import('@/components/layout/Header.vue'),
    },
  },
  {
    name: 'not-found',
    path: '/:path(.*)',
    components: {
      header: () => import('@/components/layout/Header.vue'),
      default: () => import('@/views/NotFound.vue'),
    },
  },
];
