<template>
  <div>
    <div class="hidden-xxs col-xs-12 col-sm-5 col-md-4">
      <h2>
        Notice
        <small>イベントお知らせ</small>
      </h2>
      <a
        class="twitter-timeline"
        height="360px"
        width="350px"
        data-theme="dark"
        data-chrome="”noheader"
        transparent”
        href="https://twitter.com/kokuryo_miya"
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
          height="360px"
          width="300px"
          data-theme="dark"
          data-chrome="”noheader"
          transparent”
          href="https://twitter.com/kokuryo_miya"
        >Tweets by kokuryo_miya</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://platform.twitter.com/widgets.js",
          charset: "utf-8",
          defer: true
        }
      ]
    };
  }
};
</script>
