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
      path: '/brazil',
      name: 'brazil',
      component: () => import('../views/BrazilView.vue'),
    },
    {
      path: '/jamaica',
      name: 'jamaica',
      component: () => import('../views/JamaicaView.vue'),
    },
    {
      path: '/hawaii',
      name: 'hawaii',
      component: () => import('../views/HawaiiView.vue'),
    },
    {
      path: '/panama',    
      name: 'panama',
      component: () => import('../views/PanamaView.vue'),
    },
    {
      path: '/destinations/:destination',
      name: 'destination.show',
      component: () => import('../views/DestinationShowView.vue'),
    }
  ],
})

export default router
