import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'sobre mi',

      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: () => import('../views/ProyectsListView.vue'),
    },
    {
      path: '/detalle:id',
      name: 'proyecto-detalle',
      component: () => import('../views/ProyectDetailView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0 }), 300)
      })
    )
  },
})

export default router
