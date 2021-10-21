
<template>
  <div class="container">
    <div class="row py-5 mt-4 align-items-center">
      <!-- For Demo Purpose -->
      <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
        <img
          src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg"
          alt=""
          class="img-fluid mb-3 d-none d-md-block"
        />
        <h1>Student Account for Testing</h1>
        <p class="font-italic text-muted mb-0">
          If you want testing this module you can create and register your
          account and use all the students functions. This module is still under
          development so it's probably find bugs and errors.
        </p>
        <p class="font-italic text-muted">In development by Santiago Meneses</p>
      </div>

      <!-- Registeration Form -->
      <div class="col-md-7 col-lg-6 ml-auto">
        <form v-on:submit.prevent="processSingUser">
          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="form-outline">
                <input
                  type="text"
                  id="firstName"
                  class="form-control"
                  v-model="userSign.name"
                />
                <label class="form-label" for="firstName">First Name</label>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="form-outline">
                <input
                  type="text"
                  id="lastName"
                  class="form-control"
                  v-model="userSign.lastname"
                />
                <label class="form-label" for="lastName">Last Name</label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="form-outline">
                <input
                  type="number"
                  id="id"
                  class="form-control"
                  v-model="userSign.id"
                />
                <label class="form-label" for="id">Identification Number</label>
              </div>
            </div>
            <div class="col-md-6 mb-4 pb-2">
              <div class="form-outline">
                <input
                  type="email"
                  id="emailAddress"
                  class="form-control"
                  v-model="userSign.email"
                />
                <label class="form-label" for="emailAddress">Email</label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-4 d-flex align-items-center">
              <div class="form-outline datepicker w-100">
                <input
                  type="date"
                  class="form-control"
                  id="birthdayDate"
                  v-model="userSign.birthdate"
                />
                <label for="birthdayDate" class="form-label">Birthday</label>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <h6 class="mb-2 pb-1">Gender:</h6>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="femaleGender"
                  value="FEMALE"
                  v-model="userSign.gender"
                />
                <label class="form-check-label" for="femaleGender"
                  >Female</label
                >
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="maleGender"
                  value="MALE"
                  v-model="userSign.gender"
                />
                <label class="form-check-label" for="maleGender">Male</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="otherGender"
                  value="OTHER"
                  v-model="userSign.gender"
                />
                <label class="form-check-label" for="otherGender">Other</label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-4 pb-2">
              <div class="form-outline">
                <input
                  type="tel"
                  id="phoneNumber"
                  class="form-control"
                  v-model="userSign.phone"
                />
                <label class="form-label" for="phoneNumber">Phone Number</label>
              </div>
            </div>
            <div class="col-md-6 mb-4 pb-2">
              <div class="form-outline">
                <input
                  type="text"
                  id="career"
                  class="form-control"
                  v-model="userSign.career"
                />
                <label class="form-label" for="career">Career</label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-4 pb-2">
              <div class="form-outline">
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  v-model="userSign.password"
                />
                <label class="form-label" for="password">Password</label>
              </div>
            </div>
            <div class="col-md-6 mb-4 pb-2">
              <div class="form-outline">
                <input
                  type="password"
                  id="password2"
                  class="form-control"
                  v-model="userSign.password2"
                />
                <label class="form-label" for="password2"
                  >Confirm Password</label
                >
              </div>
            </div>
          </div>
          <div class="">
            <div class="form-group col-lg-8 mx-auto mb-0 mt-1">
              <input
                class="btn btn-primary btn-block py-2"
                type="submit"
                value="Create your account"
              />
            </div>
            <div
              class="form-group d-flex justify-content-center col-lg-12 mt-4"
            >
              <p class="text-muted font-weight-bold">
                Already Registered?
                <a
                  v-on:click="loadLogIn"
                  class="mylink text-primary ml-2"
                  >Login</a
                >
              </p>
            </div>
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
  name: "singUp",
  data: function () {
    return {
      userSign: {
        id: "",
        password: "",
        password2: "",
        name: "",
        lastname: "",
        birthdate: "",
        gender: "",
        phone: "",
        email: "",
        career: "",
      },
    };
  },
  methods: {
    loadLogIn: function () {
      this.$router.push({ name: "logIn" });
    },
    processSingUser: function () {
      if (this.userSign.password2 != this.userSign.password) {
        alert("Las contraseñas no coinciden");
        return false;
      }

      axios
        .post(
          "https://unversidad-back.herokuapp.com/students/students/",
          this.userSign,
          {
            headers: {},
          }
        )
        .then((result) => {
          console.log(result);
          let dataSign = {
            id: this.userSign.id,
          };

          this.$emit("completedSignUp", dataSign);
        })
        .catch((error) => {
          alert(JSON.stringify(error.response.data));
          console.log(error.response.data);
        });
    },
  },
};
</script>


<style>

</style>
