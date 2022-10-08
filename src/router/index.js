import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    children: [
      {
        path: 'who-is-ilyas',
        name: 'about.whois',
        component: () => import('../views/about/WhoisView.vue')
      },
      {
        path: 'faq',
        name: 'about.faq',
        component: () => import('../views/about/FaqView.vue')
      },
      {
        path: 'process',
        name: 'about.process',
        component: () => import('../views/about/ProcessView.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from)=>{
  if(!(to.matched.length > 1 || from.matched.length > 1)){
    document.querySelector('#app').scrollTop = 0
  }
})

export default router
