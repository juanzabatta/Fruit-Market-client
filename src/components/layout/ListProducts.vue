<template>
  <section id="contentProducts">
    <h1>{{ title | capitalize }}</h1>

    <div id="listProducts">
      <router-link
        v-for="p in productsDisplay"
        :key="p.id"
        :to="{ name: 'ProductDetail', params: {id: p._id} }"
      >
        <pm-product :product="p" />
      </router-link>
      <p v-show="this.productsDisplay.length < 1">No se encontraron resultados</p>
    </div>

    <div id="paginations">
      <button v-show="page != 1" @click="prevPageFun()">&lt;</button>

      <button v-show="pageP2 >0" @click="renderPage( pageP2)">{{ pageP2 }}</button>

      <button v-show="pageP1 >0" @click="renderPage(pageP1)">{{ pageP1 }}</button>

      <button
        id="active"
        v-show="page <=this.pagesProducts.length && this.pagesProducts.length > 1"
        @click="renderPage(page)"
      >{{ page }}</button>

      <button v-show="pageN1 <=this.pagesProducts.length" @click="renderPage(pageN1)">{{ pageN1 }}</button>

      <button v-show="pageN2 <=this.pagesProducts.length" @click="renderPage(pageN2)">{{ pageN2 }}</button>

      <button v-show="page <this.pagesProducts.length" @click="nextPageFun()">&gt;</button>
    </div>

    <div class="descriptionProducts" v-show="this.products.length > 0">
      <p>{{ descriptionProducts }}</p>
    </div>
  </section>
</template>

<script>
import PmProduct from "@/components/Product.vue";

// import { mapState } from "vuex";

export default {
  name: "ListProducts",
  components: {
    PmProduct
  },
  data() {
    return {
      productsForPage: 20,
      productsDisplay: [],
      products: [],
      descriptionProducts:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequuntur deleniti quasi. Fugiat perferendis deleniti veritatis nostrum nemo.",
      title: "Error",
      pagesProducts: [],
      prevPage: 1,
      nextPage: 2,
      page: 1,
      pageP2: 0,
      pageP1: 0,
      pageN1: 0,
      pageN2: 0,
      category: ""
    };
  },
  mounted() {
    this.getProducts();
    this.numPages();
    this.renderPage(1);
  },
  computed: {
    productsStateStore() {
      return this.$store.state.products.productsState;
    }
    // ...mapState("products", ["productsState"])
  },
  methods: {
    getProducts() {
      this.category = this.$route.params.category;

      if (
        this.category === "bananas" ||
        this.category === "coconuts" ||
        this.category === "apples" ||
        this.category === "pears" ||
        this.category === "pineaples" ||
        this.category === "grapes"
      ) {
        this.products = this.$store.state.products.productsState;
        // this.products = this.productsState.filter(this.filterProductsCategory);
        this.title = this.category;
      }
      this.numPages();
      this.renderPage(1);
    },
    filterProductsCategory(product) {
      return product.category === this.category;
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
    }
  },
  filters: {
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  },
  watch: {
    productsStateStore() {
      this.getProducts();
    },
    $route: "getProducts"
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
#contentProducts h1 {
  font-size: 2rem;
  margin: 20px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(1, 0, 68),
    transparent
  );
  color: white;
}

/********* Products ********/
#listProducts {
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 50px 10px;
  margin: 20px;
}
#listProducts > p {
  grid-column: 1 / 5;
  text-align: center;
  width: 60%;
  padding: 10px;
  margin: 20px auto;
  background-color: white;
  box-shadow: 2px 2px 4px gray, 2px -2px 4px gainsboro;
  border-radius: 10px;
}
#listProducts a {
  text-decoration: none;
}

/********* Paginations ********/
#paginations {
  height: 40px;
  margin: 20px;
}
#paginations button {
  background-color: black;
  color: white;
  padding: 4px 10px;
  margin: 2px;
  border: 2px solid #555555;
  border-radius: 10px;
  cursor: pointer;
}
#paginations button:hover {
  background-color: #42b9c2;
}
#paginations #active {
  background-color: #42b9c2;
}
#paginations #active:hover {
  background-color: #3d9fa7;
}

/********* Description of products ********/
.descriptionProducts {
  width: 60%;
  padding: 10px;
  margin: 20px auto;
  background-color: white;
  box-shadow: 2px 2px 4px gray, 2px -2px 4px gainsboro;
  border-radius: 10px;
}
.descriptionProducts p {
  font-size: 0.8rem;
  line-height: 1rem;
}

/********* Responsive Design ********/
</style>
