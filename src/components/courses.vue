<template>

  <div class="container">
    <div class="row">
        <div class="col-12">
            <h2 class="mt-4 mb-4">Courses</h2>
        </div>
        <div v-for="course in courses" :key="course" class="col-md-6 col-lg-3">
            <!-- Bootstrap 5 card box -->
            <div class="card-box">
                <div class="card-thumbnail">
                    <img src="images/office-image-one.jpg" class="img-fluid" alt="">
                </div>
                <h3 class="mt-2 text-dark"> {{course.name}} </h3>
                <p class="text-secondary"> Docente: {{course.teacher}} </p>
                <p class="text-secondary"> {{course.short_desc}} </p>
                <p class="text-secondary"> {{course.schedule}} </p>
                <button v-on:click="loadCourse(course.id)" class="btn btn-sm btn-primary float-right">View Course</button>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import axios from "axios";

export default {
  name: "Courses",

  data() {
    return {
      courses: [],
    };
  },

  methods: {

    loadCourse: function(course_id) {
      this.$router.push({ name: "courseDetail", params:{id:course_id}});
    },

    async getCourses() {
      try {
        const courses = await axios.get(
          ` https://unversidad-back.herokuapp.com/courses/courses/`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        console.log(courses);
        this.courses = courses.data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getCourses();
  },
};
</script>

<style>
.card-box {
    border: 1px solid #ddd;
    padding: 20px;
    box-shadow: 0px 0px 10px 0px #c5c5c5;
    margin-bottom: 30px;
    float: left;
    border-radius: 10px;
    width: 100%;
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