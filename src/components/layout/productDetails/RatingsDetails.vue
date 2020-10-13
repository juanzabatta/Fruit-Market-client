<template>
  <div id="ratingsDetails">
    <div v-if="false">
      <p>
        <b>Su calificación</b>
      </p>
      <p>Inicie sesión para calificar</p>
      <star-rating
        v-model="rating"
        @rating-selected="setRating"
        :increment="0.1"
        :max-rating="5"
        :inline="true"
        inactive-color="#d8d8d8"
        active-color="#ffd055"
        :glow="2.5"
        glow-color="#ff8c00"
        :star-size="30"
      ></star-rating>
    </div>

    <div>
      <p>
        <b>Calificación global</b>
      </p>
      <star-rating
        v-model="ratingsAverage"
        :increment="0.1"
        :max-rating="5"
        :read-only="true"
        :inline="true"
        inactive-color="#d8d8d8"
        active-color="#ffd055"
        :glow="2.5"
        glow-color="#ff8c00"
        :star-size="30"
      ></star-rating>
    </div>

    <div id="comments">
      <p>
        <b>Comentarios</b>
      </p>

      <div v-if="comments.length > 0">
        <div class="cardComment" v-for="item in comments" :key="item.userID">
          <div class="headComment">
            <star-rating
              class="starRateComment"
              v-model="score"
              :increment="0.1"
              :max-rating="5"
              :read-only="true"
              :inline="true"
              :show-rating="false"
              inactive-color="#206d74"
              active-color="#ffd055"
              :glow="1"
              glow-color="#ff8c00"
              :star-size="10"
            ></star-rating>
            <p>{{ item.userName }}</p>
          </div>

          <div class="bodyComment">
            <p>{{ item.message }}</p>

            <p class="dataRate">
              <span class="dataRateSpan">{{ item.date }}</span>
            </p>
          </div>
        </div>
      </div>

      <div v-else>
        <p>Se la primera persona en comentar.</p>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "RatingsDetails",
  props: { product: { type: Object, required: true } },
  components: { StarRating },
  data() {
    return { rating: 0, comments: [] };
  },
  mounted() {
    this.setFilters();
  },
  computed: {
    ratingsAverage() {
      return Number(this.product.details.ratingsAverage);
    },
    productRating() {
      return this.product.details.ratings;
    },
    score() {
      return Number(this.product.details.ratings[0].score);
    }
  },
  methods: {
    setRating(rating) {
      this.rating = rating;
      console.log(this.rating);
    },
    setFilters() {
      this.comments = this.productRating.sort(this.orderByDate).slice(0, 5);
    },
    orderByDate(a, b) {
      return b.date - a.date;
    }
  }
};
</script>

<style scoped lang="scss">
/* ****************** Rating ****************/
#ratingsDetails {
  display: flex;
  flex-direction: column;
  width: 270px;
  height: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  overflow: hidden;

  & > div {
    margin: 0.6rem 0;

    b,
    p {
      color: #555;
    }
  }

  #comments {
    padding: 4%;

    /* ****************** Cards comments ****************/
    .cardComment {
      border: 1px solid #3d9fa7;
      background-color: white;
      box-shadow: 0px 0px 5px #ccf2fa;

      .headComment {
        display: flex;
        flex-direction: row;
        height: 1.3rem;
        width: 100%;
        padding: 0 5px;
        justify-content: space-between;
        background-image: linear-gradient(to bottom right, #f4fdff, #ccf2fa);
        border-bottom: 1px solid #3d9fa7;

        .starRateComment {
          width: 70px;
        }

        p {
          padding: 0;
          margin: 0;
          color: #206d74;
        }
      }

      .bodyComment {
        padding: 0 5px;

        .dataRate {
          text-align: right;
          padding: 0;
          margin: 0;

          .dataRateSpan {
            font-size: 0.7rem;
            color: #206d74;
          }
        }
      }
    }
  }
}

/********* Responsive Design ********/
@media screen and (max-width: 740px) {
  #ratingsDetails {
    width: 80%;
    margin: auto;
    grid-column: 1/3;
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 550px) {
  #ratingsDetails {
    p {
      font-size: 1.1rem;
    }

    #comments .cardComment {
      .headComment {
        height: 1.5rem;
      }

      .bodyComment .dataRate .dataRateSpan {
        font-size: 1rem;
      }
    }
  }
}
</style>
