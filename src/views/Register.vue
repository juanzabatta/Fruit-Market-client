<template>
  <main id="register">
    <div class="content">
      <div>
        <h2>Bienvenido</h2>

        <form method="POST" @submit.prevent="validationForm">
          <div class="formGroup">
            <label for="name_input">
              Nombre
              <span v-if="!$v.nameInput.required">*</span>
              <span class="labelError" v-if="$v.nameInput.$error"
                >&nbsp; Mínimo 2 caracteres.</span
              >
            </label>

            <input
              type="text"
              name="name_input"
              id="name_input"
              v-model.lazy="$v.nameInput.$model"
              :class="{ invalidInput: $v.nameInput.$error }"
            />
          </div>

          <div class="formGroup">
            <label for="surnames_input">
              Apellidos
              <span v-if="!$v.surnamesInput.required">*</span>
              <span class="labelError" v-if="$v.surnamesInput.$error"
                >&nbsp; Mínimo 6 caracteres.</span
              >
            </label>

            <input
              type="text"
              name="surnames_input"
              id="surnames_input"
              v-model.lazy="$v.surnamesInput.$model"
              :class="{ invalidInput: $v.surnamesInput.$error }"
            />
          </div>

          <div class="formGroup">
            <label for="userName_input">
              Nombre de usuario
              <span v-if="!$v.userNameInput.required">*</span>
              <span class="labelError" v-if="$v.userNameInput.$error"
                >&nbsp; Mínimo 6 caracteres.</span
              >
            </label>

            <input
              type="text"
              name="userName_input"
              id="userName_input"
              v-model.lazy="$v.userNameInput.$model"
              :class="{ invalidInput: $v.userNameInput.$error }"
              autocomplete="username"
            />
          </div>

          <div class="formGroup">
            <label for="dateOfBirth_input">
              Fecha de nacimiento
              <span v-if="!$v.dateOfBirthInput.required">*</span>
              <span class="labelError" v-if="$v.dateOfBirthInput.$error"
                >&nbsp; Mínimo 8 caracteres.</span
              >
            </label>

            <input
              type="date"
              name="dateOfBirth_input"
              id="dateOfBirth_input"
              v-model.lazy="$v.dateOfBirthInput.$model"
              :class="{ invalidInput: $v.dateOfBirthInput.$error }"
            />
          </div>

          <div class="formGroup">
            <label for="RUT_input">
              RUT
              <span v-if="rut.required">*</span>
              <span class="labelError" v-if="rut.error.length > 1">{{
                rut.error
              }}</span>
            </label>

            <input
              type="text"
              name="RUT_input"
              id="RUT_input"
              v-model.trim="rut.input"
              @blur="focusOutRut"
              @focus="focusInRut"
              :class="{ invalidInput: rut.error.length > 1 }"
              placeholder="12345678-9"
            />
          </div>

          <div class="formGroup">
            <label for="gender_input">
              Género
              <span v-if="!$v.genderSelected.required">*</span>
            </label>

            <select
              name="gender_input"
              id="gender_input"
              v-model="$v.genderSelected.$model"
            >
              <option disabled value>Seleccionar</option>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div class="formGroup">
            <label for="email_input">
              Correo
              <span v-if="!$v.emailInput.required">*</span>
              <span class="labelError" v-if="$v.emailInput.$error"
                >&nbsp; Correo no válido.</span
              >
            </label>

            <input
              type="email"
              name="email_input"
              id="email_input"
              v-model.lazy="$v.emailInput.$model"
              :class="{ invalidInput: $v.emailInput.$error }"
              autocomplete="username"
            />
          </div>

          <div class="formGroup">
            <label for="phone_input">
              Teléfono
              <span v-if="phone.required">*</span>
              <span class="labelError" v-if="phone.error.length > 1">{{
                phone.error
              }}</span>
            </label>

            <input
              type="tel"
              name="phone_input"
              id="phone_input"
              v-model.trim="phone.input"
              @blur="focusOutPhone"
              @focus="focusInPhone"
              :class="{ invalidInput: phone.error.length > 1 }"
              placeholder="944558712"
              autocomplete="off"
            />
          </div>

          <div class="formGroup">
            <label for="password_input">
              Contraseña
              <span v-if="!$v.passwordInput.required">*</span>
              <span class="labelError" v-if="$v.passwordInput.$error"
                >&nbsp; Mínimo 6 caracteres.</span
              >
            </label>

            <input
              type="password"
              name="password_input"
              id="password_input"
              v-model.lazy="$v.passwordInput.$model"
              :class="{ invalidInput: $v.passwordInput.$error }"
              autocomplete="new-password"
            />
          </div>

          <div class="formGroup">
            <label for="password2_input">
              Repita la contraseña
              <span v-if="!$v.password2Input.required">*</span>
              <span class="labelError" v-if="$v.password2Input.$error"
                >&nbsp; No coinciden las contraseñas.</span
              >
            </label>

            <input
              type="password"
              name="password2_input"
              id="password2_input"
              v-model.lazy="$v.password2Input.$model"
              :class="{ invalidInput: $v.password2Input.$error }"
              autocomplete="new-password"
            />
          </div>

          <hr />
          <button id="showAdress" @click.prevent="showAdress = !showAdress">
            <span class="arrow">↓ &nbsp;</span>
            --------------- Dirección (Opcional) ---------------
            <span class="arrow">&nbsp; ↓</span>
          </button>
          <div v-show="showAdress">
            <div class="formGroup">
              <label for="country_input">País</label>

              <select
                name="country_input"
                id="country_input"
                v-model="countrySelected"
              >
                <option disabled value>Seleccionar</option>
                <option value="chile">Chile</option>
              </select>
              <br />
            </div>

            <div class="formGroup">
              <label for="region_input">Región / Estado</label>

              <input
                type="text"
                name="region_input"
                id="region_input"
                v-model="regionInput"
              />
            </div>

            <div class="formGroup">
              <label for="city_input">Ciudad</label>

              <input
                type="text"
                name="city_input"
                id="city_input"
                v-model="cityInput"
              />
            </div>

            <div class="formGroup">
              <label for="street_input">Calle</label>

              <input
                type="text"
                name="street_input"
                id="street_input"
                v-model="streetInput"
              />
            </div>

            <div class="formGroup">
              <label for="local_input">Casa / Dep</label>

              <input
                type="text"
                name="local_input"
                id="local_input"
                v-model="localInput"
              />
            </div>
          </div>
          <hr />

          <button id="sendRegister">Registrar</button>

          <p id="error" v-if="message != ''">{{ message }}</p>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { required, minLength, sameAs, email } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      nameInput: "",
      surnamesInput: "",
      userNameInput: "",
      dateOfBirthInput: "",
      rut: {
        input: "",
        formated: "",
        unformated: "",
        error: "",
        required: true
      },
      genderSelected: "",
      emailInput: "",
      phone: {
        input: "",
        formated: "",
        unformated: "",
        error: "",
        required: true
      },
      passwordInput: "",
      password2Input: "",
      countrySelected: "",
      regionInput: "",
      cityInput: "",
      streetInput: "",
      localInput: "",
      message: "",
      showAdress: false,
      sending: false,
      body: {},
      bodyLogin: {},
    };
  },
  validations: {
    nameInput: { required, minLength: minLength(2) },
    surnamesInput: { required, minLength: minLength(6) },
    userNameInput: { required, minLength: minLength(6) },
    dateOfBirthInput: { required, minLength: minLength(8) },
    genderSelected: { required },
    emailInput: { required, email },
    passwordInput: { required, minLength: minLength(6) },
    password2Input: { required, sameAsPassword: sameAs("passwordInput") }
  },
  methods: {
    ...mapActions(["saveStorage"]),

    validationForm() {
      this.$v.$touch();

      if (
        this.$v.$invalid ||
        this.rut.error.length !== 0 ||
        this.phone.error.length !== 0 ||
        this.rut.required ||
        this.phone.required
      ) {        
        this.message = "Campos no válidos.";

      } else {
        this.sending = true;
        this.body = {
          name: this.nameInput,
          surnames: this.surnamesInput,
          userName: this.userNameInput,
          dateOfBirth: this.dateOfBirthInput,
          rut: this.rut.formated,
          gender: this.genderSelected,
          email: this.emailInput,
          phone: this.phone.formated,
          password: this.passwordInput,
          address: {
            country: this.countrySelected,
            region: this.regionInput,
            city: this.cityInput,
            street: this.streetInput,
            local: this.localInput
          }
        };
        this.register();
      }
    },
    register() {
      this.axios
        .post("/users/register/", this.body)
        .then(res => {
          this.sending = false;

          if (res.data.message === "Usuario registrado.") {
            this.bodyLogin = {
              input: this.userNameInput,
              password: this.passwordInput
            };

            this.login();
          }

          this.nameInput = "";
          this.surnamesInput = "";
          this.userNameInput = "";
          this.dateOfBirthInput = "";
          this.rut.formated = "";
          this.genderSelected = "";
          this.emailInput = "";
          this.phone.formated = "";
          this.passwordInput = "";
          this.countrySelected = "";
          this.regionInput = "";
          this.cityInput = "";
          this.streetInput = "";
          this.localInput = "";
          this.message = "";

          this.$router.push({ name: "Products" });
        })
        .catch(error => {
          this.message = error.response.data;
          this.sending = false;
        });
    },
    login() {
      this.axios
        .post("login/", this.bodyLogin)
        .then(res => {
          const token = res.data.token;
          this.saveStorage(token);
        })
        .catch(error => {
          this.message = error.response.data;
          this.sending = false;
        });
    },
    focusOutPhone() {
      let phoneNumber = parseInt(this.phone.input);

      if (!isNaN(phoneNumber) && this.phone.input.length === 9) {
        this.phone.unformated = this.phone.input;

        this.phone.formated =
          "+56 " +
          this.phone.unformated.charAt(0) +
          " " +
          this.phone.unformated.slice(1, 5) +
          " " +
          this.phone.unformated.slice(5, 9);

        this.phone.input = this.phone.formated;
        this.phone.required = false;
        this.phone.error = "";
      } else {
        this.phone.input = "";
        if (isNaN(phoneNumber)) {
          this.phone.error = " No es un número.";
        } else if (this.phone.input.length !== 9) {
          this.phone.error = " Debe tener 9 dígitos.";
        }
      }
    },
    focusInPhone() {
      this.phone.input = this.phone.unformated;
    },
    focusOutRut() {
      const lastChar = this.rut.input.charAt(this.rut.input.length - 1);
      const input = this.rut.input.slice(0, this.rut.input.length - 1);

      let onlyNumber = input => input.replace(/[.|-]/g, "");
      let rutNumber = parseInt(onlyNumber(input));

      if (!isNaN(rutNumber) && rutNumber.toString().length === 8) {
        this.rut.unformated = rutNumber + "-" + lastChar;

        this.rut.formated =
          rutNumber.toString().slice(0, 2) +
          "." +
          rutNumber.toString().slice(2, 5) +
          "." +
          rutNumber.toString().slice(5, 8) +
          "-" +
          lastChar;

        this.rut.input = this.rut.formated;
        this.rut.required = false;
        this.rut.error = "";
      } else {
        this.rut.input = "";
        if (isNaN(rutNumber)) {
          this.rut.error = " No es un número.";
        } else if (rutNumber.toString().length !== 8) {
          this.rut.error = " Debe tener 9 números.";
        }
      }
    },
    focusInRut() {
      this.rut.input = this.rut.unformated;
    }
  }
};
</script>

<style lang="scss">
/********* Login ********/
#register .content {
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
    height: auto;
    min-height: 300px;
    margin: auto;
    padding-bottom: 20px;
    box-shadow: 0px 0px 4px gainsboro, 0px 2px 4px gray inset,
      0px -2px 3px gray inset;

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

      .formGroup {
        width: 100%;
        height: auto;

        label {
          display: block;
          font-size: 1.1rem;
          line-height: 2rem;
          text-align: left;
          width: 80%;
          margin: auto;

          span {
            color: red;
            font-weight: bold;
          }

          .labelError {
            font-size: 12px;
            font-weight: inherit;
          }
        }

        input,
        select {
          display: block;
          margin: 0px auto;
          margin-bottom: 20px;
          width: 80%;
          height: 30px;
          border: 1px solid #ccc;
          box-shadow: -1px -1px #ccc inset;
          border-radius: 10px;
          padding: 0px 10px;
          color: #999;

          &:focus {
            color: black;
          }
        }

        .invalidInput {
          box-shadow: 0 0 3px red;
        }
      }

      #sendRegister {
        display: block;
        font-size: 0.8rem;
        padding: 10px;
        max-width: 100px;
        margin: auto;
        margin-top: 20px;
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

      #showAdress {
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-size: 1rem;
        padding: 10px;
        width: 90%;
        margin: 20px auto;
        border: none;
        background-color: white;
        border-radius: 10px;
        cursor: pointer;

        .arrow {
          display: none;
        }

        &:hover {
          justify-content: space-between;
          background-color: whitesmoke;

          .arrow {
            display: block;
          }
        }
      }

      #error {
        margin: 0 auto;
        color: red;
        font-size: 0.8rem;
      }
    }
  }
}

/********* Responsive Design ********/
@media screen and (max-width: 770px) {
}
</style>
