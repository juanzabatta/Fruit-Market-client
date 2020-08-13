<template>
  <main id="content">
    <pm-sidebar />
    <PmListProducts v-if="$route.name === 'ProductsCategory'" />
    <PmHomeProducts v-else-if="$route.name === 'Products'" />
  </main>
</template>

<script>
import PmSidebar from "@/components/layout/Sidebar.vue";
import PmListProducts from "@/components/layout/ListProducts.vue";
import PmHomeProducts from "@/components/layout/HomeProducts.vue";

export default {
  name: "Products",
  components: {
    PmSidebar,
    PmListProducts,
    PmHomeProducts
  }
};
</script>

<style>
/********* Products ********/
#content {
  display: grid;
  height: auto;
  grid-template-columns: 25% 75%;
  background-image: url("../assets/patterns/pattern-white.png");
}

/********* Responsive Design ********/
</style>
