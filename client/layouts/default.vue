<template>
  <div>
    <Header />
    <div class="container" style="background:#ebebeb;height: 100%;">
      <nuxt />
      <div style="margin-bottom:30px;"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>