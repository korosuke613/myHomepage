<template>
  <div class="row">
    <div class="col-xs-12">
      <h1>
        Dormitory
        <small>宮崎大学国際交流宿舎</small>
      </h1>
      <div id="dormitory">
        2014年から2018年までの間に宮崎大学国際交流宿舎の寮生だった人向けのページです。
        <br>宮崎大学国際交流宿舎への入寮を検討している人は
        <nuxt-link to="/dormitory_introduction">こちら</nuxt-link>
        <hr>
        <div class="col-xs-12 col-sm-7 col-md-8">
          <Docs/>
        </div>
        <Notice/>
        <div class="col-xs-12">
          <Youtube />
        </div>
        <div class="col-xs-12">
          <Photo />
        </div>
      </div>

      <div class="col-xs-12 text-right">
        <nuxt-link to="/"><em>戻る</em></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Docs from "@/components/dormitory/Docs.vue";
import Notice from "@/components/dormitory/Notice.vue"
import Youtube from "@/components/dormitory/Youtube.vue"
import Photo from "@/components/dormitory/Photo.vue"
export default {
  layout: "default",
  components: {
    Docs,
    Notice,
    Youtube,
    Photo
  },
  head() {
    return {
      title: "宮崎大学国際交流宿舎(2014-2018)"
    };
  }
};
</script>