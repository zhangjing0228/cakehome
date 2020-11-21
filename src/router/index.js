import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Home from '../views/index/Home.vue';
import Cart from '../views/shopcart/Cart.vue';
import Pay from '../views/shopcart/Pay.vue'
import ProductDetail from '../views/shopcart/ProductDetail.vue'
import Dingdan from '../views/shopcart/Dingdan.vue'
import Coupon from '../views/index/Coupon.vue'




Vue.use(VueRouter);

const routes = [
  {
    path:'/coupon',
    component:Coupon
  },
  {
    path:'/dingdan',
    component:Dingdan
  },
  {
    path:'/productdetail',
    component:ProductDetail
  },
  {
    path:'/pay',
    component:Pay
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/flower",
    name: "Flower",
    component: () => import("../views/flowers/Flower.vue"),
  },
  {
    path: "/discounts",
    name: "Discounts",
    component: () => import("../views/flowers/Discounts.vue"),
  },
  {
    path: "/classlist/:category",
    name: "Classlist",
    component: () => import("../views/flowers/Classlist.vue"),
  },
  {
    path: "/flowerdetail/:fid",
    name: "Flowerdetail",
    component: () => import("../views/flowers/Flowerdetail.vue"),
  },
  {
    path: '/ify',
    name: 'Ify',
    component: () => import('../views/classify1/Ify.vue')
  },

  {
    path: '/page',
    name: 'Page',
    component: () => import('../views/classify1/Page.vue')
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;