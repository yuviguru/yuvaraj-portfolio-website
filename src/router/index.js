import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    var rect = document.querySelector(".page-body-container").getBoundingClientRect();
    if(rect.top <=0)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ el:".page-body-container", left: 0, top: 0, behavior: "smooth" })
        }, 500)
      })
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/career',
      name: 'career',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ContactView.vue')
    },
    { path: '/:catchAll(.*)', component: HomeView }
  ]
})

export default router
