<template>
  <div id="mediaDetails">
    <div id="barImgs">
      <img
        v-for="(i, index) in product.img"
        :key="index"
        :src="urlBaseApi + i"
        :alt="product.title"
        :title="product.title"
        :class="imgActive[index]"
        @click="changeIndex(index)"
      />
    </div>

    <div id="imgProduct">
      <div id="imgSelected">
        <img
          :src="urlBaseApi + product.img[imgIndex]"
          :alt="'Imagen de ' + product.title"
        />
      </div>

      <div id="directions">
        <button id="btnPrev" @click.prevent="goToImage(-1)" title="Anterior">
          &lt;
        </button>
        <button id="btnFullScreen" @click.prevent="openFullscreen()">
          Pantalla completa
        </button>
        <button id="btnNext" @click.prevent="goToImage(1)" title="Siguiente">
          &gt;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import urlBaseApi from "@/modules/urlBase";

export default {
  name: "MediaDetails",
  props: { product: { type: Object, required: true } },
  data() {
    return {
      error: true,
      imgActive: ["imgActive", "", ""],
      imgIndex: 0
    };
  },
  mounted() {
    this.getProduct();
  },
  computed: {
    urlBaseApi() {
      return urlBaseApi + "img/";
    }
  },
  methods: {
    getProduct() {
      this.imgActive[0] = "imgActive";
      this.imgActive[1] = "";
      this.imgActive[2] = "";
    },
    changeIndex(index) {
      this.imgIndex = index;

      this.imgActive.forEach((element, index) => {
        element = "";
        this.imgActive[index] = element;
      });

      this.imgActive[index] = "imgActive";
    },
    goToImage(n) {
      if (
        (this.imgIndex === 0 && n == -1) ||
        (this.imgIndex === this.product.img.length - 1 && n === 1)
      ) {
        this.changeIndex(this.imgIndex);
      } else {
        this.changeIndex((this.imgIndex += n));
      }
    },
    openFullscreen() {
      const imgSelected = document.getElementById("imgProduct");

      if (imgSelected.requestFullscreen) {
        imgSelected.requestFullscreen();
      } else if (imgSelected.mozRequestFullScreen) {
        /* Firefox */
        imgSelected.mozRequestFullScreen();
      } else if (imgSelected.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        imgSelected.webkitRequestFullscreen();
      } else if (imgSelected.msRequestFullscreen) {
        /* IE/Edge */
        imgSelected.msRequestFullscreen();
      }
    }
  },
  watch: {
    product: "getProduct"
  }
};
</script>

<style lang="scss">
#mediaDetails {
  display: grid;
  grid-template-columns: auto auto;

  /* **************** Barra de imagenes **************/
  #barImgs {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 400px;
    padding: 20px;
    background-image: url("../../../assets/patterns/pattern-dark.png");
    background-color: #969696;
    border-radius: 0 0 20px 0;
    box-shadow: 2px 2px 4px gray;

    img {
      height: calc((100% - 60px) / 3);
      background-color: white;
      width: auto;
      margin: 10px;
      object-fit: contain;
      cursor: pointer;
      opacity: 0.9;
      transition: all 300ms;
      border: 1px dashed yellow;
    }

    .imgActive {
      opacity: 1;
      transform: scale(1.1, 1.1);
      border: 3px solid #40cbd4;
    }
  }

  /* ****************** Product Detail ****************/
  #imgProduct {
    grid-column: 2/3;
    max-width: 550px;
    height: 300px;
    overflow: hidden;
    padding: 20px;
    margin: auto;
    object-fit: contain;

    #imgSelected {
      height: 100%;
      width: 100%;
      margin: auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        vertical-align: bottom;
        transition: all 3s;
      }
    }

    /* **************** Control de imagenes ***************/
    #directions {
      width: 100%;
      height: 100%;
      position: relative;
      top: -100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        display: flex;
        height: 100%;
        background-color: transparent;
        border: none;
      }

      #btnPrev,
      #btnNext {
        justify-content: center;
        align-items: center;
        width: 15%;
        color: #dcdcdc;
        font-size: 6rem;
        cursor: pointer;

        &:hover {
          color: #2e8b94;
        }
      }

      #btnFullScreen {
        width: 70%;
        cursor: zoom-in;
        color: transparent;
      }
    }

    /* Chrome, Safari and Opera syntax */
    &:-webkit-full-screen {
      padding: 0px;

      #imgSelected {
        width: 100%;
        background-color: white;
      }

      #directions {
        #btnPrev,
        #btnNext {
          width: 10%;
        }

        #btnFullScreen {
          width: 80%;
          cursor: auto;
        }
      }
    }

    /* Firefox syntax */
    &:-moz-full-screen {
      padding: 0px;

      #imgSelected {
        width: 100%;
        background-color: white;
      }

      #directions {
        #btnPrev,
        #btnNext {
          width: 10%;
        }

        #btnFullScreen {
          width: 80%;
          cursor: auto;
        }
      }
    }

    /* IE/Edge syntax */
    &:-ms-fullscreen {
      padding: 0px;

      #imgSelected {
        width: 100%;
        background-color: white;
      }

      #directions {
        #btnPrev,
        #btnNext {
          width: 10%;
        }

        #btnFullScreen {
          width: 80%;
          cursor: auto;
        }
      }
    }

    /* Standard syntax */
    &:fullscreen {
      padding: 0px;

      #imgSelected {
        width: 100%;
        background-color: white;
      }

      #directions {
        #btnPrev,
        #btnNext {
          width: 10%;
        }

        #btnFullScreen {
          width: 80%;
          cursor: auto;
        }
      }
    }
  }
}

/* ****************** Responsive *****************/
@media screen and (min-width: 1216px) {
  #mediaDetails #barImgs {
    border-radius: 0 0 20px 20px;
  }
}
@media screen and (max-width: 1000px) {
  #mediaDetails {
    #barImgs {
      width: 80%;
      height: 350px;
    }

    #imgProduct {
      height: 250px;
      width: auto;

      #directions {
        #btnPrev:hover,
        #btnNext:hover {
          color: #dcdcdc;
        }
      }
    }
  }
}
@media screen and (max-width: 770px) {
  #mediaDetails {
    #barImgs {
      width: 100%;
    }

    #imgProduct {
      height: 250px;
      width: auto;

      #directions #btnPrev,
      #directions #btnNext {
        font-size: 5rem;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  #mediaDetails #barImgs {
    height: 250px;
  }
}
@media screen and (max-width: 400px) {
  #mediaDetails #imgProduct #directions {
    #btnPrev,
    #btnNext {
      font-size: 3rem;
    }
  }
}
</style>
