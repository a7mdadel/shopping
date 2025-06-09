import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/homePage.vue";
import Cart from "../components/cartPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
