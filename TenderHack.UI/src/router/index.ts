import { createRouter, createWebHistory } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware/loadLayout.middleware";
import { RouteNamesEnum } from "@/router/router.types";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: RouteNamesEnum.home,
      component: () => import("@/pages/Home.vue"),
    },
    {
      path: "/Dashboard",
      name: RouteNamesEnum.dashboard,
      component: () => import("@/pages/Dashboard.vue"),
    },
    {
      path: "/Logs",
      name: RouteNamesEnum.logs,
      component: () => import("@/pages/Logs.vue"),
    },
    {
      path: "/Clusters",
      name: RouteNamesEnum.cluster,
      component: () => import("@/pages/Clusters.vue")
    },
    {
      path: "/Demo",
      name: RouteNamesEnum.demo,
      component: () => import("@/pages/Demo.vue")
    }
  ],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
