import Vue from 'vue'
import VueRouter from 'vue-router'
import  Recommend from '../views/Recommend.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path:'/',
    name:'Recommend',
    component:Recommend
  }
]

const router = new VueRouter({
  mode: 'hash',
 
  routes
})

export default router
