<template>
  <Header />
  <div class="enrollment">
    <div class="container">
      <div class="row mt-4 align-items-center">
        <div class="d-flex justify-content-center">
          <ul class="nav nav-pills mb-4 mt-5" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active border rounded-pill"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Courses
              </button>
            </li>

            <div class="vr"></div>

            <li class="nav-item" role="presentation">
              <button
                class="nav-link border rounded-pill"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                @click="loadMyEnrollment"
              >
                My Enrollment
              </button>
            </li>
          </ul>
        </div>

        <div class="col-md-12 mb-5 mb-md-0">
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active row border bg-white"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div style="display: flex" class="p-0">
                <div class="col-md-6 p-4">
                  <div class="container mb-2 font-weight-bold text-dark">
                    <p>Select your course:</p>
                  </div>
                  <div class="d-block w-100" style="height: 500px">
                    <div class="list-group overflow-auto h-100 rounded-0">
                      <table class="table border">
                        <thead class="">
                          <tr class="">
                            <th scope="col">#</th>
                            <th scope="col">Code</th>
                            <th scope="col">Course</th>
                            <th scope="col">Semester</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            class="trbody"
                            v-for="course in courses"
                            :key="course"
                            v-on:click="viewCourse(course.id)"
                          >
                            <td>{{ courses.indexOf(course) + 1 }}</td>
                            <td>{{ course.id }}</td>
                            <td>{{ course.name }}</td>
                            <td>{{ course.semester }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 bg-light p-5">
                  <div class="d-block" style="height: 500px">
                    <div v-if="info" class="d-flex flex-column h-100">
                      <div>
                        <div class="h-100">
                          <p
                            class="
                              text-dark
                              justify-content-center
                              w-100
                              lead
                              text-center
                              mb-4
                            "
                          >
                            From the site on the left there are all the courses
                            available at the moment. Select the courses you want
                            and enroll.
                          </p>
                          <img
                            src="../assets/img/enrollment.png"
                            alt=""
                            class="img-fluid d-md-block w-100"
                            style="margin: auto; max-width: 400px"
                          />
                        </div>
                      </div>
                    </div>
                    <div v-else class="card-body d-flex flex-column h-100">
                      <h4 class="card-title pricing-card-title">
                        {{ id }} - {{ name }}
                      </h4>
                      <p>Code: {{ id }}</p>

                      <p>{{ short_desc }}</p>
                      <p>{{ long_desc }}</p>
                      <p>{{ semester }}</p>
                      <p>Teacher: {{ teacher }}</p>
                      <p>Schedule: {{ schedule }}</p>

                      <button
                        type="button"
                        class="
                          align-self-center
                          btn
                          rounded-pill
                          btn-sm btn-outline-primary
                          mt-5
                        "
                        style="bottom: 0"
                        v-if="!registered"
                        @click="register(id)"
                      >
                        Join
                      </button>

                      <button
                        type="button"
                        class="
                          align-self-center
                          btn
                          rounded-pill
                          btn-sm btn-outline-danger
                          mt-5
                        "
                        style="bottom: 0"
                        v-else
                        @click="unregister(id)"
                      >
                        Unregister
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade row"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div style="display: flex">
                <div class="col-md-12 pr-lg-5 mb-5 mb-md-0">
                  <div class="col-12 d-flex justify-content-center">
                    <h5 class="mt-3 mb-4 text-muted">
                      You enrolled in the following courses:
                    </h5>
                  </div>
                  <div class="justify-content-center">
                    <div class="list-group">
                      <div
                        v-for="mycourse in mycourses"
                        :key="mycourse"
                        class="mt-2 mycard rounded"
                      >
                        <div
                          class="
                            list-group-item list-group-item-action
                            flex-column
                            p-3
                          "
                        >
                          <div class="d-flex w-100 justify-content-between">
                            <h5 class="mr-2">
                              {{ mycourse.id }} - {{ mycourse.name }}
                            </h5>
                            <small> {{ mycourse.schedule }} </small>
                          </div>
                          <p class="mb-1">
                            {{ mycourse.long_desc }}
                          </p>
                          <small>Teacher: {{ mycourse.teacher }} </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
import axios from "axios";
import Footer from "@/components/footer.vue";
import Header from "@/components/Header.vue";

import CoursesService from "@/services/coursesService.js";

export default {
  name: "Enrollment",

  data() {
    return {
      courses: [],
      mycourses: [],

      name: "",
      id: "",
      short_desc: "",
      long_desc: "",
      semester: "",
      teacher: 0,
      schedule: "",
      registered: false,

      info: true,
    };
  },

  components: {
    Footer,
    Header,
  },

  methods: {
    async init() {
      //Obtenemos todos los cursos existentes disponibles.
      try {
        const courses = await axios.get(
          ` https://unversidad-back.herokuapp.com/courses/courses/`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        this.courses = courses.data;

        //verificamos
        this.getCoursesAlreadyRegistered();
      } catch (error) {
        console.log(error);
      }
    },

    async getCoursesAlreadyRegistered() {
      //Obtenemos los courses que ya han sido registrados previamente por el usuario.
      try {
        const mycourses = await CoursesService.getMyCourses();
        this.mycourses = mycourses;

        console.log(mycourses);
        console.log(this.courses.data);

        this.courses.forEach((course1) => {
          mycourses.forEach((course2) => {
            if (course1.id == course2.id) {
              course1.isRegistered = true;
              console.log(course1);
            }
          });
        });
      } catch (error) {
        console.log(error);
      }
    },

    async register(course_id) {
      alert(course_id);

      let course = {
        course: course_id,
      };
      try {
        const enrollment = await axios.post(
          `https://unversidad-back.herokuapp.com/enrollments/enrollments/`,
          course,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access")}`,
            },
          }
        );
        console.log(enrollment);
        this.verify(course_id);
      } catch (error) {
        console.log(error);
      }
    },

    async unregister(course_id) {
      alert(course_id);

      try {
        const enrollment = await axios.delete(
          `https://unversidad-back.herokuapp.com/enrollments/enrollments/${course_id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access")}`,
            },
          }
        );
        console.log(enrollment);
        this.verify(course_id);
      } catch (error) {
        console.log(error);
      }
    },

    viewCourse(id) {
      this.info = false;

      let course = this.courses.find((course) => course.id === id);
      this.name = course.name;
      this.id = course.id;
      this.short_desc = course.short_desc;
      this.long_desc = course.long_desc;
      this.semester = course.semester;
      this.teacher = course.teacher;
      this.schedule = course.schedule;
      this.registered = course.isRegistered;
    },

    verify(id) {
      let course = this.courses.find((course) => course.id === id);

      if (course.isRegistered) {
        course.isRegistered = false;
        this.registered = false;
      } else {
        course.isRegistered = true;
        this.registered = true;
      }
    },

    loadMyEnrollment() {
      this.getCoursesAlreadyRegistered();
    },
  },

  created() {
    this.init();
  },
};
</script>

<style>
.mycard {
  width: 100%;
  max-width: 600px;
  margin: auto;
}
.trbody {
  cursor: pointer;
}
.trbody:hover {
  background: #f0f0f0;
}
th:after,
th:before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
}
.table thead th:before {
  top: -1px;
  border-top: 1px solid #dee2e6 !important;
}
.table thead th:after {
  bottom: -1px;
  border-bottom: 2px solid #dee2e6 !important;
}
.table thead th {
  border-bottom: 0;
  color: #343a40 !important;
}
.table {
  --bs-table-striped-bg: #f8f9fa !important ;
}

thead {
  background-color: #f8f9fa !important ;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
}

button {
  width: 150px;
}
.vr {
  width: 1px;
  background-color: #dee2e6;
}
.nav-link {
  margin-left: 20px;
  margin-right: 20px;
}
.enrollment {
  margin-top: 60px;
}

@media screen and (max-width: 700px) {
  .enrollment {
    margin: 0;
  }
}
</style>