import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Products",
    component: () => import(/* webpackChunkName: "products" */ "../views/Products.vue")
  },
  {
    path: "/products/:category",
    name: "ProductsCategory",
    component: () => import(/* webpackChunkName: "products" */ "../views/Products.vue")
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: () => import(/* webpackChunkName: "ProductsDetail" */ "../views/ProductDetail.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
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

export default router;
