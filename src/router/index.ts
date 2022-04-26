import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home/Home"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/Login"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/Error/Error404"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
