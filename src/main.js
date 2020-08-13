import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import priceFormat from "@/filters/price-format";
Vue.use(priceFormat);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
