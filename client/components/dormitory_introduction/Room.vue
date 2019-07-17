<template>
  <div>
    <h2>居室 🏠</h2>
    <div class="row">
      <div class="col-lg-6 col-xs-12">
        <div class="row">
          <div class="col-sm-4 col-xs-4">
            <a
              :href="items[0].href"
              data-lightbox="image"
              data-title="居室1"
              onClick="ga('send', 'event', 'photo', 'photo', 'room1')"
              class="photo dorm"
            >
              <img :src="items[0].mini" class="img-responsive img-rounded" alt="居室1" />
            </a>
          </div>
          <div class="col-sm-4 col-xs-4">
            <a
              :href="items[1].href"
              data-lightbox="image"
              data-title="居室2"
              onClick="ga('send', 'event', 'photo', 'photo', 'room2')"
              class="photo dorm"
            >
              <img :src="items[1].mini" class="img-responsive img-rounded" alt="居室2" />
            </a>
          </div>
          <div class="col-sm-4 col-xs-4">
            <a
              :href="items[2].href"
              data-lightbox="image"
              data-title="トイレ"
              onClick="ga('send', 'event', 'photo', 'photo', 'toile')"
              class="photo dorm"
            >
              <img :src="items[2].mini" class="img-responsive img-rounded" alt="トイレ" />
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xs-12">
        <p>
          実際に国寮生が住んでいる居室について紹介します。
          <br />１人部屋で、トイレと洗面所が備え付けとなります。また、備品として、机・棚・クローゼット・ベッドがあります。
        </p>
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
          href: require("@/assets/images/dormitory/room1.jpg"),
          mini: require("@/assets/images/dormitory/room1.jpg")
        },
        {
          href: require("@/assets/images/dormitory/room2.jpg"),
          mini: require("@/assets/images/dormitory/room2.jpg")
        },
        {
          href: require("@/assets/images/dormitory/toile.jpg"),
          mini: require("@/assets/images/dormitory/toile.jpg")
        }
      ]
    };
  }
};
</script>