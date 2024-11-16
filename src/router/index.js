import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import sourceData from '../data.json'

const router = createRouter({
  	history: createWebHistory(import.meta.env.BASE_URL),
  	linkActiveClass: 'vue-school-active-link',
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => {
                resolve({ top: 0 })
            }, 300)
        })
    },
  	routes: [
    {
      	path: '/',
      	name: 'home',
      	component: HomeView,
    },
    {
        path: '/protected',
        name: 'protected',
        component: () => import('../views/ProtectedView.vue'),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue'),
    },
    {
      	path: '/destinations/:destination/:slug',
      	name: 'destination.show',
      	component: () => import('../views/DestinationShowView.vue'),
        beforeEnter: (to, from, next) => {
            const exists = sourceData.destinations.find(
                destination => destination.id === parseInt(to.params.destination) && destination.slug === to.params.slug
            )
            if (exists) {
                next()
            } else {
                next({ 
                    name: 'not-found', 
                    params: { pathMatch: to.path.substring(1).split('/') },
                    query: to.query,
                    hash: to.hash,          
                })
            }
        },
      	children: [
        // Use props to pass route params to the component instead of using useRoute()
			{
				path: ':experienceSlug',
				name: 'experience.show',
				component: () => import('../views/ExperienceShowView.vue'),
				props: route => (
				{ 
					...route.params, 
					destination: parseInt(route.params.destination),
				}
			),
			},
      	],
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../views/NotFoundView.vue'),
    }
  ],
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !window.user) {
        next({ name: 'login' })
    } else {
        next()
    }
})

export default router
