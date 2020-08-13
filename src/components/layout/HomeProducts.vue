<template>
  <section id="contentProducts">
    <h3>Mejores ofertas</h3>

    <div id="topOffers" class="container">
      <router-link
        v-for="p in topOffers"
        :key="p.id"
        :to="{ name: 'ProductDetail', params: {id: p._id} }"
      >
        <pm-product :product="p" />
      </router-link>
    </div>

    <h3>Lo más popular</h3>
    <div id="topVisiteds" class="container">
      <router-link
        v-for="p in topVisited"
        :key="p.id"
        :to="{ name: 'ProductDetail', params: {id: p._id} }"
      >
        <pm-product :product="p" />
      </router-link>
    </div>

    <h3>Mejores productos</h3>
    <div id="topQuality" class="container">
      <router-link
        v-for="p in topQuality"
        :key="p.id"
        :to="{ name: 'ProductDetail', params: {id: p._id} }"
      >
        <pm-product :product="p" />
      </router-link>
    </div>

    <h3>Lo más vendido</h3>
    <div id="topSelling" class="container">
      <router-link
        v-for="p in topSelling"
        :key="p.id"
        :to="{ name: 'ProductDetail', params: {id: p._id} }"
      >
        <pm-product :product="p" />
      </router-link>
    </div>

    <div id="descriptionProducts">
      <p>{{ descriptionProducts }}</p>
    </div>
  </section>
</template>

<script>
import PmProduct from "@/components/Product.vue";

// import { mapState } from "vuex";

export default {
  name: "HomeProducts",
  components: {
    PmProduct
  },
  data() {
    return {
      topOffers: [],
      topVisited: [],
      topSelling: [],
      topQuality: [],
      products: [],
      descriptionProducts:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequuntur deleniti quasi. Fugiat perferendis deleniti veritatis nostrum nemo."
    };
  },
  async mounted() {
    await this.getProducts();
  },
  computed: {
    productsStateStore() {
      return this.$store.state.products.productsState;
    }
    // ...mapState("products", ["productsState"])
  },
  methods: {
    getProducts() {
      this.products = this.$store.state.products.productsState;
      // this.products = this.productsState;

      this.topOffers = this.products.sort(this.orderByOffers).slice(0, 4);
      this.topVisited = this.products.sort(this.orderByVisited).slice(0, 4);
      this.topSelling = this.products.sort(this.orderBySellings).slice(0, 4);
      this.topQuality = this.products.sort(this.orderByQuality).slice(0, 4);
    },
    orderByOffers(a, b) {
      return b.offer - a.offer;
    },
    orderByVisited(a, b) {
      return b.details.visits - a.details.visits;
    },
    orderBySellings(a, b) {
      return b.details.sold - a.details.sold;
    },
    orderByQuality(a, b) {
      return b.details.ratings.average - a.details.ratings.average;
    }
  },
  watch: {
    productsStateStore() {
      setTimeout(() => {
        this.getProducts();
      }, 500);
    }
  }
};
</script>

<style>
/********* Content Products ********/
#contentProducts {
  margin: auto;
  height: auto;
  min-height: 650px;
  width: 100%;
  box-shadow: 2px 2px 4px gray inset, 2px -2px 4px gainsboro inset;
}
#contentProducts h3 {
  font-size: 2rem;
  margin: 20px;
  background-image: linear-gradient(to right, transparent, blue, transparent);
  color: white;
  border-radius: 100%;
}

/********* Products ********/
.container {
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 50px 10px;
  margin: 20px;
  margin-bottom: 40px;
}
.container > p {
  grid-column: 1 / 5;
  text-align: center;
}
.container a {
  text-decoration: none;
}

/********* Description of products ********/
#descriptionProducts {
  width: 60%;
  padding: 10px;
  margin: 20px auto;
  margin-top: 50px;
  background-color: white;
  box-shadow: 2px 2px 4px gray, 2px -2px 4px gainsboro;
  border-radius: 10px;
}
#descriptionProducts p {
  font-size: 0.8rem;
  line-height: 1rem;
}

/********* Responsive Design ********/
</style>
