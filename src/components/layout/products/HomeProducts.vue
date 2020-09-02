<template>
  <section id="contentProducts">
    <h2 class="topTitle">Mejores ofertas</h2>

    <div id="topOffers" class="container">
      <router-link
        v-for="p in topOffers"
        :key="p.id"
        :to="{ name: 'ProductDetail', params: { id: p._id } }"
      >
        <PmProduct :windowWidth="windowWidth" :product="p"></PmProduct>
      </router-link>
    </div>

    <h2 class="topTitle">Lo más popular</h2>
    <div id="topVisiteds" class="container">
      <router-link
        v-for="p in topVisited"
        :key="p.id"
        :to="{ name: 'ProductDetail', params: { id: p._id } }"
      >
        <PmProduct :windowWidth="windowWidth" :product="p"></PmProduct>
      </router-link>
    </div>

    <h2 class="topTitle">Mejores productos</h2>
    <div id="topQuality" class="container">
      <router-link
        v-for="p in topQuality"
        :key="p.id"
        :to="{ name: 'ProductDetail', params: { id: p._id } }"
      >
        <PmProduct :windowWidth="windowWidth" :product="p"></PmProduct>
      </router-link>
    </div>

    <h2 class="topTitle">Lo más vendido</h2>
    <div id="topSelling" class="container">
      <router-link
        v-for="p in topSelling"
        :key="p.id"
        :to="{ name: 'ProductDetail', params: { id: p._id } }"
      >
        <PmProduct :windowWidth="windowWidth" :product="p"></PmProduct>
      </router-link>
    </div>

    <div id="descriptionProducts">
      <p>{{ descriptionProducts }}</p>
    </div>
  </section>
</template>

<script>
import PmProduct from "@/components/Product.vue";

export default {
  name: "HomeProducts",
  components: {
    PmProduct
  },
  props: { windowWidth: Number },
  data() {
    return {
      topOffers: [],
      topVisited: [],
      topSelling: [],
      topQuality: [],
      products: [],
      productsForTop: 1,
      descriptionProducts:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequuntur deleniti quasi. Fugiat perferendis deleniti veritatis nostrum nemo."
    };
  },
  mounted() {
    this.getProducts();
  },
  computed: {
    productsStateStore() {
      return this.$store.state.products.productsState;
    }
  },
  methods: {
    getProducts() {
      if (Object.keys(this.$store.state.products.productsState).length !== 0) {
        this.products = this.$store.state.products.productsState;
        this.responsive();
        this.setFilters();
      }
    },
    setFilters() {
      this.topOffers = this.products
        .sort(this.orderByOffers)
        .slice(0, this.productsForTop);
      this.topVisited = this.products
        .sort(this.orderByVisited)
        .slice(0, this.productsForTop);
      this.topSelling = this.products
        .sort(this.orderBySellings)
        .slice(0, this.productsForTop);
      this.topQuality = this.products
        .sort(this.orderByQuality)
        .slice(0, this.productsForTop);
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
      return b.details.ratingsAverage - a.details.ratingsAverage;
    },
    responsive() {
      const containerProducts = document.querySelector(".container");

      let rem;
      if (this.windowWidth <= 550) {
        rem = 12;
      } else if (this.windowWidth <= 770) {
        rem = 14;
      } else {
        rem = 16;
      }

      this.productsForTop = Math.floor(
        (containerProducts.clientWidth + 20) / (rem * 12.5 + 20)
      );
      this.setFilters();
    }
  },
  watch: {
    productsStateStore() {
      if (Object.keys(this.products).length === 0) {
        this.getProducts();
      }
    },
    windowWidth: "responsive"
  }
};
</script>

<style lang="scss">
/********* Content Products ********/
#contentProducts {
  grid-column: 1/3;
  margin: auto;
  height: auto;
  padding-top: 3rem;
  min-height: calc(100vh - 4rem - 4.2rem);
  width: 100%;

  .topTitle {
    font-size: 1.6rem;
    padding: 0.2rem;
    margin: 20px auto;
    width: 80%;
    max-width: 500px;
    background-image: linear-gradient(to bottom right, #40cbd4, #3d9fa7);
    color: white;
    border-radius: 50px;
    box-shadow: 1px 1px 3px gray, 0px 0px 4px gainsboro;
  }

  /********* Products ********/
  .container {
    height: 20.7rem;
    display: flex;
    flex-wrap: wrap;
    gap: 50px 20px;
    justify-content: space-around;
    width: auto;
    margin: 20px;

    a {
      width: 12.5rem;
      text-decoration: none;
    }
  }

  /********* Description of products ********/
  #descriptionProducts {
    width: 60%;
    padding: 10px;
    margin: 20px auto;
    margin-top: 3.1rem;
    background-color: white;
    box-shadow: 1px 1px 3px gray, 0px 0px 4px gainsboro;
    border-radius: 10px;

    p {
      font-size: 12px;
      line-height: 14px;
    }
  }
}

/********* Responsive Design ********/
@media screen and (max-width: 1000px) {
  #contentProducts {
    padding-top: 3rem;
  }
}
@media screen and (max-width: 770px) {
  #contentProducts .container {
    height: 17.5rem;
  }
}
@media screen and (max-width: 750px) {
  #contentProducts {
    padding-top: 6rem;
  }
}
@media screen and (max-width: 550px) {
  #contentProducts {
    padding-top: 7rem;

    .container {
      height: 18rem;
    }
  }
}
@media screen and (max-width: 400px) {
  #contentProducts {
    .topTitle {
      font-size: 1.3rem;
    }

    #descriptionProducts {
      width: 80%;
      margin-top: 2rem;
    }
  }
}
@media screen and (max-width: 300px) {
  #contentProducts .topTitle {
    font-size: 1.1rem;
  }
}
</style>
