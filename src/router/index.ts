import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        header: () => import('@/components/layout/Header.vue'),
        default: () => import('@/views/HomeView.vue'),
      },
    },
  ],
})

export default router
