import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/Home"),
  },
  {
    path: "/about",
    component: () => import("@/views/About"),
  },
  {
    path: "/login",
    component: () => import("@/views/Login"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
