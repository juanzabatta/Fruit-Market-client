<template>
  <div id="featuresDetails">
    <div class="tab">
      <button
        :class="'tablinks ' + classActive[0]"
        @click="showTabContent('description')"
      >
        Descripción
      </button>

      <button
        :class="'tablinks ' + classActive[1]"
        @click="showTabContent('features')"
      >
        Características
      </button>

      <button
        :class="'tablinks ' + classActive[2]"
        @click="showTabContent('additional')"
      >
        Adicionales
      </button>
    </div>

    <!-- Tab content -->
    <div class="tabcontent" v-show="showDescription">
      <p>{{ product.description }}</p>
    </div>

    <div class="tabcontent" v-show="showFeatures">
      <div class="featuresDetails">
        <p>
          <b>Código</b>
        </p>
        <p>{{ product.code }}</p>
        <p>
          <b>ID del producto</b>
        </p>
        <p>{{ product._id }}</p>
      </div>

      <div class="featuresDetails">
        <p>
          <b>Precio x Kg</b>
        </p>
        <p>{{ product.priceKg | priceFormat }}</p>

        <p>
          <b>Peso</b>
        </p>
        <p>{{ weight | weight }} Kg</p>

        <p>
          <b>Precio total</b>
        </p>
        <p>{{ product.price | priceFormat }}</p>
      </div>

      <div class="featuresDetails">
        <p>
          <b>Categoría</b>
        </p>
        <p>{{ product.category }}</p>
        <p>
          <b>Sub categoría</b>
        </p>
        <p>{{ product.subCategory }}</p>
      </div>

      <div class="featuresDetails">
        <p>
          <b>Comercializadora</b>
        </p>
        <p>{{ product.company }}</p>
        <p>
          <b>Productor</b>
        </p>
        <p>{{ product.manufacturer }}</p>
      </div>

      <div class="featuresDetails">
        <p>
          <b>Visitas</b>
        </p>
        <p>{{ product.details.visits }}</p>
        <p>
          <b>Vendidos</b>
        </p>
        <p>{{ product.details.sold }}</p>
      </div>
    </div>

    <div class="tabcontent" v-show="showAdditional">
      <p v-show="product.additional.length === 0">
        No hay información adicional
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturesDetails",
  props: { product: { type: Object, required: true } },
  data() {
    return {
      classActive: [],
      showDescription: true,
      showFeatures: false,
      showAdditional: false
    };
  },
  mounted() {
    this.showTabContent("description");
  },
  computed: {
    weight() {
      let x = (this.product.price / this.product.priceKg).toFixed(2);
      return x;
    }
  },
  methods: {
    showTabContent(tab) {
      switch (tab) {
        case "description":
          this.showDescription = true;
          this.showFeatures = false;
          this.showAdditional = false;
          this.classActive = ["active", "", ""];
          break;
        case "features":
          this.showDescription = false;
          this.showFeatures = true;
          this.showAdditional = false;
          this.classActive = ["", "active", ""];
          break;
        case "additional":
          this.showDescription = false;
          this.showFeatures = false;
          this.showAdditional = true;
          this.classActive = ["", "", "active"];
          break;
      }
    }
  },
  filters: {
    weight(str) {
      return str.replace(".", ",");
    }
  }
};
</script>

<style lang="scss">
#featuresDetails {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 40px;
  margin-bottom: 40px;

  /* ****************** Tab ****************/
  .tab {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 80%;
    overflow: hidden;
    border-bottom: 1px solid #3d9fa7;

    button {
      height: 50px;
      padding: 0 16px;
      outline: none;
      cursor: pointer;
      transition: 0.3s;
      border: 1px solid #3d9fa7;
      color: #222;
      background-image: linear-gradient(to bottom right, #f4fdff, #ccf2fa);
      box-shadow: 0px 0px 5px #ccf2fa;

      &:hover {
        background-image: linear-gradient(to bottom right, #e7f8fc, #b6edf8);
        color: #222;
      }
    }

    .active {
      background-image: linear-gradient(to bottom right, #40cbd4, #3d9fa7);
      color: white;
      border: 1px solid #3d9fa7;

      &:hover {
        background-image: linear-gradient(to bottom right, #40cbd4, #2e8b94);
        color: white;
        border: 1px solid #2e8b94;
      }
    }
  }

  /* ****************** Tab Content ****************/
  .tabcontent {
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 6px 12px;
    border: 1px solid #3d9fa7;
    box-shadow: 0px 0px 5px #ccf2fa;
    border-top: none;
    background-color: white;

    .featuresDetails {
      display: grid;
      grid-template-columns: auto auto;
      padding: 10px;
      margin: 10px auto;

      p {
        text-align: left;
        margin: 0;
        padding: 5px;
        color: #555;

        b {
          color: #555;
        }

        &:nth-child(odd) {
          text-align: right;
        }
      }
    }
  }
}

/********* Responsive Design ********/
@media screen and (max-width: 1000px) {
  #featuresDetails .tab {
    button:hover {
      background-image: linear-gradient(to bottom right, #f4fdff, #ccf2fa);
      color: #222;
    }
    .active:hover {
      background-image: linear-gradient(to bottom right, #40cbd4, #3d9fa7);
      color: white;
      border: 1px solid #3d9fa7;
    }
  }
}
@media screen and (min-width: 741px) and (max-width: 850px) {
  #featuresDetails .tab button {
    width: 33.333%;
    padding: 0 10px;
  }
}
@media screen and (max-width: 550px) {
  #featuresDetails .tab button {
    width: 33.333%;
    padding: 0 5px;
    height: 40px;
  }
}
@media screen and (max-width: 400px) {
  #featuresDetails {
    .tab {
      display: grid;
      grid-template-columns: auto auto auto;

      button {
        width: 100%;
      }
    }

    .tabcontent .featuresDetails {
      padding: 0px;
    }
  }
}
@media screen and (max-width: 330px) {
  #featuresDetails .tabcontent {
    padding: 6px 0px;
  }
}
</style>
