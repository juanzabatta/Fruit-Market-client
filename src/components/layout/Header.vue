<template>
  <header>
    <div id="cLogo">
      <img id="logo" src="@/assets/logo.jpg" alt="img de LOGO" />
      <h2>Fruit Market</h2>
    </div>

    <nav id="menu">
      <ul>
        <li>
          <router-link :to="{ name: 'About'}" :class="'button '+ routerActive[0]">Nosotros</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Services'}" :class="'button '+ routerActive[1]">Servicios</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Products'}" :class="'button '+ routerActive[2]">Productos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Support'}" :class="'button '+ routerActive[3]">Soporte</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Contact'}" :class="'button '+ routerActive[4]">Contacto</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      routerActive: ""
    };
  },
  mounted() {
    this.buttonActive();
  },
  methods: {
    buttonActive() {
      this.routerActive = ["", "", "", "", ""];

      switch (this.$route.name) {
        case "About":
          this.routerActive[0] = "isActive";
          break;
        case "Services":
          this.routerActive[1] = "isActive";
          break;
        case "Products":
          this.routerActive[2] = "isActive";
          break;
        case "ProductsCategory":
          this.routerActive[2] = "isActive";
          break;
        case "ProductDetail":
          this.routerActive[2] = "isActive";
          break;
        case "Support":
          this.routerActive[3] = "isActive";
          break;
        case "Contact":
          this.routerActive[4] = "isActive";
          break;
      }
    }
  },
  watch: {
    $route: "buttonActive"
  }
};
</script>

<style>
/********* Header ********/
header {
  margin: auto;
  height: 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: 42% 58%;
  justify-items: center;
  align-items: center;
  grid-gap: 0px;
  background-image: url("../../assets/patterns/pattern-dark.png");
}

/********* Logo ********/
#cLogo {
  display: flex;
  flex-direction: row;
  align-items: center;
}
#logo {
  height: 3rem;
  width: 3rem;
  text-align: center;
  margin-right: 10px;
  border-radius: 50%;
}
header h2 {
  font-family: "Kaushan Script";
  color: white;
  font-weight: bold;
  font-size: 30px;
}

/********* Menu ********/
#menu {
  display: flex;
  width: 100%;
}
#menu ul {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: center;
}
#menu ul li .button {
  font-size: 0.8rem;
  padding: 10px;
  margin: 2px;
  text-decoration: none;
  color: black;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  background-color: white;
  border-radius: 10px;
}
#menu ul li .button:hover {
  background-color: #42b9c2;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

/********* Buttons Actives ********/
#menu ul li .isActive {
  background-color: #42b9c2;
  color: white;
}
#menu ul li .isActive:hover {
  background-color: #3d9fa7;
  color: white;
}

/********* Responsive Design ********/
</style>
