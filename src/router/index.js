import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About.vue'
import HomeView from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router