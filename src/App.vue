<template>
  <div id="app">
    <PmAlert :infoAlert="iAlert" @hideAlert="showAlert = $event" v-show="showAlert" />
    <PmHeader />
    <router-view />
    <PmFooter />
  </div>
</template>

<script>
import PmHeader from "@/components/layout/Header.vue";
import PmFooter from "@/components/layout/Footer.vue";
import PmAlert from "@/components/shared/Alert.vue";

import { mapActions, mapState } from "vuex";

export default {
  components: {
    PmAlert,
    PmHeader,
    PmFooter
  },
  data() {
    return {
      showAlert: false,
      iAlert: {
        success: true,
        title: "Titulo",
        message: "Mensaje"
      }
    };
  },
  created() {
    this.getProducts();
  },
  computed: {
    ...mapState("products", ["productsState", "productsStateError"])
  },
  methods: {
    ...mapActions("products", ["getProducts"])
  },
  watch: {
    productsStateError() {
      const $view = document.querySelector("#app");
      this.iAlert = {
        success: false,
        title: "Ups!!",
        message: `Parece que ha ocurrido un error al intentar cargar los datos error`,
        height: $view.clientHeight
      };
      this.showAlert = true;
      console.log(this.productsStateError);
    }
  }
};
</script>

<style>
/********* General ********/
* {
  margin: 0px;
  padding: 0px;
  font-family: "Quicksand";
  color: #555555;
  box-sizing: border-box;
  font-size: 16px;
  text-align: center;
  transition: all 300ms;
}

ul {
  list-style: none;
}

h2,
h3,
h4 {
  text-transform: uppercase;
}

h2 {
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 2.25rem;
  text-align: center;
}

h4 {
  font-weight: 900;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
}

p {
  font-size: 1rem;
  line-height: 1.35rem;
  margin: 0.75rem 1.5rem 0.75rem 1.5rem;
}

figure {
  display: flex;
  justify-content: center;
  align-content: center;
}

figure img {
  display: block;
  height: auto;
  width: 95%;
  margin: auto;
}

input,
button {
  outline: none;
}

input:focus,
button:focus {
  border: none;
  outline: none;
}
/********* Views General ********/
main {
  height: auto;
  min-height: calc(100vh - 4rem - 4.2rem);
  margin: auto;
  background-color: white;
}

/********* Responsive Design ********/
</style>
