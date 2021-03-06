import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import ListProduct from "@/pages/ListProduct.vue";
import Product from "@/pages/Product.vue";
import About from "@/pages/About.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/products", name: "ListProduct", component: ListProduct },
    { path: "/products/:id", name: "Product", component: Product },
    { path: "/about/", name: "About", component: About },
  ],
});

export default router;
