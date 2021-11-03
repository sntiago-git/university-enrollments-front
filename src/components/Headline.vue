<template>
  <div
    class="
      position-relative
      overflow-hidden
      p-3 p-md-5
      m-md-3
      h-100
      text-center
    "
  >
    <div class="row py-5 mt-4 p-lg-5 mx-auto my-5" style="max-width: 1000px">
      <div class="col-md-5 mb-md-0">
        <img
          src="../assets/img/headline.png"
          alt=""
          class="img-fluid mb-3 d-none d-md-block"
          style="margin: auto"
        />
      </div>
      <div class="col-md-7 col-lg-7">
        <h1 class="display-4 font-weight-normal">Enrollment Module</h1>
        <p class="lead font-weight-normal">
          This is a module in charge of managing the enrollment of students in
          the Min University (example university). Students will be able to see
          the available courses and enroll in them, they will also be able to
          un-enroll at any time.
        </p>
        <p>By: Santiago Meneses.</p>
        <p>Mision Tic Ciclo 3 P36</p>
        <router-link
          class="btn btn-outline-secondary rounded-pill"
          to="/enrollment"
          >Join Courses</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Headline",
  data: function () {
    return {
      name: localStorage.getItem("name") || "none",
    };
  },
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
