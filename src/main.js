import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import urlBaseApi from "./modules/urlBase";

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
axios.defaults.baseURL = urlBaseApi + "api/";

import priceFormat from "@/filters/price-format";
Vue.use(priceFormat);

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
