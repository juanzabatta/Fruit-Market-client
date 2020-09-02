<template>
  <div id="app">
    <PmAlert
      :infoAlert="$store.state.iAlert"
      @hideAlert="showAlert = $event"
      v-if="$store.state.iAlert.show"
    ></PmAlert>
    <PmHeader :windowWidth="windowWidth"></PmHeader>
    <PmLoading v-if="isLoading"></PmLoading>
    <router-view />
    <PmFooter></PmFooter>
  </div>
</template>

<script>
import PmHeader from "@/components/layout/Header.vue";
import PmFooter from "@/components/layout/Footer.vue";
import PmAlert from "@/components/shared/Alert.vue";
import PmLoading from "@/components/shared/Loader.vue";

import { mapActions, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    PmAlert,
    PmHeader,
    PmFooter,
    PmLoading
  },
  data() {
    return {
      isLoading: true,
      windowWidth: window.innerWidth,
      showAlert: true
    };
  },
  created() {
    this.getProducts();
  },
  mounted() {
    this.isLoading = true;
    window.addEventListener("resize", this.handleWindowResize);
    this.getToken();
  },
  computed: {
    productsStateError() {
      return this.$store.state.products.productsStateError;
    },
    productsState() {
      return this.$store.state.products.productsState;
    }
  },
  methods: {
    ...mapActions("products", ["getProducts"]),
    ...mapMutations(["getUser", "getAlert"]),
    getToken() {
      const token = localStorage.getItem("token");
      this.getUser(token);
    },
    handleWindowResize() {
      this.windowWidth = window.innerWidth;
    },
    getShowAlert() {
      const iAlert = this.$store.state.iAlert;
      iAlert.show = false;
      this.getAlert(iAlert);
      this.showAlert = true;
    }
  },
  watch: {
    productsStateError() {
      const iAlert = {
        success: false,
        title: "Error",
        message: `Parece que ha ocurrido un error al intentar cargar los datos del servidor.`,
        show: true
      };

      this.getAlert(iAlert);
      console.log(this.productsStateError);
    },
    productsState() {
      if (Object.keys(this.$store.state.products.productsState).length !== 0) {
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      }
    },
    showAlert: "getShowAlert",
    windowWidth: "handleWindowResize"
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "WebSymbolsRegular";
  src: url(./assets/fonts/websymbols-regular-webfont.eot);
  src: url(./assets/fonts/websymbols-regular-webfont.eot?#iefix)
      format("embedded-opentype"),
    url(./assets/fonts/websymbols-regular-webfont.woff) format("woff"),
    url(./assets/fonts/websymbols-regular-webfont.ttf) format("truetype"),
    url(./assets/fonts/websymbols-regular-webfont.svg#WebSymbolsRegular)
      format("svg");
  font-weight: normal;
  font-style: normal;
}
/********* General ********/
* {
  margin: 0px;
  padding: 0px;
  font-family: Arial, Helvetica, sans-serif;
  color: #555555;
  box-sizing: border-box;
  font-size: 16px;
  text-align: center;
  transition: all 300ms;
}

ul {
  list-style: none;
}

h1,
h2,
h3,
h4 {
  text-transform: uppercase;
}

h2 {
  font-size: 1.5rem;
  line-height: 2.25rem;
  text-align: center;
}

h4 {
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
}

p {
  font-size: 1rem;
  line-height: 1.35rem;
  margin: 0.75rem 1.5rem 0.75rem 1.5rem;

  b {
    font-size: 1.1rem;
  }
}

input,
button,
select {
  outline: none;

  &:focus {
    border: none;
    outline: none;
  }
}

/********* Views General ********/
main {
  height: auto;
  min-height: calc(100vh - 4rem - 4.2rem);
  margin: auto;
  margin-top: 4rem;
  position: relative;
  background: url("./assets/patterns/pattern-white.png"), repeat, white;
  box-shadow: 0px 2px 4px gray inset, 0px -2px 3px gray inset;
}

/********* Responsive Design ********/
@media screen and (max-width: 770px) {
  * {
    font-size: 14px;
  }
}
@media screen and (max-width: 550px) {
  * {
    font-size: 12px;
  }
}
</style>
