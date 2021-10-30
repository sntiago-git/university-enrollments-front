<template>
  <div class="container">
    <div class="d-flex flex-wrap justify-content-start">
      <div class="col-12">
        <h5 class="mt-5 mb-4">My Courses</h5>
      </div>

      <div v-if="empty == true" class="row msg mb-5 mt-2" style="margin: auto">
        <div class="col-12">
          <img
            src="../assets/img/courses.png"
            alt=""
            class="img-fluid d-md-block mb-5"
            style="margin: auto"
          />
          <p class="text-dark justify-content-center lead p-2 mb-2">
            You are not enrolled in any course. If you want to register for a
            course, click the Join Courses button.
          </p>
        </div>
      </div>

      <div class="mb-5 mt-2" v-else>
        <div>
          <!-- Bootstrap 5 card box -->
          <div class="card-box"  v-for="course in courses" :key="course">
            <div class="card-thumbnail">
              <img src="images/office-image-one.jpg" class="img-fluid" alt="" />
            </div>
            <h4 class="mt-2 text-dark">{{ course.name }}</h4>
            <p class="text-secondary">Docente: {{ course.teacher }}</p>
            <p class="text-secondary">{{ course.short_desc }}</p>
            <p class="text-secondary">{{ course.schedule }}</p>
            <button
              v-on:click="loadCourse(course.id)"
              class="btn btn-sm btn-primary float-right"
            >
              View Course
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MyCourses",

  data() {
    return {
      courses: [],
      empty: false,
    };
  },

  methods: {
    loadCourse: function (course_id) {
      this.$router.push({ name: "courseDetail", params: { id: course_id } });
    },

    async getMyCourses() {
      try {
        const courses = await axios.get(
          ` https://unversidad-back.herokuapp.com/courses/my-courses/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access")}`,
            },
          }
        );

        console.log(courses);
        if (courses.data.length == 0) {
          this.empty = true;
        } else {
          this.courses = courses.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getMyCourses();
  },
};
</script>

<style>
.msg {
  width: 50%;
}

.card-box {
  margin: 5px;
  border: 1px solid #ddd;
  padding: 20px;
  float: left;
  border-radius: 10px;
  width: 250px;
  height: 350px;
  background-color: white;
}
.card-box .card-thumbnail {
  max-height: 200px;
  overflow: hidden;
  border-radius: 10px;
  transition: 1s;
}
.card-box .card-thumbnail:hover {
  transform: scale(1.2);
}
.card-box h3 a {
  font-size: 20px;
  text-decoration: none;
}
</style>