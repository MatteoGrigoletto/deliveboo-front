import { createRouter, createWebHistory } from "vue-router";

// Pages
import HomePage from "./pages/HomePage.vue";
import Page404 from "./pages/Page404.vue";
import SingleRestaurant from "./pages/SingleRestaurant.vue";
import OrderCustomer from "./pages/OrderCustomer.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/order",
      name: "OrderCustomer",
      component: OrderCustomer,
    },
    {
      path: "/:restaurant",
      name: "SingleRestaurant",
      component: SingleRestaurant,
    },

    {
      path: "/:pathMatch(.*)*",
      name: "page-404",
      component: Page404,
    },
  ],
});

export { router };
