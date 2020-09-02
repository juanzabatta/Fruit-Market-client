<template>
  <main id="contactView">
    <PmAlert
      :infoAlert="iAlert"
      @hideAlert="showAlert = $event"
      v-show="showAlert"
    />
    <h2>Contactenos</h2>
    <form class="contact-form" @submit.prevent="validationForm">
      <label>Name</label>
      <input type="text" name="user_name" v-model="nameUser" />
      <label>Email</label>
      <input type="email" name="user_email" v-model="emailUser" />
      <label>Asunto</label>
      <input type="text" name="user_subjet" v-model="subjetUser" />
      <label>Message</label>
      <textarea name="user_message" v-model="messageUser"></textarea>
      <input type="submit" value="Send" class="button" />
      <p v-show="sending">Enviando</p>
    </form>
  </main>
</template>

<script>
// import emailjs from "emailjs-com";

import PmAlert from "@/components/shared/Alert.vue";

export default {
  name: "Contact",
  components: {
    PmAlert
  },
  data() {
    return {
      nameUser: "",
      emailUser: "",
      subjetUser: "",
      messageUser: "",
      sending: false,
      showAlert: false,
      iAlert: {
        success: true,
        title: "Titulo",
        message: "Mensaje",
        height: 0
      }
    };
  },
  methods: {
    validationForm(e) {
      if (
        this.nameUser.trim().length > 1 &&
        this.emailUser.trim().length > 4 &&
        this.subjetUser.trim().length > 1 &&
        this.messageUser.trim().length > 1
      ) {
        this.sending = true;
        this.sendEmail(e);
      } else {
        console.log(this.nameUser.trim().length);

        if (this.nameUser.length <= 1) {
          console.log("nombre vacío");
        }
        if (this.emailUser.length <= 4) {
          console.log("correo vacío");
        } else if (
          this.emailUser.trim().indexOf("@") == -1 ||
          this.emailUser.trim().indexOf(".") == -1
        ) {
          console.log("correo invalido");
        }
        if (this.subjetUser.length <= 1) {
          console.log("asunto vacío");
        }
        if (this.messageUser.length <= 1) {
          console.log("mensaje vacío");
        }
      }
    }
    // sendEmail(e) {
    //   const $view = document.querySelector("#contactView");

    //   emailjs
    //     .sendForm(
    //       "contactozabax_gmail_com",
    //       "Correo_FM8457ASD",
    //       e.target,
    //       "user_M996u1G78rqobY8Uj4lK0"
    //     )
    //     .then(() => {
    //       this.sending = false;

    //       this.iAlert = {
    //         success: true,
    //         title: "Exito!!",
    //         message: "Se envio el correo satisfactoriamente",
    //         height: $view.clientHeight
    //       };
    //       this.showAlert = true;

    //       this.nameUser = "";
    //       this.emailUser = "";
    //       this.subjetUser = "";
    //       this.messageUser = "";
    //     })
    //     .catch(() => {
    //       this.sending = false;
    //       this.iAlert = {
    //         success: false,
    //         title: "Ups!!",
    //         message:
    //           "Parece que ha ocurrido un error al intentar enviar el correo",
    //         height: $view.clientHeight
    //       };
    //       this.showAlert = true;
    //     });
    // }
  }
};
</script>

<style>
#contactView form {
  font-size: 12px;
  color: #555555;
  width: 500px;
  background: white;
  padding: 20px 25px;
  margin: auto;
  margin-top: 30px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
}
#contactView form input,
#contactView form textarea {
  font: inherit;
  padding: 5px 5px;
  width: 100%;
  margin-top: 3px;
  margin-bottom: 15px;
  box-sizing: border-box;
  outline: none;
}
#contactView form .button {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 8px 35px;
  font-size: 12px;
  background: #888;
  color: white;
  cursor: pointer;
  outline: none;
}
#contactView form label {
  color: #555555;
  font-size: 11px;
  margin-bottom: 2px;
  text-align: left;
  display: block;
}
</style>
