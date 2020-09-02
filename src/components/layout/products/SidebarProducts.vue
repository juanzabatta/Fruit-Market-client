<template>
  <aside id="sidebar">
    <button id="filters">
      Filtros
      <div :class="'container ' + classMenu" @click="showMenuFun()">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </button>

    <div v-show="showMenuFilters">
      <button :class="'buttonFilters ' + active[0]" @click="orderPrice()">
        <p>Precio total</p>
        <span>{{ $store.state.filters.price | arrow }}</span>
      </button>

      <button :class="'buttonFilters ' + active[1]" @click="orderPriceKg()">
        <p>Precio por kilo</p>
        <span>{{ $store.state.filters.priceKg | arrow }}</span>
      </button>

      <button :class="'buttonFilters ' + active[2]" @click="orderOffer()">
        <p>Ofertas</p>
        <span>{{ $store.state.filters.offer | arrow }}</span>
      </button>

      <button :class="'buttonFilters ' + active[3]" @click="orderRatings()">
        <p>Calificaciones</p>
        <span>{{ $store.state.filters.ratings | arrow }}</span>
      </button>

      <button
        :class="'buttonFilters ' + active[4]"
        @click="orderDeliveryTime()"
      >
        <p>Tiempo de entrega</p>
        <span>{{ $store.state.filters.deliveryTime | arrow }}</span>
      </button>
    </div>
  </aside>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "SidebarProducts",
  props: { windowWidth: Number },
  data() {
    return {
      active: ["", "", "", "", ""],
      showMenuFilters: true,
      classMenu: ""
    };
  },
  mounted() {
    this.showMenuFun();
  },
  destroyed() {
    this.filters.price = "none";
    this.filters.priceKg = "none";
    this.filters.offer = "none";
    this.filters.ratings = "none";
    this.filters.deliveryTime = "none";
  },
  computed: {
    filters() {
      return this.$store.state.filters;
    }
  },
  methods: {
    ...mapMutations(["setFilters"]),
    showMenuFun() {
      if (this.windowWidth > 650) {
        this.showMenuFilters = true;
        this.classMenu = "";
      } else {
        if (this.showMenuFilters === true) {
          this.showMenuFilters = false;
          this.classMenu = "";
        } else {
          this.showMenuFilters = true;
          this.classMenu = "change";
        }
      }
    },
    orderPrice() {
      if (this.filters.price === "none") {
        this.filters.price = "asc";
        this.active[0] = "active";
      } else if (this.filters.price === "asc") {
        this.filters.price = "desc";
        this.active[0] = "active";
      } else if (this.filters.price === "desc") {
        this.filters.price = "none";
        this.active[0] = "";
      }

      this.setFilters(this.filters);
    },
    orderPriceKg() {
      if (this.filters.priceKg === "none") {
        this.filters.priceKg = "asc";
        this.active[1] = "active";
      } else if (this.filters.priceKg === "asc") {
        this.filters.priceKg = "desc";
        this.active[1] = "active";
      } else if (this.filters.priceKg === "desc") {
        this.filters.priceKg = "none";
        this.active[1] = "";
      }

      this.setFilters(this.filters);
    },
    orderOffer() {
      if (this.filters.offer === "none") {
        this.filters.offer = "asc";
        this.active[2] = "active";
      } else if (this.filters.offer === "asc") {
        this.filters.offer = "desc";
        this.active[2] = "active";
      } else if (this.filters.offer === "desc") {
        this.filters.offer = "none";
        this.active[2] = "";
      }

      this.setFilters(this.filters);
    },
    orderRatings() {
      if (this.filters.ratings === "none") {
        this.filters.ratings = "asc";
        this.active[3] = "active";
      } else if (this.filters.ratings === "asc") {
        this.filters.ratings = "desc";
        this.active[3] = "active";
      } else if (this.filters.ratings === "desc") {
        this.filters.ratings = "none";
        this.active[3] = "";
      }

      this.setFilters(this.filters);
    },
    orderDeliveryTime() {
      if (this.filters.deliveryTime === "none") {
        this.filters.deliveryTime = "asc";
        this.active[4] = "active";
      } else if (this.filters.deliveryTime === "asc") {
        this.filters.deliveryTime = "desc";
        this.active[4] = "active";
      } else if (this.filters.deliveryTime === "desc") {
        this.filters.deliveryTime = "none";
        this.active[4] = "";
      }

      this.setFilters(this.filters);
    }
  },
  filters: {
    arrow(str) {
      if (str === "asc") {
        return "↑";
      } else if (str === "desc") {
        return "↓";
      } else if (str === "none") {
        return "-";
      }
    }
  },
  watch: {
    windowWidth(newValue, oldValue) {
      if (newValue > 650 && oldValue <= 650) {
        this.showMenuFun();
      } else if (oldValue > 650 && newValue <= 650) {
        this.showMenuFun();
      }
    }
  }
};
</script>

<style scoped lang="scss">
/********* Sidebar ********/
#sidebar {
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  height: 320px;
  margin-top: 4rem;
  width: 100%;
  background-color: transparent;
  border-right: 3px solid #3dbec7;
  padding: 0 5%;

  #filters {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: none;
    align-items: center;
    height: 30px;
    width: 100%;
    min-width: 130px;
    max-width: 250px;
    margin: 5px auto;
    padding: 0px 5px;
    text-transform: uppercase;
    background-color: transparent;
    color: #222;
    cursor: pointer;

    /********* Button menu filter ********/
    .container {
      display: inline-block;
      cursor: pointer;
      height: auto;
      margin: 0;

      .bar1,
      .bar2,
      .bar3 {
        width: 20px;
        height: 3px;
        background-color: #222;
        margin: 3px 0;
        transition: 0.4s;
      }
    }

    .change {
      .bar1 {
        -webkit-transform: rotate(-45deg) translate(-5px, 5px);
        transform: rotate(-45deg) translate(-5px, 5px);
      }
      .bar2 {
        opacity: 0;
      }
      .bar3 {
        -webkit-transform: rotate(45deg) translate(-3px, -4px);
        transform: rotate(45deg) translate(-3px, -4px);
      }
    }
  }

  & > div {
    display: block;
    margin: 10px 0 20px 0;

    .buttonFilters {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 30px;
      width: 100%;
      min-width: 130px;
      max-width: 250px;
      margin: 5px auto;
      background-color: white;
      padding: 0px 5px;
      cursor: pointer;
      border: 1px solid #ccc;
      box-shadow: 0px 0px 5px gainsboro;

      p {
        margin: 0;
        color: #222;
      }

      span {
        text-align: right;
        color: #222;
      }
    }

    .active {
      background-image: linear-gradient(to bottom right, #f4fdff, #ccf2fa);
    }
  }
}

/********* Responsive Design ********/
@media screen and (max-width: 750px) {
  #sidebar {
    margin-top: 7rem;
  }
}
@media screen and (max-width: 750px) {
  #sidebar {
    margin-top: 7rem;
  }
}
@media screen and (max-width: 650px) {
  #sidebar {
    height: auto;
    border: none;

    #filters,
    .buttonFilters {
      width: 100%;
      min-width: 130px;
      max-width: 200px;
    }
  }
}
@media screen and (max-width: 550px) {
  #sidebar {
    margin-top: 8rem;
  }
}
</style>
