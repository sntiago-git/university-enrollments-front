<template>
  <div class="sidebar border-right justify-content-center">
    <div class="content side">
      <router-link class="rounded-pill btn btn-outline-primary" to="/enrollment"
        >Join courses</router-link
      >
      <router-link
        type="button"
        class="rounded-pill btn btn-side"
        to="/mycourses"
        >My courses</router-link
      >
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
.side > .router-link-active,
.side > .router-link-exact-active {
  background-color: #f0f0f0 !important;
  cursor: pointer;
}

.btn-side {
  background-color: transparent ;
}
 .btn-side:hover {
  border: 1px solid #dee2e6 ;
}

.sidebar {
  background-color: white;
  margin: 0;
  padding: 0;
  position: fixed;
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
    margin-top: 60px;
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

