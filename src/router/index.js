import Vue from 'vue'
import Index from '../views/shopcart/Index.vue'
import Home from '../views/shopcart/Home.vue'
import Test from '../views/classify1/Test.vue'
import VueRouter from 'vue-router'
import { Header } from 'mint-ui';


Vue.use(VueRouter)
Vue.component(Header.name, Header);


const routes = [
  {
    path:'/index',
    component:Index
  },
  {
    path: '/',
    component:Home
  },
  {
    path: '/test',
    component : Test
  }
 
  // {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
 ]

const router = new VueRouter({
   mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
