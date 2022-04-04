<template>
  <div>
    <Header />
    <div class="container" style="background:#ebebeb;height: 100%;">
      <nuxt />
      <div style="margin-bottom:30px;" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/HeaderBar.vue'
import Footer from '@/components/FooterBar.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
