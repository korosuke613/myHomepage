<template>
  <div>
    <Header />
    <div class="container" style="background:#ebebeb;height: 100%;">
      <div
        style="text-align: center; font-weight: lighter; background-color: gray; color: white;"
      >
        このホームページは廃止されました。新ホームページは <a
          href="https://korosuke613.dev/"
          target="_blank"
          rel="noopener"
          style="color: wheat"
        >korosuke613.dev</a> です。
      </div>
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
