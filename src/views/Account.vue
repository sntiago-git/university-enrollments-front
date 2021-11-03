<template>
  <Header />
  <div class="account">
    <div class="container">
      <div class="d-flex row justify-content-center myaccount">
        <div
          class="col-12 d-flex mt-5 justify-content-between align-items-center"
        >
          <div class="d-flex flex-row align-items-center back">
            <h6>
              <router-link class="text-decoration-none text-dark" to="/home">
                <i class="bi bi-arrow-left"></i> Back to home</router-link
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
              <img class="mt-5" src="../assets/img/user.png" width="90" /><span
                class="font-weight-bold"
              >
                {{ user.name }} {{ user.lastname }} </span
              ><small class="text-black-50"> {{ user.email }} </small
              ><small> {{ user.career }} </small>
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
                    class="
                      btn btn-sm btn-outline-primary
                      profile-button
                      rounded-pill
                    "
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
              >
                Close Account
              </button>
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

import StudentService from "@/services/studentService";

export default {
  name: "Account",
  components: { Header, Footer },

  data() {
    return {
      user: {
        name: "",
        lastname: "",
        birthdate: "",
        phone: "",
        email: "",
        career: "",
        gender: "",
      },
    };
  },
  methods: {
    async init() {
      try {
        const student = await StudentService.getStudent();

        this.user.name = student.name;
        this.user.lastname = student.lastname;
        this.user.birthdate = student.birthdate;
        this.user.phone = student.phone;
        this.user.email = student.email;
        this.user.career = student.career;
        this.user.gender = student.gender;
      } catch (error) {
        alert(error);
      }
    },
    async updateAccount() {
      const id = localStorage.getItem("id");
      const student = await StudentService.updateStudent(id, this.user);

      console.log(student);
      if (student) {
        if (
          student.name != localStorage.getItem("name") ||
          student.lastname != localStorage.getItem("lastname")
        ) {
          localStorage.setItem("name", student.name);
          localStorage.setItem("lastname", student.lastname);
        }
      }
    },
    deleteAccount() {
      alert("Desactivando cuenta");
    },
  },
  created() {
    this.init();
  },
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
}

.profile-button {
  box-shadow: none;
  border: none;
}

.profile-button:focus {
  box-shadow: none;
}

.profile-button:active {
  box-shadow: none;
}
.back:hover {
  cursor: pointer;
}
</style>