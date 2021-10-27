<template>
  <LoginHeader />
  <router-view />
  <Footer />
</template>

<script>
import LoginHeader from "@/components/LoginHeader.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Auth",
  components: { Footer, LoginHeader },

  data() {
    return {};
  },

  methods: {},
};
</script>

<style>
</style>
