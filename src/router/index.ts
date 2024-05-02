import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  // `routes: routes` 的缩写
  routes: [
    { path: "/", redirect: "/MainPage" },
    { path: "/MainPage", component: () => import("../pages/mainPage.vue") },
    { path: "/CanvasPage", component: () => import("../pages/canvasPage.vue") },
    { path: "/ChartsPage", component: () => import("../pages/chartsPage.vue") },
  ],
});

export { router };
