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
  ],
})

export default router
