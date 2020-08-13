<template>
  <main>
    <h2>Esta es la página de nosotros.</h2>
    <p v-for="(item, index) in productsState" :key="index">{{item}}</p>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "About",
  components: {},
  computed: {
    ...mapState("products", ["productsState"])
  }
};
</script>
