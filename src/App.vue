<template>
  <Header />
  <transition name="fade"><router-view/></transition>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

