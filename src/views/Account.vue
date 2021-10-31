<template>
  <Header />
  <div class="account">
    <div class="container">
      <div class="d-flex row justify-content-center myaccount">
        <div
          class="col-12 d-flex mt-5 justify-content-between align-items-center"
        >
          <div class="d-flex flex-row align-items-center back">
            <i class="bi bi-arrow-left mr-1 mb-1"></i>
            <h6>
              <router-link class="text-decoration-none text-dark" to="/home"
                >Back to home</router-link
              >
            </h6>
          </div>
          <h6 class="text-right text-dark">Manage Account</h6>
        </div>
        <div class="col-12 row mb-5">
          <div class="col-md-4 myborder">
            <div
              class="d-flex flex-column align-items-center text-center p-3 py-5"
            >
              <img
                class="rounded-circle mt-5"
                src="https://i.imgur.com/0eg0aG0.jpg"
                width="90"
              /><span class="font-weight-bold">
                {{ user.name }} {{ user.lastname }} </span
              ><span class="text-black-50"> {{ user.email }} </span
              ><span> {{ user.career }} </span>
            </div>
          </div>
          <div class="col-md-8">
            <div class="p-3 py-5">
              <form>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="firstName"
                        class="form-control"
                        v-model="user.name"
                      />
                      <label class="form-label" for="firstName"
                        >First Name</label
                      >
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="lastName"
                        class="form-control"
                        v-model="user.lastname"
                      />
                      <label class="form-label" for="lastName">Last Name</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12 mb-4 pb-2">
                    <div class="form-outline">
                      <input
                        type="email"
                        id="emailAddress"
                        class="form-control"
                        v-model="user.email"
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
                        v-model="user.birthdate"
                      />
                      <label for="birthdayDate" class="form-label"
                        >Birthday</label
                      >
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
                        v-model="user.gender"
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
                        v-model="user.gender"
                      />
                      <label class="form-check-label" for="maleGender"
                        >Male</label
                      >
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="otherGender"
                        value="OTHER"
                        v-model="user.gender"
                      />
                      <label class="form-check-label" for="otherGender"
                        >Other</label
                      >
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
                        v-model="user.phone"
                      />
                      <label class="form-label" for="phoneNumber"
                        >Phone Number</label
                      >
                    </div>
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="career"
                        class="form-control"
                        v-model="user.career"
                      />
                      <label class="form-label" for="career">Career</label>
                    </div>
                  </div>
                </div>

                <div class="mt-2 text-right">
                  <button
                    class="btn btn-sm btn-primary profile-button rounded-pill"
                    type="button"
                    @click="updateAccount"
                  >
                    Save Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-12 mb-5 border-top">
          <div class="p-3 py-5">
            <div
              class="d-flex justify-content-end align-items-center mb-3 w-100"
            >
              <div class="mr-5" style="width: 250px">
                <h6 class="text-danger">Close Account</h6>
                <p>
                  Your account will be deactivated on our website, the
                  enrollments created will also be deleted.
                  <b>Warning:</b> Closing your account is irreversible.
                </p>
              </div>

              <button
                class="rounded-pill btn btn-sm btn-outline-danger"
                @click="deleteAccount"
                >Close Account</button
              >
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Account",
  components: { Header, Footer },

  data() {
    return {
      user: {
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
  methods:{
    updateAccount(){
      alert(this.user.name)
    },
    deleteAccount(){
      alert("Desactivando cuenta")
    },
  }
};
</script>

<style>
.account {
  margin-top: 60px;
}
.myaccount {
  width: 100%;
  max-width: 1000px !important;
  margin: auto !important;
}
.myborder {
  border-right: solid 1px #dee2e6;
}
@media screen and (max-width: 767px) {
  .myborder {
    border-right: 0;
  }
}

.form-control:focus {
  box-shadow: none;
  border-color: #ba68c8;
}

.profile-button {
  background: #ba68c8;
  box-shadow: none;
  border: none;
}

.profile-button:hover {
  background: #682773;
}

.profile-button:focus {
  background: #682773;
  box-shadow: none;
}

.profile-button:active {
  background: #682773;
  box-shadow: none;
}
.back:hover {
  color: #682773;
  cursor: pointer;
}
</style>