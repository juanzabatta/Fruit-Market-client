<template>
  <div id="alertContainer">
    <div id="alert">
      <button @click.prevent="hideAlert" title="Cerrar">X</button>

      <img src="@/assets/icon-success.png" v-show="infoAlert.success" />
      <img src="@/assets/icon-error.png" v-show="!infoAlert.success" />
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
  data() {
    return {};
  },
  mounted() {},
  methods: {
    hideAlert() {
      this.$emit("hideAlert", false);
    }
  }
};
</script>

<style>
/********* Container alert ********/
#alertContainer {
  height: 100vh;
  position: absolute;
  z-index: 2;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.486);
}

/********* Information Alert ********/
#alertContainer #alert {
  position: relative;
  height: 300px;
  width: 400px;
  background-color: white;
  top: 20vh;
  left: calc(50% - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#alertContainer #alert button {
  position: absolute;
  border: none;
  outline: none;
  top: 0;
  right: 0;
  cursor: pointer;
  background-color: white;
  height: 40px;
  width: 40px;
}
#alertContainer #alert button:hover {
  color: red;
}
#alertContainer #alert img {
  height: 100px;
  width: 100px;
}
#alertContainer #alert #titleAlert {
  text-align: center;
  font-weight: bold;
}
#alertContainer #alert #messageAlert {
  text-align: center;
}

/********* Responsive Design ********/
</style>
