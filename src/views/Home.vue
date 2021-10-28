<template>
  <Header/>
  <Navbar />
  <div class="main-component">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Header,
  },
  methods: {
  },
};
</script>

<style>
.main-component {
  margin-left: 220px;
  margin-top: 60px;
}

@media screen and (max-width: 700px) {
  .main-component {
    margin: 0;
  }
}
</style>