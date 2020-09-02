<template>
  <div class="card">
    <picture :class="'cardImg ' + backgroundColor">
      <img
        :src="urlBaseApi + product.img[0]"
        :alt="'Imagen de ' + product.title"
        :title="product.title"
      />
    </picture>

    <div class="cardContent">
      <h3 :title="product.title">{{ product.title }}</h3>

      <div class="price">
        <p class="priceOffer">{{ product.price.toFixed(2) | priceFormat }}</p>

        <p v-if="product.offer > 0">
          <span>{{ price | priceFormat }}&nbsp;</span>
          <span class="offer">- {{ product.offer }}%</span>
        </p>
      </div>

      <p class="description" v-if="windowWidth > 770">
        {{ product.description }}
      </p>

      <div class="details">
        <span title="Calificaciones">
          <img src="@/assets/icons/star.png" alt="Rate" />
          <p class="detailsP">{{ product.details.ratingsAverage }}</p>
        </span>

        <span title="Vistas">
          <img src="@/assets/icons/views.png" alt="Views" />
          <p class="detailsP">{{ product.details.visits }}</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import urlBaseApi from "@/modules/urlBase";

export default {
  props: {
    product: { type: Object, required: true },
    windowWidth: Number
  },
  data() {
    return {
      backgroundColor: ""
    };
  },
  mounted() {
    this.getCategory();
  },
  computed: {
    price() {
      let x = (this.product.price / (1 - this.product.offer / 100)).toFixed(2);
      return x;
    },
    urlBaseApi() {
      return urlBaseApi + "img/";
    }
  },
  methods: {
    getCategory() {
      this.backgroundColor = "";

      switch (this.product.category) {
        case "bananas":
          this.backgroundColor = "BGBananas";
          break;

        case "coconuts":
          this.backgroundColor = "BGCoconut";
          break;

        case "apples":
          this.backgroundColor = "BGApples";
          break;

        case "pears":
          this.backgroundColor = "BGPears";
          break;

        case "pineaples":
          this.backgroundColor = "BGPineaples";
          break;

        case "grapes":
          this.backgroundColor = "BGGrapes";
          break;
      }
    }
  },
  watch: {
    product() {
      this.getCategory();
    }
  }
};
</script>

<style lang="scss">
/********* Cards ********/
.card {
  height: 20.7rem;
  width: 12.5rem;
  padding-bottom: 10px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 1px 3px gray, 0px 0px 4px gainsboro;

  /********* Card image ********/
  .cardImg {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 10rem;

    img {
      display: block;
      width: 90%;
      height: 90%;
      margin: auto;
      object-fit: contain;
    }
  }

  .BGBananas {
    background-color: #ffffb0;
  }
  .BGCoconut {
    background-color: #f8e5d2;
  }
  .BGApples {
    background-color: rgb(255, 206, 206);
  }
  .BGPears {
    background-color: #f1ffa8;
  }
  .BGPineaples {
    background-color: #fff5aa;
  }
  .BGGrapes {
    background-color: #edd5ff;
  }

  /********* Card Description ********/
  .cardContent {
    h3 {
      width: 90%;
      margin: auto;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.9rem;
      color: #206d74;
    }
    /********* Price ********/
    .price {
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      height: 50px;

      p {
        margin: auto;
        color: red;
        text-align: center;
        font-size: 1.6rem;
        font-weight: bold;

        span {
          font-weight: lighter;
          text-decoration: line-through;
          color: #aaa;
          font-size: 1rem;
          padding: 0px 5px;
        }

        .offer {
          text-decoration: none;
          color: white;
          background-color: green;
          border-radius: 5px;
        }
      }

      .priceOffer {
        font-size: 1.2rem;
      }
    }
    /********* Description ********/
    .description {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 90%;
      height: 4rem;
      font-size: 0.8rem;
      line-height: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /********* Details ********/
    .details {
      display: grid;
      grid-template-columns: auto auto;
      height: 24px;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        img {
          height: 20px;
          text-align: right;
        }

        .detailsP {
          text-align: left;
          font-size: 0.8rem;
          padding-left: 5px;
          margin: 0;
        }
      }
    }
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05, 1.05);
  }
}

/********* Responsive Design ********/
@media screen and (max-width: 770px) {
  .card {
    height: 17.5rem;
  }
}
@media screen and (max-width: 550px) {
  .card {
    height: 18rem;

    .cardContent {
      .description {
        font-size: 1rem;
        line-height: 1.2rem;
      }

      .details .detailsP {
        font-size: 1rem;
      }
    }
  }
}
</style>
