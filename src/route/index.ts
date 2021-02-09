import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home/home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    }
  ]
})

export default router