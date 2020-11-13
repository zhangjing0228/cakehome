import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Home from '../views/index/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path:'/home',
    component:Home
  },
  {
    path: "/",
    name: "Index",
    component: Index,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
