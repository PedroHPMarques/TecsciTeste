import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Nomes from '@/views/Nomes.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: Home
    },
    {
      path: '/nomes',
      name: '/nomes',
      component: Nomes
    },
  ]
})

export default router
