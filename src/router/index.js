import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import('../views/index/Home.vue')
const Cart = () => import('../views/shopcart/Cart.vue')
const Pay = () => import('../views/shopcart/Pay.vue')
const ProductDetail = () => import('../views/shopcart/ProductDetail.vue')
const Dingdan = () => import('../views/shopcart/Dingdan.vue')
const Coupon = () => import('../views/index/Coupon.vue')
const Mycenter = () => import('../views/ucenter/Mycenter.vue')
const Login = () => import('../views/ucenter/Login.vue')
const Register = () => import('../views/ucenter/Register.vue')
const Detail = () => import('../views/classify1/detail.vue')


Vue.use(VueRouter);

const routes = [
  {
    path:'/mycenter',
    component:Mycenter
  },
  {
    path:'/detail',
    component:Detail
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
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
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  // {
  //   path: "/",
  //   name: "Index",
  //   component: Index,
  // },
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