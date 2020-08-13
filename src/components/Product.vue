<template>
  <div class="card" :title="product.title">
    <figure class="cardImg">
      <!-- <img :src="'http://localhost:3002/'+product.img[0]" :alt="'Imagen de '+product.title" /> -->
      <img :src="product.img[0]" :alt="'Imagen de '+product.title" />
    </figure>

    <div class="cardContent">
      <h4>{{ product.title }}</h4>

      <div class="price">
        <p class="priceOffer">{{ product.price.toFixed(2) | priceFormat }}</p>

        <p v-if="product.offer > 0">
          <span>{{ price | priceFormat }}&nbsp;</span>
          <span class="offer">- {{ product.offer }}%</span>
        </p>
      </div>

      <p class="description">{{ product.description }}</p>
      <div class="details">
        <span>
          <img src="@/assets/star.png" alt="Rate" />
          <p class="detailsP">{{ product.details.ratingsAverage }}</p>
        </span>
        <span>
          <img src="@/assets/views.png" alt="Views" />
          <p class="detailsP">{{ product.details.visits }}</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true }
  },
  data() {
    return {};
  },
  computed: {
    price() {
      let x = (this.product.price / (1 - this.product.offer / 100)).toFixed(2);
      return x;
    }
  }
};
</script>

<style>
/********* Cards ********/
.card {
  height: 420px;
  width: 250px;
  margin: auto;
  padding-bottom: 10px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 4px gray, 2px -2px 4px gainsboro;
}
.card:hover {
  cursor: pointer;
  transform: scale(1.05, 1.05);
}

/********* Card image ********/
.cardImg {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 250px;
  background-color: whitesmoke;
}
.cardImg img {
  display: block;
  width: 90%;
  height: 90%;
  margin: auto;
}

/********* Card Description ********/
.cardContent h4 {
  width: 90%;
  margin: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.9rem;
  color: black;
}
.cardContent .price {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 50px;
}
.cardContent .price p {
  margin: auto;
  color: red;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
}
.cardContent .price .priceOffer {
  font-size: 1.4rem;
}
.cardContent .price p span {
  font-weight: lighter;
  text-decoration: line-through;
  color: rgb(170, 170, 170);
  font-size: 1rem;
  padding: 0px 5px;
}
.cardContent .price .offer {
  text-decoration: none;
  color: white;
  background-color: green;
  border-radius: 5px;
}
.cardContent .description {
  margin: auto;
  width: 90%;
  font-size: 0.8rem;
  line-height: 1rem;
  height: 4rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

/********* Card Details ********/
.cardContent .details {
  display: grid;
  grid-template-columns: auto auto;
  height: 24px;
}
.cardContent .details span {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.cardContent .details img {
  height: 20px;
  text-align: right;
}
.cardContent .details .detailsP {
  text-align: left;
  font-size: 0.8rem;
  padding-left: 5px;
  margin: 0;
}

/********* Responsive Design ********/
</style>
