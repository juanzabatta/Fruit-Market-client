import Vue from "vue";
import Vuex from "vuex";

// Store products
import products from "../modules/products";

// Vue router
import router from "../router/index";

// JWT
import decode from "jwt-decode";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filters: {
      subCategory: "none",
      price: "none",
      priceKg: "none",
      offer: "none",
      ratings: "none",
      deliveryTime: "none",
      manufacturer: "none",
      company: "none"
    },
    token: "",
    userDB: "",
    iAlert: {
      success: true,
      title: "",
      message: "",
      show: false
    }
  },
  mutations: {
    setFilters(state, payload) {
      state.filters = payload;
    },
    getUser(state, payload) {
      state.token = payload;

      if (payload === "" || payload === null) {
        state.userDB = "";
      } else {
        const user = decode(payload);
        state.userDB = user.data;
      }
    },
    getAlert(state, payload) {
      state.iAlert.success = payload.success;
      state.iAlert.title = payload.title;
      state.iAlert.message = payload.message;
      state.iAlert.show = payload.show;
    }
  },
  actions: {
    saveStorage({ commit }, payload) {
      localStorage.setItem("token", payload);
      commit("getUser", payload);
    },
    closeSession({ commit }) {
      commit("getUser", "");
      localStorage.removeItem("token");
      router.push({ name: "Login" });
    }
  },
  modules: {
    products
  },
  getters: {}
});
