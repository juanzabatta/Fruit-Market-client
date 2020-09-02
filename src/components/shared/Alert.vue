<template>
  <div id="alertContainer">
    <div id="alert">
      <button @click.prevent="hideAlert" title="Cerrar">X</button>

      <img src="@/assets/icons/success.png" v-show="infoAlert.success" />
      <img src="@/assets/icons/error.png" v-show="!infoAlert.success" />
      <p id="titleAlert">{{ infoAlert.title }}</p>
      <p id="messageAlert">{{ infoAlert.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    infoAlert: { type: Object, required: true }
  },
  methods: {
    hideAlert() {
      this.$emit("hideAlert", false);
    }
  }
};
</script>

<style lang="scss">
/********* Container alert ********/
#alertContainer {
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.486);

  /********* Information Alert ********/
  #alert {
    position: relative;
    height: 300px;
    width: 400px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      position: absolute;
      border: none;
      outline: none;
      top: 0;
      right: 0;
      cursor: pointer;
      background-color: white;
      height: 40px;
      width: 40px;

      &:hover {
        color: red;
      }
    }

    img {
      height: 100px;
      width: 100px;
    }

    #titleAlert {
      text-align: center;
      font-weight: bold;
    }

    #messageAlert {
      text-align: center;
    }
  }
}
</style>
