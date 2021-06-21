import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AddRestaurant',
    name: 'AddRestaurant',
    component: () => import('../views/addResto.vue')
  },
  {
    path: '/menuArticle',
    name: 'menuArticle',
    component: () => import('../views/articleMenu.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
