<template>
  <section id="contentProductsCategory">
    <h2 :class="bgTitle">{{ title | capitalize }}</h2>

    <div id="listProducts">
      <router-link
        class="cardOfList"
        v-for="p in productsDisplay"
        :key="p.id"
        :to="{ name: 'ProductDetail', params: { id: p._id } }"
      >
        <PmProduct :windowWidth="windowWidth" :product="p"></PmProduct>
      </router-link>
      <p v-show="this.productsDisplay.length < 1">
        No se encontraron resultados
      </p>
    </div>

    <div id="paginations" v-if="this.pagesProducts.length > 1">
      <button v-show="page != 1" @click="prevPageFun()">&lt;</button>

      <button v-show="pageP2 > 0" @click="renderPage(pageP2)">
        {{ pageP2 }}
      </button>

      <button v-show="pageP1 > 0" @click="renderPage(pageP1)">
        {{ pageP1 }}
      </button>

      <button
        id="active"
        v-show="page <= this.pagesProducts.length"
        @click="renderPage(page)"
      >
        {{ page }}
      </button>

      <button
        v-show="pageN1 <= this.pagesProducts.length"
        @click="renderPage(pageN1)"
      >
        {{ pageN1 }}
      </button>

      <button
        v-show="pageN2 <= this.pagesProducts.length"
        @click="renderPage(pageN2)"
      >
        {{ pageN2 }}
      </button>

      <button v-show="page < this.pagesProducts.length" @click="nextPageFun()">
        &gt;
      </button>
    </div>

    <div class="descriptionProducts" v-show="this.products.length > 0">
      <p>{{ descriptionProducts }}</p>
    </div>
  </section>
</template>

<script>
import PmProduct from "@/components/Product.vue";

export default {
  name: "ListProducts",
  components: { PmProduct },
  props: { windowWidth: Number },
  data() {
    return {
      productsForPage: 1,
      productsDisplay: [],
      products: [],
      descriptionProducts:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequuntur deleniti quasi. Fugiat perferendis deleniti veritatis nostrum nemo.",
      pagesProducts: [],
      prevPage: 1,
      nextPage: 2,
      page: 1,
      pageP2: 0,
      pageP1: 0,
      pageN1: 0,
      pageN2: 0,
      category: "",
      title: "error",
      bgTitle: ""
    };
  },
  mounted() {
    this.getProducts();
  },
  computed: {
    productsStateStore() {
      return this.$store.state.products.productsState;
    },
    priceFilterState() {
      return this.$store.state.filters.price;
    },
    priceKgFilterState() {
      return this.$store.state.filters.priceKg;
    },
    offerFilterState() {
      return this.$store.state.filters.offer;
    },
    ratingsFilterState() {
      return this.$store.state.filters.ratings;
    },
    deliveryTimeFilterState() {
      return this.$store.state.filters.deliveryTime;
    }
  },
  methods: {
    getProducts() {
      if (Object.keys(this.$store.state.products.productsState).length !== 0) {
        this.setFilters();
      }
    },
    setFilters() {
      this.category = this.$route.params.category;
      if (
        this.category === "bananas" ||
        this.category === "coconuts" ||
        this.category === "apples" ||
        this.category === "pears" ||
        this.category === "pineaples" ||
        this.category === "grapes"
      ) {
        this.products = this.$store.state.products.productsState
          .filter(this.filterProductsCategory)
          .sort(this.filtersPriceSidebar)
          .sort(this.filtersPriceKgSidebar)
          .sort(this.filtersOfferSidebar)
          .sort(this.filtersRatingsSidebar)
          .sort(this.filtersTimeDeliverySidebar);

        this.title = this.category;
      }
      this.responsive();
      this.getTitle();
      this.numPages();
      this.renderPage(1);
    },
    getTitle() {
      this.bgTitle = this.category;

      switch (this.category) {
        case "bananas":
          this.title = "cambures";
          break;
        case "coconuts":
          this.title = "cocos";
          break;
        case "apples":
          this.title = "manzanas";
          break;
        case "pears":
          this.title = "peras";
          break;
        case "pineaples":
          this.title = "piñas";
          break;
        case "grapes":
          this.title = "uvas";
          break;
        default:
          this.title = "error";
          break;
      }
    },
    filterProductsCategory(product) {
      return product.category === this.category;
    },
    filtersPriceSidebar(a, b) {
      if (this.priceFilterState === "asc") {
        return a.price - b.price;
      } else if (this.priceFilterState === "desc") {
        return b.price - a.price;
      } else {
        return false;
      }
    },
    filtersPriceKgSidebar(a, b) {
      if (this.priceKgFilterState === "asc") {
        return a.priceKg - b.priceKg;
      } else if (this.priceKgFilterState === "desc") {
        return b.priceKg - a.priceKg;
      } else {
        return false;
      }
    },
    filtersOfferSidebar(a, b) {
      if (this.offerFilterState === "asc") {
        return a.offer - b.offer;
      } else if (this.offerFilterState === "desc") {
        return b.offer - a.offer;
      } else {
        return false;
      }
    },
    filtersRatingsSidebar(a, b) {
      if (this.ratingsFilterState === "asc") {
        return a.details.ratingsAverage - b.details.ratingsAverage;
      } else if (this.ratingsFilterState === "desc") {
        return b.details.ratingsAverage - a.details.ratingsAverage;
      } else {
        return false;
      }
    },
    filtersTimeDeliverySidebar(a, b) {
      if (this.deliveryTimeFilterState === "asc") {
        return a.deliveryTime - b.deliveryTime;
      } else if (this.deliveryTimeFilterState === "desc") {
        return b.deliveryTime - a.deliveryTime;
      } else {
        return false;
      }
    },
    numPages() {
      const numProducts = this.products.length;
      this.pagesProducts = [];

      if (numProducts != 0) {
        let numPages = Math.ceil(numProducts / this.productsForPage);
        for (let i = 1; i <= numPages; i++) {
          this.pagesProducts.push(i);
        }
      }
    },
    prevPageFun() {
      this.prevPage = 1;

      if (this.page - 1 > 0) {
        this.prevPage = this.page - 1;
        this.page--;
      }

      this.renderPage(this.prevPage);
    },
    nextPageFun() {
      this.nextPage = this.pagesProducts.length;

      if (this.page + 1 <= this.pagesProducts.length) {
        this.nextPage = this.page + 1;
        this.page++;
      }
      this.renderPage(this.nextPage);
    },
    renderPage(page) {
      this.productsDisplay = [];
      for (
        let i = (page - 1) * this.productsForPage;
        i < page * this.productsForPage;
        i++
      ) {
        if (isNaN(this.products[i]) && this.products[i] != undefined) {
          this.productsDisplay.push(this.products[i]);
        }
      }
      this.pageP2 = page - 2;
      this.pageP1 = page - 1;
      this.page = page;
      this.pageN1 = page + 1;
      this.pageN2 = page + 2;
    },
    responsive() {
      const listProducts = document.querySelector("#listProducts");
      let rem;
      if (this.windowWidth <= 550) {
        rem = 12;
      } else if (this.windowWidth <= 770) {
        rem = 14;
      } else {
        rem = 16;
      }
      this.productsForPage =
        Math.floor((listProducts.clientWidth + 20) / (rem * 12.5 + 20)) * 4;
      this.numPages();
      this.renderPage(this.page);
    }
  },
  filters: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  },
  watch: {
    productsStateStore() {
      if (Object.keys(this.products).length === 0) {
        this.getProducts();
      }
    },
    priceFilterState: "setFilters",
    priceKgFilterState: "setFilters",
    offerFilterState: "setFilters",
    ratingsFilterState: "setFilters",
    deliveryTimeFilterState: "setFilters",
    $route: "getProducts",
    windowWidth: "responsive"
  }
};
</script>

<style lang="scss">
/********* Content Products ********/
#contentProductsCategory {
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 3rem;
  min-height: calc(100vh - 4rem - 4.2rem);
  width: 100%;

  h2 {
    font-size: 1.6rem;
    padding: 0.2rem;
    margin: 20px auto;
    width: 80%;
    max-width: 500px;
    color: white;
    border-radius: 50px;
    margin-bottom: 0;
    box-shadow: 1px 1px 3px gray, 0px 0px 4px gainsboro;
  }
  .bananas {
    background-image: linear-gradient(to bottom right, #ffff3f, #dddf00);
    color: black;
  }
  .coconuts {
    background-image: linear-gradient(to bottom right, #e6b8a2, #774936);
  }
  .apples {
    background-image: linear-gradient(to bottom right, rgb(255, 142, 97), red);
  }
  .pears {
    background-image: linear-gradient(to bottom right, #aacc00, #55a630);
  }
  .pineaples {
    background-image: linear-gradient(to bottom right, #ffe94e, #fdb833);
    color: black;
  }
  .grapes {
    background-image: linear-gradient(to bottom right, #c77dff, #5a189a);
  }

  /********* Products ********/
  #listProducts {
    height: auto;
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 50px;
    justify-content: space-around;
    width: auto;
    margin: 20px;

    & > p {
      text-align: center;
      width: 60%;
      padding: 10px;
      margin: 20px auto;
      background-color: white;
      box-shadow: 2px 2px 4px gray, 2px -2px 4px gainsboro;
      border-radius: 10px;
      color: #206d74;
    }

    a {
      width: 12.5rem;
      text-decoration: none;
    }
  }

  /********* Paginations ********/
  #paginations {
    height: 40px;
    margin: 20px;

    button {
      background-color: black;
      color: white;
      padding: 4px 10px;
      margin: 2px;
      border: 2px solid black;
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        background-color: #42b9c2;
      }
    }

    #active {
      background-color: #42b9c2;

      &:hover {
        background-color: #3d9fa7;
      }
    }
  }

  /********* Description of products ********/
  .descriptionProducts {
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
  #contentProductsCategory {
    padding-top: 3rem;

    #paginations button:hover {
      background-color: black;
    }
  }
}
@media screen and (max-width: 750px) {
  #contentProductsCategory {
    padding-top: 6rem;
  }
}
@media screen and (max-width: 650px) {
  #contentProductsCategory {
    grid-column: 1/2;
    padding-top: 0px;
  }
}
</style>
