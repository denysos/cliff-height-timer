import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import about from '../views/About.vue'
import history from '../views/History.vue'
import saisiehisto from '../views/SaisieHisto.vue'
import Banque from '../views/Banque.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/history',
    name: 'history',
    component: history
  },
  {
    path: '/saisiehisto',
    name: 'saisiehisto',
    component: saisiehisto
  },
  {
    path: '/VueClient',
    name: 'VueClient',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about */ '../views/VueClient.vue')
  } ,
  {
    path: '/banque',
    name: 'banque',
    component: Banque
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
