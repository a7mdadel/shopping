import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/useCartStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";
const pinia = createPinia();

createApp(App)
  .use(Vue3Toastify, {
    autoClose: 3000,
  })
  .use(pinia)
  .use(store)
  .use(router)
  .mount("#app");
