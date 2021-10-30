<template>
  <LoginHeader />
  <router-view />
  <Footer />
</template>

<script>
import LoginHeader from "@/components/loginheader.vue";
import Footer from "@/components/footer.vue";

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
