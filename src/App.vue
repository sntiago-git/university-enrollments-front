<template>
  <v-app>
  <div id="app" class="app">

    <Loginheader></Loginheader>
    <div v-if="is_auth" class="header">
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

    <div class="main-component">
      <router-view
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut"
      >
      </router-view>
    </div>
    
    <Footer></Footer>
  </div>
  </v-app>
</template>

<script>
import Footer from './components/footer.vue';
import Loginheader from './components/loginheader.vue';

export default {
  name: "App",
  components:{Footer, Loginheader},

  data: function() {
    return {
      is_auth: false,
    };
  },


  methods: {
    verify: function() {
      this.is_auth = localStorage.getItem("isAuth") || false;
      console.log(this.is_auth);

      if (this.is_auth == false) 
        this.$router.push({ name: "logIn" });
      else 
        this.$router.push({ name: "home" });
    },
    loadLogIn: function() {
      this.$router.push({ name: "logIn" });
    },
    loadSignUp: function() {
      this.$router.push({ name: "signUp" });
    },
    loadHome: function() {
      this.$router.push({ name: "home" });
    },

    completedLogIn: function(data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("id", data.id);
      localStorage.setItem("name", data.name);
      localStorage.setItem("lastname", data.lastname);
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      alert("Autenticación Exitosa");
      this.verify();
    },
      logOut: function() {
      localStorage.setItem("isAuth", false);
      console.log("cierra sesion");
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verify();
    },
    completedSignUp: function(data) {
      alert("Registro Exitoso");
      this.$router.push({ name: "logIn" });
    },
  },
 


  created: function() {
    this.verify();
  },
};
</script>


<style>

</style>
