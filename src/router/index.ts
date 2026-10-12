import { createRouter, createWebHistory } from 'vue-router'

import Homeview from '../views/Homeview.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Homeview,
    },
  ],

  scrollBehavior() {
    return {
      top: 0,
      left: 0,
    }
  },
})

export default router