<template>
  <main id="login">
    <div class="content">
      <div>
        <h2>Iniciar sesión</h2>

        <form
          method="POST"
          class="contact-form"
          @submit.prevent="validationForm"
        >
          <label for="user_input">
            Usuario, Correo o RUT
            <span v-if="!$v.inputUser.required">*</span>
            <span class="labelError" v-if="$v.inputUser.$error"
              >&nbsp; Mínimo 6 caracteres.</span
            >
          </label>
          <input
            id="user_input"
            type="text"
            name="user_input"
            v-model.lazy="$v.inputUser.$model"
            :class="{ invalidInput: $v.inputUser.$error }"
            autocomplete="username"
          />

          <label for="user_password">
            Contaseña
            <span v-if="!$v.passwordUser.required">*</span>
            <span class="labelError" v-if="$v.passwordUser.$error"
              >&nbsp; Mínimo 6 caracteres.</span
            >
          </label>
          <input
            id="user_password"
            type="password"
            name="user_password"
            v-model.lazy="$v.passwordUser.$model"
            :class="{ invalidInput: $v.passwordUser.$error }"
            autocomplete="current-password"
          />

          <button type="submit">Ingresar</button>

          <p id="error" v-if="message != ''">{{ message }}</p>
        </form>

        <a href="#">Recuperar contraseña</a>
      </div>
    </div>
  </main>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      inputUser: "",
      passwordUser: "",
      sending: false,
      body: {},
      message: "",
    };
  },
  validations: {
    inputUser: { required, minLength: minLength(4) },
    passwordUser: { required, minLength: minLength(6) }
  },
  methods: {
    ...mapActions(["saveStorage"]),

    validationForm() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.message = "Campos no válidos.";
      } else {
        this.sending = true;

        this.body = {
          input: this.inputUser,
          password: this.passwordUser
        };
        this.login();
      }
    },
    login() {
      this.axios
        .post("login/", this.body)
        .then(res => {
          this.sending = false;

          this.inputUser = "";
          this.passwordUser = "";
          this.message = "";

          const token = res.data.token;
          this.saveStorage(token);

          this.$router.push({ name: "Products" });
        })
        .catch(error => {
          this.message = error.response.data;
          this.sending = false;
        });
    }
  }
};
</script>

<style lang="scss">
/********* Login ********/
#login .content {
  min-height: calc(100vh - 4rem - 4.2rem);
  margin: auto;
  background-color: transparent;
  position: relative;
  max-width: 1200px;
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    margin-top: 20px;
    background-color: white;
    width: 100%;
    max-width: 600px;
    height: 80%;
    min-height: 300px;
    margin: auto;
    border-radius: 10px;
    box-shadow: 1px 1px 3px gray, 0px 0px 4px gainsboro;

    h2 {
      width: 100%;
      height: auto;
      padding: 10px 20px;
      text-transform: uppercase;
    }

    form {
      display: flex;
      flex-direction: column;
      height: auto;
      width: 80%;
      margin: auto;

      label {
        font-size: 1.1rem;
        line-height: 2rem;

        span {
          color: red;
          font-weight: bold;
        }

        .labelError {
          font-size: 12px;
          font-weight: inherit;
        }
      }

      input {
        display: block;
        margin: 0px auto;
        margin-bottom: 20px;
        width: 80%;
        height: 30px;
        border: 1px solid #ccc;
        box-shadow: -1px -1px #ccc inset;
        border-radius: 10px;
        padding: 0px 10px;
        color: #555;

        &:focus {
          color: black;
        }
      }

      button {
        display: block;
        font-size: 0.8rem;
        padding: 10px;
        max-width: 100px;
        margin: auto;
        margin-bottom: 5px;
        text-decoration: none;
        text-align: center;
        text-transform: uppercase;
        border-radius: 10px;
        border: none;
        box-shadow: 1px 1px 3px gray, 0px 0px 4px gainsboro;
        background-image: linear-gradient(to bottom right, #40cbd4, #3d9fa7);
        color: white;
        cursor: pointer;
      }

      .invalidInput {
        box-shadow: 0 0 3px red;
      }

      #error {
        margin: 0 auto;
        color: red;
        font-size: 0.8rem;
      }
    }

    a {
      display: block;
      font-size: 0.8rem;
      height: 50px;
      padding: 10px 20px;
      text-decoration: none;
      color: blue;
    }
  }
}
/********* Responsive Design ********/
@media screen and (max-width: 770px) {
  #login .content > div {
    width: 450px;
  }
}

@media screen and (max-width: 650px) {
  #login .content > div {
    width: 350px;
  }
}

@media screen and (max-width: 550px) {
  #login .content > div {
    form #error {
      font-size: 12px;
    }
    a {
      font-size: 1rem;
    }
  }
}

@media screen and (max-width: 400px) {
  #login .content > div {
    width: 90%;
  }
}
</style>
