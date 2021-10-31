<template>
  <nav
    class="
      navbar
      border-bottom
      navbar-light
      fixed-top
      justify-content-between
      align-items-center
    "
  >
    <h4 class="navbar-brand">
      <router-link class="text-decoration-none text-muted" to="/home"
        >Min University</router-link
      >
    </h4>
    <div>
      <a
        type="button"
        class="align-middle align-items-center"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-expanded="false"
      >
        <span class="text-dark">
          {{ user.id }} - {{ user.name }} {{ user.lastname }}</span
        >

        <a type="button" class="btn btn-default btn-circle">
          <i class="bi bi-person-circle profile"></i>
        </a>
      </a>

      <ul class="dropdown-menu dropdown-menu-lg-end">
        <li>
          <router-link class="dropdown-item btn btn-light" to="/account"
            >Account settings</router-link
          >
        </li>
        <hr />
        <li>
          <button
            class="dropdown-item btn btn-light"
            v-if="isAuth"
            v-on:click="logOut"
            type="button"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
  name: "Header",
  data() {
    return {
      user: {
        id: localStorage.getItem("id"),
        name: localStorage.getItem("name"),
        lastname: localStorage.getItem("lastname"),
      },
      isAuth: localStorage.getItem("access"),
    };
  },
  methods: {
    logOut: function () {
      localStorage.clear();
      console.log("Sesion cerrada");
      this.$router.push({ name: "logIn" });
    },
  },
};
</script>

<style>
.dropdown-menu {
  right: 10px !important;
  left: auto !important;
}
.profile {
  font-size: x-large;
  padding: 0 !important;
}

.navbar {
  background: white;
  height: 60px;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
    border-right: none !important;
    border-bottom: 1px solid #dee2e6 !important;
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

