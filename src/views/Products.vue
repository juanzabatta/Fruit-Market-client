<template>
  <main id="products">
    <div class="content">
      <PmNavbar></PmNavbar>
      <PmSidebar
        :windowWidth="windowWidth"
        v-if="$route.name === 'ProductsCategory'"
      ></PmSidebar>
      <PmListProducts
        :windowWidth="windowWidth"
        v-if="$route.name === 'ProductsCategory'"
      ></PmListProducts>
      <PmHomeProducts
        :windowWidth="windowWidth"
        v-else-if="$route.name === 'Products'"
      ></PmHomeProducts>
    </div>
  </main>
</template>

<script>
import PmSidebar from "@/components/layout/products/SidebarProducts.vue";
import PmNavbar from "@/components/layout/products/NavbarProducts.vue";
import PmListProducts from "@/components/layout/products/ListProducts.vue";
import PmHomeProducts from "@/components/layout/products/HomeProducts.vue";

export default {
  name: "Products",
  components: {
    PmSidebar,
    PmListProducts,
    PmHomeProducts,
    PmNavbar
  },
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleWindowResize);
  },
  methods: {
    handleWindowResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  watch: {
    windowWidth: "handleWindowResize"
  }
};
</script>

<style lang="scss">
/********* Products ********/
#products .content {
  min-height: calc(100vh - 4rem - 4.2rem);
  margin: auto;
  background-color: transparent;
  position: relative;
  max-width: 1200px;
  display: grid;
  height: auto;
  grid-template-columns: 25% 75%;
}

/********* Responsive Design ********/
@media screen and (max-width: 650px) {
  #products .content {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }
}
</style>
