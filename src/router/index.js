import { createRouter, createWebHistory } from "vue-router";
import FrontView from "../views/FrontView.vue";
import NotFoundView from "../views/NotFoundView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "frontpage",
      component: FrontView,
    },
    {
      path: "/LagPerson",
      name: "LagPerson",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LagPerson.vue"),
    },
    {
      path: "/EasterEgg",
      name: "EasterEgg",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/EasterEgg.vue"),
    },
    {
      path: "/edit-person",
      name: "edit-person",
      component: () => import("../views/EditPersonView.vue"),
    },
    {
      path: "/select-parent",
      name: "select-parent",
      component: () => import("../views/SelectParent.vue"),
    },
    {
      path: "/:catchall(.*)*",
      name: "Not Found",
      component: NotFoundView
  }
  ],
});

export default router;
