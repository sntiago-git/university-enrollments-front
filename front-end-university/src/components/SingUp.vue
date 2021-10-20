<template>
  <div class="sing_user">
    <div class="container_sing_user">
      <h2>Registro</h2>
      <form v-on:submit.prevent="processSingUser">
        <input type="number" v-model="userSign.id" required   placeholder="id" />
        <br />
        <input type="text" v-model="userSign.name" required   placeholder="name" />
        <br />
        <input type="text" v-model="userSign.lastname" required   placeholder="lastname" />
        <br />
        <input type="date" v-model="userSign.birthdate" required   placeholder="birthdate" />
        <br />
        <input type="text" v-model="userSign.gender" required  placeholder="gender" />
        <br />
        <input type="text" v-model="userSign.phone" required  placeholder="phone" />
        <br />
        <input type="email" v-model="userSign.email" required  placeholder="email" />
        <br />
        <input type="text" v-model="userSign.career" required  placeholder="career" />
        <br />
        <input type="password" v-model="userSign.password" required  placeholder="Password" />
        <br />
        <button type="submit">Registrarme</button>
      </form>
    </div>
  </div>
</template>




<script>
import axios from "axios";
export default {
  name: "singUp",
  data: function() {
    return {
      userSign: {
        id: "",
        password: "",
        name:"",
        lastname:"",
        birthdate:"",
        gender:"",
        phone:"",
        email:"",
        career:"",
      },
    };
  },
  methods: {
    processSingUser: function() {
        console.log(this.userSign);
      axios
        .post("https://unversidad-back.herokuapp.com/students/students/", this.userSign , {
          headers: {},
        })
        .then((result) => {
            console.log(result);
          let dataSign = {
            id: this.userSign.id,
           
          };

          this.$emit("completedSignUp", dataSign);
        })
        .catch((error) => {
          if (error.response.status == "401")
            alert("ERROR 400: datos incorrectos");
        });
    },
  },
};
</script>



<style>
.sing_user {
  margin-top: 20px;
  padding: 0%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_sing_user {
  border: 3px solid #283747;
  border-radius: 10px;
  width: 25%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sing_user h2 {
  color: #283747;
}
.sing_user form {
  width: 70%;
}
.sing_user input {
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;
  border: 1px solid #283747;
}
.sing_user button {
  width: 100%;
  height: 40px;
  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0;
}
.sing_user button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
}
</style>
