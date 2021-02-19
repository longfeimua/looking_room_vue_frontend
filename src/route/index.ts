import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home/home.vue'
import map from '../views/home/location/map/map.vue'

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
    },
    {
      path: '/map',
      component: map
    }
  ]
})

export default router