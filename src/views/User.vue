<template>
  <main id="user">
    <div class="content">
      <div>
        <h2>Perfil de usuario</h2>

        <p>Nombre: {{ $store.state.userDB.name }}</p>
        <p>Apellidos: {{ $store.state.userDB.surnames }}</p>
        <p>Nombre de usuario: {{ $store.state.userDB.userName }}</p>
        <p>
          Fecha de nacimiento:
          {{ $store.state.userDB.dateOfBirth.slice(0, 10) }}
        </p>
        <p>RUT: {{ $store.state.userDB.RUT }}</p>
        <p>Genero: {{ $store.state.userDB.gender }}</p>
        <p>Correo: {{ $store.state.userDB.email }}</p>
        <p>Teléfono: {{ $store.state.userDB.phone }}</p>
        <br />
        <h2>Información</h2>
        <p>Fecha de registro: {{ $store.state.userDB.date.slice(0, 10) }}</p>
        <p>Usuario ID: {{ $store.state.userDB._id }}</p>
        <p>Usuario activo: {{ $store.state.userDB.active }}</p>
        <p>Rol: {{ $store.state.userDB.role }}</p>
        <br />
        <h2>Dirección</h2>
        <p>País: {{ $store.state.userDB.address.country }}</p>
        <p>Región/Estado: {{ $store.state.userDB.address.region }}</p>
        <p>Ciudad: {{ $store.state.userDB.address.city }}</p>
        <p>Calle: {{ $store.state.userDB.address.street }}</p>
        <p>Casa/Departamento: {{ $store.state.userDB.address.local }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "User",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
/********* Login ********/
#user .content {
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
    box-shadow: 0px 0px 4px gainsboro, 0px 2px 4px gray inset,
      0px -2px 3px gray inset;

    h2 {
      width: 100%;
      height: auto;
      padding: 10px 20px;
      text-transform: uppercase;
    }
  }
}

/********* Responsive Design ********/
@media screen and (max-width: 770px) {
}
</style>
