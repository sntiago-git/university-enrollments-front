<template>
  <div class="container mt-5 px-lg-5" > 
    <div class="d-flex justify-content-center">
      <div class="border rounded mb-5" style="width: 22rem">
        <form class="w-100 p-4" v-on:submit.prevent="processLogInUser">
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input
              type="number"
              v-model="user.id"
              id="form2Example1"
              class="form-control"
            />
            <label class="form-label" for="form2Example1">Student</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input
              type="password"
              v-model="user.password"
              id="form2Example2"
              class="form-control"
            />
            <label class="form-label" for="form2Example2">Password</label>
          </div>

          <!-- 2 column grid layout for inline styling -->
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <!-- Checkbox -->
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example34"
                  checked
                />
                <label class="form-check-label" for="form2Example34">
                  Remember me
                </label>
              </div>
            </div>

            <div class="col">
              <!-- Simple link -->
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-block mb-4">
            Sign in
          </button>

          <!-- Register buttons -->
          <div class="text-center text-muted font-weight-bold">
            <p>Not a student? <a class="mylink text-primary " v-on:click="loadSignUp" >Register</a></p>
          </div>
        </form>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LogIn",
  data: function () {
    return {
      user: {
        id: "",
        password: "",
      },
    };
  },
  methods: {
    loadSignUp: function() {
      this.$router.push({ name: "signUp" });
    },
    processLogInUser: function () {
      axios
        .post("https://unversidad-back.herokuapp.com/login/", this.user, {
          headers: {},
        })
        .then((result) => {
          let dataLogIn = {
            id: result.user.id,
            name: result.data.name,
            lastname: result.data.lastname,

            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };

          this.$emit("completedLogIn", dataLogIn);
        })
        .catch((error) => {
          if (error.response.status == "401")
            alert("ERROR 401: Credenciales Incorrectas.");
        });
    },
  },
};
</script>



<style>

</style>



