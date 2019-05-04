<template>
  <div>
    <h2>周辺施設 🏬</h2>
    <div class="col-md-8 col-xs-12">
      <a
        :href="items[0].href"
        data-lightbox="image"
        data-title="周辺地図"
        onClick="ga('send', 'event', 'photo', 'photo', 'map')"
        class="photo dorm"
      >
        <img :src="items[0].mini" class="img-responsive img-rounded" alt="周辺地図">
      </a>
      <br>
    </div>
    <div class="col-md-4 col-xs-12">
      寮から徒歩5分圏内の地図です。
      <ul>
        <li>駐輪場・駐車場🚗</li>
        <li>マックスバリュー(スーパー)🗼</li>
        <li>ジョイフル(ファミレス)🍴</li>
        <li>郵便局🏣</li>
        <li>セブンイレブン(コンビニ)🏪</li>
      </ul>
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <a
            :href="items[1].href"
            data-lightbox="image"
            data-title="駐輪場"
            onClick="ga('send', 'event', 'photo', 'photo', 'parking2')"
            class="photo dorm"
          >
            <img
              :src="items[1].mini"
              class="img-responsive img-rounded"
              alt="駐輪場"
            >駐輪場
          </a>
          <br>
        </div>
        <div class="col-md-6 col-xs-6">
          <a
            :href="items[2].href"
            data-lightbox="image"
            data-title="駐車場"
            onClick="ga('send', 'event', 'photo', 'photo', 'parking')"
            class="photo dorm"
          >
            <img
              :src="items[2].mini"
              class="img-responsive img-rounded"
              alt="駐車場"
            >駐車場
          </a>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          href: require("@/assets/images/dormitory/map.jpg"),
          mini: require("@/assets/images/dormitory/map.jpg")
        },
        {
          href: require("@/assets/images/dormitory/parking2.jpg"),
          mini: require("@/assets/images/dormitory/parking2.jpg")
        },
        {
          href: require("@/assets/images/dormitory/parking.jpg"),
          mini: require("@/assets/images/dormitory/parking.jpg")
        }
      ]
    };
  }
};
</script>
