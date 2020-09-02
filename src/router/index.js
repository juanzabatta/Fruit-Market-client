import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

// import store from "./store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/Products.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "Register" */ "../views/Register.vue")
  },
  {
    path: "/user",
    name: "User",
    component: () => import(/* webpackChunkName: "User" */ "../views/User.vue"),
    meta: { requireAuth: true }
  },
  {
    path: "/products/:category",
    name: "ProductsCategory",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/Products.vue")
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: () =>
      import(
        /* webpackChunkName: "ProductsDetail" */
        "../views/ProductDetail.vue"
      )
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/services",
    name: "Services",
    component: () =>
      import(/* webpackChunkName: "Services" */ "../views/Services.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Contact.vue")
  },
  {
    path: "/support",
    name: "Support",
    component: () =>
      import(/* webpackChunkName: "Support" */ "../views/Support.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const routeProtected = to.matched.some(record => record.meta.requireAuth);

  if (routeProtected && store.state.token === "") {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
