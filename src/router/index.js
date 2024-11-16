import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'vue-school-active-link',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/destinations/:destination/:slug',
      name: 'destination.show',
      component: () => import('../views/DestinationShowView.vue'),
    }
  ],
})

export default router
