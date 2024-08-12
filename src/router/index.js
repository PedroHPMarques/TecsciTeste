import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Nomes from '@/views/Nomes.vue'
import Graficos from '@/views/Graficos.vue'

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
    {
      path: '/graficos',
      name: 'graficos',
      component: Graficos
    },
  ]
})

export default router
