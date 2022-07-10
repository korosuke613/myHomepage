<template>
  <div>
    <!-- <Header /> -->
    <div class="container" style="background:#ebebeb;height: 100%;">
      <Header />
      <slot />
      <div style="margin-bottom:30px;" />
    </div>
    <!-- <Footer /> -->
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
