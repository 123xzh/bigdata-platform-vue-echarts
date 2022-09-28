import { createRouter, createWebHashHistory,  createWebHistory } from 'vue-router'


const routes = [

  {
    path: '/page',
    name: 'page',
    component: () => import('../views/homePage.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../components/Other/InDex.vue')
  },
  {
    path: '/tj',
    name: 'tj',
    component: () => import('../components/Echarts/itemThree.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Other/login.vue')
  },
  {
    path: '/province',
    name: 'province',
    component: () => import('../components/Echarts/data-mapPage.vue'),
  },
  {
    path: '/',
    redirect: '/index'
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  mode: 'hash',
  routes
})

export default router
