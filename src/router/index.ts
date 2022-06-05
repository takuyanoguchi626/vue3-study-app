import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/top",
    component: () => import("../views/Top.vue"),
  },
  {
    path: "/",
    component: () => import("../views/Top.vue"),
  },
  {
    path: "/registerUser",
    component: () => import("../views/RegisterUser.vue"),
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/itemList",
    component: () => import("../views/ItemList.vue"),
  },
  {
    path: "/itemDetail/:itemId",
    component: () => import("../views/ItemDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
