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
                  <div class="d-block h-100">
                    <div class="card-body d-flex flex-column h-100">
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
                          btn-md btn-primary
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
                          btn-md btn-danger
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
                  <div class="d-flex justify-content-center">algo confirm</div>
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
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

import CoursesService from "@/services/coursesService.js";

export default {
  name: "Enrollment",

  data() {
    return {
      courses: [],

      name: "a",
      id: "a",
      short_desc: "a",
      long_desc: "a",
      semester: "a",
      teacher: 0,
      schedule: "",
      registered: false,
    };
  },

  components: {
    Footer,
    Header,
  },

  methods: {
    async getCourses() {
      try {
        const courses = await axios.get(
          ` https://unversidad-back.herokuapp.com/courses/courses/`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        this.courses = courses.data;

        //verificamos

        const mycourses = await CoursesService.getMyCourses();

        console.log(mycourses);
        console.log(courses.data);

        this.courses.forEach((course1) => {
          mycourses.forEach((course2) => {
            if (course1.id == course2.id) {
              course1.isRegistered = true;
              console.log(course1);
            }else{
             
            }
          });
        });
      } catch (error) {
        console.log(error);
      }
    },

    viewCourse(id) {
      let course = this.courses.find((course) => course.id === id);
      this.name = course.name;
      this.id = course.id;
      this.short_desc = course.short_desc;
      this.long_desc = course.long_desc;
      this.semester = course.semester;
      this.teacher = course.teacher;
      this.schedule = course.schedule;
      this.registered = course.isRegistered
    },

    verify(id) {
      let course = this.courses.find((course) => course.id === id);
      if(course.isRegistered){
        course.isRegistered = false;
        this.registered = false;
      }else{ 
        course.isRegistered = true;
        this.registered = true;
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
        this.verify(course_id)
      } catch (error) {
        console.log(error);
      }
    },

    async unregister(course_id){

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
        this.verify(course_id)

      } catch (error) {
        console.log(error);
      }
    }
  },

  created() {
    this.getCourses();
  },
};
</script>

<style>
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