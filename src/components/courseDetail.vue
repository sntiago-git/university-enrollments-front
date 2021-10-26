<template>
  <h1>{{ name }}</h1>
  <br />
  <h2>{{ short_description }}</h2>
  <h1>Hola</h1>
</template>

<script>
import axios from "axios";
export default {
  name: "CourseDetail",
  data(){
    return {
      name: "",
      short_description: "",
    };
  },
  methods: {
    async getCourse(){
      try {
        let id = this.$route.params.id
        const course = await axios.get(
          ` https://unversidad-back.herokuapp.com/courses/courses/${id}/`,{ 
          headers: {'Content-Type': 'application/json'}}
        );

        console.log(course);
        this.name = course.data.name;
        this.short_description = course.data.long_desc;
        
      } catch (error) {
        console.log(error);
      }
    },
  },
  created(){
      this.getCourse()
  }
};
</script>

<style>
</style>