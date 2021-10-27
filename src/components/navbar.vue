<template>
  <div class="sidebar border justify-content-center">
    <div class="content">
      <router-link class="rounded-pill btn btn-outline-primary" to="/home2"
        >Join courses</router-link
      >
      <router-link
        type="button"
        class="rounded-pill btn btn-light"
        to="/courses"
        >My courses</router-link
      >
      <button
        class="rounded-pill btn btn-outline-primary"
        v-if="isAuth"
        v-on:click="logOut"
      >
        logout
      </button>
    </div>
  </div>
</template>


<script>
export default {
  name: "NavBar",
  data() {
    return {
      isAuth: localStorage.getItem("access"),
    };
  },
  methods: {
    logOut: function () {
      localStorage.clear();
      console.log("Sesion cerrada");
      alert("Sesión Cerradaaaa");
      this.$router.push({ name: "logIn" });
    },
  },
};
</script>

<style>
.btn-light {
  background-color: white !important;
}
.btn-light:hover {
  background-color: #f0f0f0 !important;
}
.sidebar {
  background-color: white;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 80px;
  width: 220px;
  height: 100%;
  overflow: auto;
}
.content {
  margin-left: 20px;
  margin-top: 20px;
}
.sidebar a {
  top: 10px;
  display: inline-block;
  text-decoration: none;
  margin: 10px;
  text-align: center;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
    margin-bottom: 80px;
  }
  .sidebar a {
    float: left;
  }
  div.content {
    margin: 0;
  }
}

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
</style>

