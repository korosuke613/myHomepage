<template>
  <div>
    <Header/>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "../molcules/header.vue";
import Footer from "../molcules/footer.vue"
export default {
  components: {
    Header,
    Footer
  }
};
</script>