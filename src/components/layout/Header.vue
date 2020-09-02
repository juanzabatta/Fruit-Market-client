<template>
  <header>
    <div id="contentHeader">
      <div id="cLogo">
        <img id="logo" src="@/assets/icons/logo.webp" alt="img de LOGO" />
        <h1>Fruit Market</h1>

        <div
          id="menuIcon"
          :class="classMenu"
          @click="showMenu = !showMenu"
          v-if="windowWidth <= 1000"
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>

      <nav id="menu" v-show="showMenu">
        <ul>
          <li @click="clickMenu = !clickMenu">
            <router-link
              :to="{ name: 'About' }"
              :class="'button ' + routerActive[0]"
              >Nosotros</router-link
            >
          </li>

          <li @click="clickMenu = !clickMenu">
            <router-link
              :to="{ name: 'Services' }"
              :class="'button ' + routerActive[1]"
              >Servicios</router-link
            >
          </li>

          <li @click="clickMenu = !clickMenu">
            <router-link
              :to="{ name: 'Products' }"
              :class="'button ' + routerActive[2]"
              >Productos</router-link
            >
          </li>

          <li @click="clickMenu = !clickMenu">
            <router-link
              :to="{ name: 'Support' }"
              :class="'button ' + routerActive[3]"
              >Soporte</router-link
            >
          </li>

          <li @click="clickMenu = !clickMenu">
            <router-link
              :to="{ name: 'Contact' }"
              :class="'button ' + routerActive[4]"
              >Contacto</router-link
            >
          </li>

          <li id="containerLogin" @click="clickMenu = !clickMenu">
            <router-link
              :to="{ name: 'Login' }"
              id="btnLogin"
              class="buttonLogin"
              v-if="userDB === ''"
              >Entrar</router-link
            >

            <router-link
              :to="{ name: 'Register' }"
              id="btnRegister"
              class="buttonLogin"
              v-if="userDB === ''"
              >Registro</router-link
            >

            <router-link
              :to="{ name: 'User' }"
              id="btnUserName"
              class="buttonLogin"
              v-if="userDB != ''"
              >{{ userDB.name }}</router-link
            >

            <button
              id="btnCloseSession"
              class="buttonLogin"
              v-if="userDB != ''"
              @click="closeSession"
            >
              Salir
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: { windowWidth: Number },
  data() {
    return {
      showMenu: false,
      clickMenu: false,
      routerActive: "",
      classMenu: ""
    };
  },
  mounted() {
    this.showMenuFun();
    this.buttonActive();
  },
  computed: {
    userDB() {
      return this.$store.state.userDB;
    }
  },
  methods: {
    ...mapActions(["closeSession"]),
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
    },
    showMenuFun() {
      if (this.windowWidth > 1000) {
        this.showMenu = true;
      } else {
        if (this.clickMenu == true) {
          this.clickMenu = false;
        }
        this.showMenu = false;
      }
    }
  },
  watch: {
    $route: "buttonActive",
    windowWidth() {
      this.showMenuFun();
    },
    clickMenu: "showMenuFun",
    showMenu() {
      if (this.showMenu === true) {
        this.classMenu = "change";
      } else {
        this.classMenu = "";
      }
    }
  }
};
</script>

<style lang="scss">
/********* Header ********/
header {
  position: absolute;
  top: 0;
  z-index: 3;
  font-weight: normal;
  display: flex;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-image: url("../../assets/patterns/pattern-dark.png");

  #contentHeader {
    max-width: 1200px;
    font-weight: normal;
    display: flex;
    flex-direction: row;
    height: 4rem;
    padding: 0 20px;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    /********* Logo ********/
    #cLogo {
      display: flex;
      flex-direction: row;
      align-items: center;

      #logo {
        height: 3rem;
        width: 3rem;
        overflow: hidden;
        text-align: center;
        margin-right: 10px;
        border-radius: 50%;
        background-color: white;
      }

      h1 {
        font-family: "Kaushan Script";
        color: white;
        font-weight: bold;
        text-align: left;
        font-size: 1.8rem;
        width: 250px;
      }

      /************** Icon menu **************** */
      #menuIcon {
        display: inline-block;
        cursor: pointer;
        height: 30px;
        margin: 0;

        .bar1,
        .bar2,
        .bar3 {
          width: 30px;
          height: 3px;
          background-color: white;
          margin: 5px 0;
          border-radius: 2px;
          transition: 0.4s;
        }
      }

      .change {
        .bar1 {
          -webkit-transform: rotate(-45deg) translate(-8px, 5px);
          transform: rotate(-45deg) translate(-8px, 5px);
          background-color: #40cbd4;
        }

        .bar2 {
          opacity: 0;
          background-color: #40cbd4;
        }

        .bar3 {
          -webkit-transform: rotate(45deg) translate(-6px, -4px);
          transform: rotate(45deg) translate(-6px, -4px);
          background-color: #40cbd4;
        }
      }
    }

    /********* Menu ********/
    #menu {
      display: flex;
      width: auto;

      ul {
        display: flex;
        flex-direction: row;
        width: 100%;
        flex-wrap: nowrap;
        justify-content: center;

        li {
          .button {
            display: block;
            font-size: 0.8rem;
            padding: 10px;
            margin: 2px;
            text-decoration: none;
            color: black;
            text-align: center;
            text-transform: uppercase;
            background-color: white;
            border-radius: 10px;

            &:hover {
              background-image: linear-gradient(
                to bottom right,
                #40cbd4,
                #4badb6
              );
              color: white;
              text-decoration: none;
              cursor: pointer;
            }
          }

          /********* Buttons Actives ********/
          .isActive {
            background-image: linear-gradient(
              to bottom right,
              #40cbd4,
              #3d9fa7
            );
            color: white;

            &:hover {
              background-image: linear-gradient(
                to bottom right,
                #40cbd4,
                #2e8b94
              );
              color: white;
            }
          }
        }

        /********* Options login / register ********/
        #containerLogin {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: auto;
          padding: 5px 3px 5px 0;
          margin-left: 10px;

          .buttonLogin {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            font-size: 10px;
            text-transform: uppercase;
            cursor: pointer;
          }

          #btnLogin {
            border-radius: 10px 0 0 10px;
            background-image: linear-gradient(
              to bottom right,
              rgb(253, 212, 136),
              orange
            );
            margin-right: 0;
            color: black;
            width: 55px;

            &:hover {
              background-image: linear-gradient(
                to bottom right,
                rgb(248, 203, 120),
                rgb(238, 155, 0)
              );
            }
          }

          #btnRegister {
            margin-left: 0;
            border-radius: 0 10px 10px 0;
            background-color: rgb(233, 233, 233);
            color: black;
            width: 65px;

            &:hover {
              background-color: white;
              color: black;
            }
          }

          #btnUserName {
            border-radius: 10px 0 0 10px;
            background-image: linear-gradient(to bottom right, white, #ddd);
            margin-right: 0;
            color: black;
            width: 85px;
            overflow: hidden;

            &:hover {
              background-image: linear-gradient(to bottom right, white, white);
              color: black;
            }
          }

          #btnCloseSession {
            margin-left: 0;
            border-radius: 0 10px 10px 0;
            background-image: linear-gradient(
              to bottom right,
              rgb(255, 122, 122),
              red
            );
            color: white;
            width: 50px;
            border: none;

            &:hover {
              background-image: linear-gradient(
                to bottom right,
                rgb(255, 44, 44),
                rgb(221, 0, 0)
              );
              color: white;
            }
          }
        }
      }
    }
  }
}

/********* Responsive Design ********/
@media screen and (max-width: 1000px) {
  header #contentHeader {
    flex-direction: column;
    height: auto;
    min-height: 4rem;
    padding-top: 8px;

    #cLogo {
      justify-content: space-between;
      width: 100%;
    }

    #menu {
      margin-top: 8px;
      margin-bottom: 8px;

      ul li {
        .button:hover {
          background-image: none;
          color: black;
        }
        .isActive:hover {
          background-image: linear-gradient(to bottom right, #40cbd4, #3d9fa7);
          color: white;
        }
      }
    }
  }
}

@media screen and (max-width: 770px) {
  header #contentHeader {
    padding-top: 6px;
  }
}

@media screen and (max-width: 650px) {
  header #contentHeader {
    padding-top: 4px;

    #menu ul {
      flex-direction: column;

      #containerLogin {
        justify-content: center;
        width: 100%;
        padding: 2px;
        height: 2.63rem;
        margin-left: 0px;
      }
    }
  }
}

@media screen and (max-width: 550px) {
  header #contentHeader #menu ul #containerLogin {
    height: 2.93rem;
  }
}

@media screen and (max-width: 400px) {
  header #contentHeader #cLogo h1 {
    font-size: 1.5rem;
    text-align: center;
  }
}

@media screen and (max-width: 300px) {
  header #contentHeader #cLogo h1 {
    font-size: 1.2rem;
  }
}
</style>
