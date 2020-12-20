import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Дом',
    component: Home
  },
  {
    path: '/about',
    name: 'О нас',  
    component: () => import('../views/About.vue')
  },
  {
    path: '/contacts',
    name: 'Контакты',
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/config',
    name: 'Настройки',
    component: () => import('../views/Config.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
