import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Cookie from "./tools/cookie.js";
import API from "./api";
import toast from "./components/toast/index";

Vue.prototype.Cookie = Cookie;
Vue.prototype.$api = API;
Vue.prototype.$toast = toast;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
