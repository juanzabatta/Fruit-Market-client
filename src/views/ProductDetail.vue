<template>
  <main class="productDetail" v-if="!error">
    <section id="contentDetails">
      <div id="barImgs">
        <!-- <img
          v-for="(i,index) in product.img"
          :key="index"
          :src="'http://localhost:3002/'+i"
          :alt="product.title"
          :title="product.title"
          :class="imgActive[index]"
          @click="changeIndex(index)"
        />-->
        <img
          v-for="(i,index) in product.img"
          :key="index"
          :src="i"
          :alt="product.title"
          :title="product.title"
          :class="imgActive[index]"
          @click="changeIndex(index)"
        />
      </div>

      <div id="imgProduct">
        <div id="imgSelected">
          <img :src="'http://localhost:3002/'+product.img[imgIndex]" alt="asd" />
        </div>

        <div id="directions">
          <button id="btnPrev" @click.prevent="goToImage(-1)" title="Anterior">&lt;</button>
          <button id="btnFullScreen" @click.prevent="openFullscreen()"></button>
          <button id="btnNext" @click.prevent="goToImage(1)" title="Siguiente">&gt;</button>
        </div>
      </div>

      <div id="information">
        <h2>{{ product.title }}</h2>

        <p>
          <strong>Productor:</strong>
          {{ product.manufacturer }}
        </p>

        <p>
          <strong>Reseñas:&nbsp;</strong>
          {{ product.details.ratingsAverage }}
          <img src="@/assets/star.png" alt="Rate" />
          ( {{ product.details.ratings.length }} Reseñas )
        </p>

        <p class="priceOffer">{{ product.price.toFixed(2) | priceFormat }}</p>

        <p v-if="product.offer > 0">
          <span>{{ price | priceFormat }}&nbsp;</span>
          <span class="offer">- {{ product.offer }}%</span>
        </p>

        <p>
          <strong>Garantía:</strong>
          {{ product.guaranty }} días
        </p>

        <p>
          <strong>Tiempo de entrega:</strong>
          {{ product.deliveryTime }} días
        </p>

        <p>
          <strong>Disponibles:</strong>
          {{ product.stock }}
        </p>

        <select name="quantity" id="quantity">
          <option v-for="item in product.stock" :key="item" :value="item">{{ item }}</option>
        </select>
        <button id="addToCart">Añadir al carrito</button>
      </div>
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
import { mapState } from "vuex";

export default {
  name: "ProductDetail",
  components: {},
  data() {
    return {
      products: [],
      product: {},
      error: true,
      imgActive: [],
      imgIndex: 0
    };
  },
  async mounted() {
    await this.getProduct();
  },
  computed: {
    ...mapState("products", ["productsState"]),
    price() {
      let x = (this.product.price / (1 - this.product.offer / 100)).toFixed(2);
      return x;
    }
  },
  methods: {
    getProduct() {
      this.products = this.productsState;

      this.products.forEach(product => {
        if (product._id === this.$route.params.id) {
          this.product = product;
        }
      });

      if (this.product._id != null || this.product._id != undefined) {
        this.error = false;
      }

      for (let index = 0; index < this.product.img.length; index++) {
        this.imgActive[index] = "";
      }

      this.imgActive[0] = "imgActive";
    },
    changeIndex(index) {
      this.imgIndex = index;

      this.imgActive.forEach((element, index) => {
        element = "";
        this.imgActive[index] = element;
      });

      this.imgActive[index] = "imgActive";
    },
    goToImage(n) {
      if (
        (this.imgIndex === 0 && n == -1) ||
        (this.imgIndex === this.product.img.length - 1 && n === 1)
      ) {
        this.changeIndex(this.imgIndex);
      } else {
        this.changeIndex((this.imgIndex += n));
      }
    },
    openFullscreen() {
      const imgSelected = document.getElementById("imgProduct");

      if (imgSelected.requestFullscreen) {
        imgSelected.requestFullscreen();
      } else if (imgSelected.mozRequestFullScreen) {
        /* Firefox */
        imgSelected.mozRequestFullScreen();
      } else if (imgSelected.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        imgSelected.webkitRequestFullscreen();
      } else if (imgSelected.msRequestFullscreen) {
        /* IE/Edge */
        imgSelected.msRequestFullscreen();
      }
    }
  }
};
</script>

<style>
.productDetail {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 4rem - 4.2rem);
  min-height: 510px;
  box-shadow: 2px 2px 4px gray inset, 2px -2px 4px gainsboro inset;
}

/********* Error ********/
#productError h3 {
  font-size: 3rem;
  color: red;
  font-family: "Kaushan Script";
}
#productError p {
  color: black;
  font-size: 1.2rem;
  margin-bottom: 20px;
}
#productError a {
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
}
#productError a:hover {
  background-image: none;
  text-decoration: none;
  cursor: pointer;
}

/********* Product Detail ********/
#contentDetails {
  display: grid;
  grid-template-columns: 25% 50% 25%;
  height: 500px;
  width: 100%;
  background-color: white;
}
#contentDetails #imgProduct {
  grid-column: 2/3;
  width: 600px;
  height: 300px;
  overflow: hidden;
  padding: 20px;
  margin: auto;
  background-color: white;
}
#contentDetails #imgProduct #imgSelected {
  height: 100%;
  width: 100%;
  margin: auto;
}
#contentDetails #imgProduct #imgSelected img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  vertical-align: bottom;
  transition: all 3s;
}
/* Chrome, Safari and Opera syntax */
#contentDetails #imgProduct:-webkit-full-screen #imgSelected {
  width: 100%;
}
/* Firefox syntax */
#contentDetails #imgProduct:-moz-full-screen #imgSelected {
  width: 100%;
}
/* IE/Edge syntax */
#contentDetails #imgProduct:-ms-fullscreen #imgSelected {
  width: 100%;
}
/* Standard syntax */
#contentDetails #imgProduct:fullscreen #imgSelected {
  width: 100%;
}

/* **************** Control de imagenes ***************/
#contentDetails #imgProduct #directions {
  width: 100%;
  height: 100%;
  position: relative;
  top: -100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#contentDetails #imgProduct #directions button {
  display: flex;
  height: 100%;
  background-color: transparent;
  border: none;
}
#contentDetails #imgProduct #directions #btnPrev,
#contentDetails #imgProduct #directions #btnNext {
  justify-content: center;
  align-items: center;
  width: 15%;
  color: gainsboro;
  font-size: 7rem;
  cursor: pointer;
}
#contentDetails #imgProduct #directions #btnFullScreen {
  width: 70%;
  cursor: zoom-in;
}
#contentDetails #imgProduct #directions #btnPrev:hover,
#contentDetails #imgProduct #directions #btnNext:hover {
  color: gray;
}

/* Chrome, Safari and Opera syntax */
#contentDetails #imgProduct:-webkit-full-screen #directions #btnPrev,
#contentDetails #imgProduct:-webkit-full-screen #directions #btnNext {
  width: 10%;
}
#contentDetails #imgProduct:-webkit-full-screen #directions #btnFullScreen {
  width: 80%;
  cursor: auto;
}
/* Firefox syntax */
#contentDetails #imgProduct:-moz-full-screen #directions #btnPrev,
#contentDetails #imgProduct:-moz-full-screen #directions #btnNext {
  width: 10%;
}
#contentDetails #imgProduct:-moz-full-screen #directions #btnFullScreen {
  width: 80%;
  cursor: auto;
}
/* IE/Edge syntax */
#contentDetails #imgProduct:-ms-fullscreen #directions #btnPrev,
#contentDetails #imgProduct:-ms-fullscreen #directions #btnNext {
  width: 10%;
}
#contentDetails #imgProduct:-ms-fullscreen #directions #btnFullScreen {
  width: 80%;
  cursor: auto;
}
/* Standard syntax */
#contentDetails #imgProduct:fullscreen #directions #btnPrev,
#contentDetails #imgProduct:fullscreen #directions #btnNext {
  width: 10%;
}
#contentDetails #imgProduct:fullscreen #directions #btnFullScreen {
  width: 80%;
  cursor: auto;
}

/* **************** Barra de imagenes **************/
#contentDetails #barImgs {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 70vh;
  min-height: 500px;
  padding: 20px;
  background-color: rgb(150, 150, 150);
  border-radius: 0 0 20px 0;
  box-shadow: 2px 2px 4px #555555 inset, 2px -2px 4px #555555 inset,
    2px 2px 4px gray;
}
#contentDetails #barImgs img {
  height: calc((100% - 40px) / 3);
  background-color: white;
  width: auto;
  margin: 10px;
  object-fit: contain;
  cursor: pointer;
  opacity: 0.8;
  transition: all 300ms;
  border: 1px dashed yellow;
}
#contentDetails #barImgs .imgActive {
  opacity: 1;
  transform: scale(1.1, 1.1);
  border: 3px solid black;
}

/* ****************** Information ****************/
#contentDetails #information {
  width: 80%;
  height: 350px;
  overflow: hidden;
  padding: 20px;
  margin: auto;
}
#contentDetails #information p {
  text-align: left;
  margin: 0;
  line-height: 2rem;
}
#contentDetails #information .priceOffer {
  font-size: 1.4rem;
  color: red;
  font-weight: bold;
}
#contentDetails #information p span {
  font-weight: lighter;
  text-decoration: line-through;
  color: rgb(170, 170, 170);
  font-size: 1rem;
  padding: 0px 5px;
}
#contentDetails #information .offer {
  text-decoration: none;
  color: white;
  background-color: green;
  border-radius: 5px;
}
#contentDetails #information img {
  height: 1.25rem;
}
#contentDetails #information select {
  width: 50px;
  height: 32px;
  padding: 5px;
  outline: none;
  border-radius: 5px;
  text-align: center;
}
#contentDetails #information #addToCart {
  font-size: 0.8rem;
  margin-left: 15px;
  padding: 10px;
  text-decoration: none;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  background-color: rgb(147, 226, 29);
  border-radius: 10px;
  border: 2px solid green;
}
#contentDetails #information #addToCart:hover {
  box-shadow: 0px 0px 5px gray;
  transform: scale(1.05, 1.05);
  background-color: green;
  color: white;
  text-decoration: none;
  cursor: pointer;
}
/* ****************** Responsive ****************
*/
</style>
