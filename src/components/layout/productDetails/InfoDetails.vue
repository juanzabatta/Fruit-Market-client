<template>
  <div id="information">
    <h2>{{ product.title }}</h2>

    <p>
      <b>Productor:</b>
      {{ product.manufacturer }}
    </p>

    <p>
      <b>Reseñas:&nbsp;</b>
      {{ product.details.ratingsAverage }}
      <img src="@/assets/icons/star.png" alt="Rate" />
      ( {{ product.details.ratings.length }} Reseñas )
    </p>

    <p class="priceOffer">{{ product.price.toFixed(2) | priceFormat }}</p>

    <p v-if="product.offer > 0">
      <span>{{ price | priceFormat }}&nbsp;</span>
      <span class="offer">- {{ product.offer }}%</span>
    </p>

    <p>
      <b>Garantía:</b>
      {{ product.guaranty }} días
    </p>

    <p>
      <b>Tiempo de entrega:</b>
      {{ product.deliveryTime }} días
    </p>

    <p>
      <b>Disponibles:</b>
      {{ product.stock }}
    </p>

    <div>
      <select name="quantity" id="quantity">
        <option v-for="item in product.stock" :key="item" :value="item">{{
          item
        }}</option>
      </select>
      <button id="addToCart">Añadir al carrito</button>
    </div>
  </div>
</template>

<script>
import urlBaseApi from "@/modules/urlBase";

export default {
  name: "InfoDetails",
  props: { product: { type: Object, required: true } },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    price() {
      let x = (this.product.price / (1 - this.product.offer / 100)).toFixed(2);
      return x;
    },
    urlBaseApi() {
      return urlBaseApi + "img/";
    }
  },
  methods: {}
};
</script>

<style lang="scss">
/* ****************** Information ****************/
#information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
  height: 350px;
  overflow: hidden;
  padding: 10px;
  margin: 0 auto;

  h2 {
    color: #222;
  }

  p {
    text-align: left;
    margin: 0;
    line-height: 2rem;

    span {
      font-weight: lighter;
      text-decoration: line-through;
      color: rgb(145, 145, 145);
      font-size: 1rem;
      padding: 0px 5px;
    }

    img {
      height: 1.25rem;
    }

    .offer {
      text-decoration: none;
      color: white;
      background-color: green;
      border-radius: 5px;
    }
  }

  .priceOffer {
    font-size: 1.4rem;
    color: rgb(219, 0, 0);
    font-weight: bold;
  }

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    select {
      width: 50px;
      height: 32px;
      padding: 5px;
      outline: none;
      border-radius: 5px;
      text-align: center;
      color: #206d74;
      border: 2px solid #3d9fa7;
    }

    #addToCart {
      font-size: 0.8rem;
      margin-left: 15px;
      padding: 10px;
      text-decoration: none;
      text-align: center;
      text-transform: uppercase;
      font-weight: 900;
      background-color: #93e21d;
      color: white;
      border-radius: 10px;
      border: 2px solid green;

      &:hover {
        box-shadow: 0px 0px 3px #ccc;
        transform: scale(1.05, 1.05);
        background-color: green;
        border: 2px solid green;
        color: white;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
}

/* ****************** Responsive *****************/
@media screen and (max-width: 740px) {
  #information {
    margin-top: 20px;
    grid-column: 1/3;
    height: auto;
  }
}
@media screen and (max-width: 550px) {
  #information {
    width: 230px;
  }
}
</style>
