<template>
  <nav id="navBar">
    <router-link
      :to="{ name: 'ProductsCategory', params: { category: 'bananas' } }"
      id="btnBabanas"
      class="button"
      >Cambures</router-link
    >

    <router-link
      :to="{ name: 'ProductsCategory', params: { category: 'coconuts' } }"
      id="btnCoconuts"
      class="button"
      >Cocos</router-link
    >

    <router-link
      :to="{ name: 'ProductsCategory', params: { category: 'apples' } }"
      id="btnApples"
      class="button"
      >Manzanas</router-link
    >

    <router-link
      :to="{ name: 'ProductsCategory', params: { category: 'pears' } }"
      id="btnPears"
      class="button"
      >Peras</router-link
    >

    <router-link
      :to="{ name: 'ProductsCategory', params: { category: 'pineaples' } }"
      id="btnPineaples"
      class="button"
      >Piñas</router-link
    >

    <router-link
      :to="{ name: 'ProductsCategory', params: { category: 'grapes' } }"
      id="btnGrapes"
      class="button"
      >Uvas</router-link
    >

    <button class="search" title="No disponible">L</button>
  </nav>
</template>

<script>
export default {
  name: "NavbarProducts",
  data() {
    return {
      showCategory: false,
      clickMenu: false
    };
  },
  mounted() {
    this.showMenuFun();
  },
  methods: {
    showMenuFun() {
      if (this.clickMenu == true) {
        this.clickMenu = false;
      }
      this.showCategory = false;
    }
  },
  watch: {
    clickMenu: "showMenuFun",
    $route() {
      this.showCategory = false;
    }
  }
};
</script>

<style scoped lang="scss">
/********* navBar ********/
#navBar {
  grid-column: 1/3;
  grid-row: 1/2;
  position: absolute;
  top: 0;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: auto;
  min-height: 3rem;
  width: 100%;
  margin-top: 5px;
  background-color: transparent;

  /********* Category ********/
  .button {
    width: 150px;
    height: 30px;
    text-align: center;
    border: none;
    background-color: transparent;
    color: white;
    line-height: 30px;
    margin: 5px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 1px 1px 3px gray, 0px 0px 4px gainsboro;
  }

  #btnBabanas {
    background-image: linear-gradient(to bottom right, #ffff3f, #dddf00);
    color: black;
  }

  #btnCoconuts {
    background-image: linear-gradient(to bottom right, #e6b8a2, #774936);
  }

  #btnApples {
    background-image: linear-gradient(to bottom right, rgb(255, 142, 97), red);
  }

  #btnPears {
    background-image: linear-gradient(to bottom right, #aacc00, #55a630);
  }

  #btnPineaples {
    background-image: linear-gradient(to bottom right, #ffe94e, #fdb833);
    color: black;
  }

  #btnGrapes {
    background-image: linear-gradient(to bottom right, #c77dff, #5a189a);
  }

  .search {
    font-family: "WebSymbolsregular";
    width: 40px;
    height: 30px;
    text-align: center;
    border: none;
    background-image: linear-gradient(to bottom right, #40cbd4, #3d9fa7);
    color: white;
    line-height: 30px;
    margin: 5px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 1px 1px 3px gray, 0px 0px 4px gainsboro;
  }
}

/********* Responsive Design ********/
@media screen and (max-width: 1030px) {
  #navBar .button {
    width: 100px;
  }
}
@media screen and (max-width: 750px) {
  #navBar .button {
    margin: 5px 4%;
  }
}
@media screen and (max-width: 610px) {
  #navBar .button {
    margin: 5px 3%;
  }
}
@media screen and (max-width: 550px) {
  #navBar .button {
    margin: 5px 1%;
  }
}
@media screen and (max-width: 460px) {
  #navBar .button {
    width: 85px;
  }
}
@media screen and (max-width: 390px) {
  #navBar .button {
    width: 70px;
  }
}
</style>
