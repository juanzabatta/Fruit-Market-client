<template>
  <main class="productDetail" v-if="!error">
    <section id="contentDetails">
      <PmMediaDetails :product="product"></PmMediaDetails>
      <PmInfoDetails :product="product"></PmInfoDetails>
      <PmFeaturesDetails :product="product"></PmFeaturesDetails>
      <PmRatingsDetails :product="product"></PmRatingsDetails>
    </section>
  </main>

  <main class="productDetail" v-else>
    <div id="productError">
      <h3>Error!!</h3>
      <p>No se ha podido cargar la información.</p>
      <router-link to="/">inicio</router-link>
    </div>
  </main>
</template>

<script>
import PmInfoDetails from "@/components/layout/productDetails/InfoDetails.vue";
import PmMediaDetails from "@/components/layout/productDetails/MediaDetails.vue";
import PmFeaturesDetails from "@/components/layout/productDetails/FeaturesDetails.vue";
import PmRatingsDetails from "@/components/layout/productDetails/RatingsDetails.vue";

export default {
  name: "ProductDetail",
  components: {
    PmInfoDetails,
    PmMediaDetails,
    PmFeaturesDetails,
    PmRatingsDetails
  },
  data() {
    return {
      products: [],
      product: {},
      error: true
    };
  },
  mounted() {
    this.getProduct();
  },
  computed: {
    productsStateStore() {
      return this.$store.state.products.productsState;
    }
  },
  methods: {
    getProduct() {
      this.products = this.$store.state.products.productsState;

      this.products.forEach(product => {
        if (product._id === this.$route.params.id) {
          this.product = product;
        }
      });

      if (this.product._id != null || this.product._id != undefined) {
        this.error = false;
      }
    }
  },
  watch: {
    productsStateStore: "getProduct"
  }
};
</script>

<style lang="scss">
.productDetail {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 4rem - 4.2rem);
  height: auto;
  width: 100%;

  /********* Error ********/
  #productError {
    h3 {
      font-size: 3rem;
      color: red;
      font-family: "Kaushan Script";
    }

    p {
      color: black;
      font-size: 1.2rem;
      margin-bottom: 20px;
    }

    a {
      display: block;
      width: 85px;
      margin: auto;
      font-size: 1rem;
      padding: 10px;
      text-decoration: none;
      color: white;
      text-align: center;
      text-transform: uppercase;
      font-weight: 900;
      background-image: url("../assets/patterns/pattern-dark.png");
      background-color: #42b9c2;
      border-radius: 10px;
      letter-spacing: 0.1rem;

      &:hover {
        background-image: none;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }

  /********* Product Detail ********/
  #contentDetails {
    display: grid;
    grid-template-columns: auto 280px;
    height: auto;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  }
}

/* ****************** Responsive *****************/
@media screen and (max-width: 740px) {
  .productDetail #contentDetails {
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto auto;
  }
}
</style>
