<template>
    <div class="header">
      <h1>Universidad MinTic 2022</h1>
      <nav>
        <button v-if="is_auth" v-on:click="loadHome">Inicio</button>
        <button v-if="is_auth">Cuenta</button>
        <button v-if="is_auth" v-on:click="logOut">Cerrar Sesión</button>
        <button v-if="!is_auth" v-on:click="loadLogIn">Iniciar Sesión</button>
        <button v-if="is_auth" v-on:click="loadLogIn">Mis cursos</button>
        <br> <br>
        <button v-if="!is_auth" v-on:click="loadSignUp">Registrarse</button>
      </nav>
    </div>
</template>


<script>
export default {
  name: "navBar",
};
</script>

<style>
.greetings {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.greetings h1 {
  font-size: 50px;
  color: #283747;
}
.greetings span {
  color: crimson;
  font-weight: bold;
}
</style>
