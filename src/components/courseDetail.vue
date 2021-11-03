<template>
  <section class="mb-5">
    <div class="container">
      <div class="d-flex justify-content-center">
        <div
          class="mt-5 bg-white border rounded p-4"
          style="max-width: 600px; width: 100%"
        >
          <h4>{{ name }}</h4>
          <p class="mb-2 text-muted text-uppercase small">Code: {{ id }}</p>
          <hr />
          <p>
            <span class="mr-1"> {{ short_desc }} </span>
          </p>
          <span>Description</span>
          <p class="pt-1">
            {{ long_desc }}
          </p>
          <div class="table-responsive">
            <table class="table table-sm table-borderless mb-0">
              <tbody>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>Teacher: </strong>
                  </th>
                  <td>{{ teacher }}</td>
                </tr>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>Semester: </strong>
                  </th>
                  <td>{{ semester }}</td>
                </tr>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>Schedule:</strong>
                  </th>
                  <td>{{ schedule }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- estudiantes -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "CourseDetail",
  data() {
    return {
      name: "",
      id: "",
      short_desc: "",
      long_desc: "",
      semester: "",
      teacher: 0,
      schedule: "",
    };
  },
  methods: {
    async getCourse() {
      try {
        let id = this.$route.params.id;
        const course = await axios.get(
          ` https://unversidad-back.herokuapp.com/courses/courses/${id}/`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        console.log(course);
        this.name = course.data.name;
        this.id = course.data.id;
        this.short_desc = course.data.short_desc;
        this.long_desc = course.data.long_desc;
        this.semester = course.data.semester;
        this.teacher = course.data.teacher;
        this.schedule = course.data.schedule;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getCourse();
  },
};
</script>

<style>
</style>