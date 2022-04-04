<template>
  <div>
    <div class="hidden-xxs col-xs-12 col-sm-5 col-md-4">
      <h2>
        Notice
        <small>イベントお知らせ</small>
      </h2>
      <a
        class="twitter-timeline"
        data-width="360"
        data-height="350"
        data-theme="dark"
        data-link-color="#9266CC"
        href="https://twitter.com/kokuryo_miya?ref_src=twsrc%5Etfw"
      >Tweets by kokuryo_miya</a>
    </div>
    <div class="visible-xxs col-xxs-12">
      <h2>
        Notice
        <small>イベントお知らせ</small>
      </h2>
      <div style="text-align:center;">
        <a
          class="twitter-timeline"
          data-width="360"
          data-height="300"
          data-theme="dark"
          data-link-color="#9266CC"
          href="https://twitter.com/kokuryo_miya?ref_src=twsrc%5Etfw"
        >Tweets by kokuryo_miya</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      script: [
        {
          src: 'https://platform.twitter.com/widgets.js',
          charset: 'utf-8',
          defer: true
        }
      ]
    }
  }
}
</script>
