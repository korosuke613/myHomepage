<template>
  <div>
    <h2>共用スペース 💃</h2>
    <p>国寮の共用スペースについて紹介します。ここで紹介する設備は各階に一つずつあります。</p>
    <div class="row row-eq-height">
      <div class="col-lg-6 col-xs-12">
        <h3>補食室 🍙</h3>
        <div class="row">
          <div class="col-sm-6 col-xs-12">
            <a
              :href="items[0].href"
              data-lightbox="image"
              data-title="補食室"
              onClick="ga('send', 'event', 'photo', 'photo', 'hosyoku')"
              class="photo dorm"
            >
              <img :src="items[0].mini" class="img-responsive img-rounded" alt="補食室">
            </a>
          </div>
          <div class="col-sm-6 col-xs-12">
            <p>補食室はご飯を食べたり個人の料理用品を置いたりするスペースです。また、各階のゴミもここに捨てます。</p>
            <p>小さなベランダもあります。奥にはキッチンがあります。</p>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-xs-12">
        <h3>キッチン 🍳</h3>
        <div class="row">
          <div class="col-sm-6 col-xs-12">
            <a
              :href="items[1].href"
              data-lightbox="image"
              data-title="キッチン"
              onClick="ga('send', 'event', 'photo', 'photo', 'kitchen')"
              class="photo dorm"
            >
              <img :src="items[1].mini" class="img-responsive img-rounded" alt="キッチン">
            </a>
          </div>
          <div class="col-sm-6 col-xs-12">
            <p>キッチンは見ての通り料理をするスペースです。いつでも使うことができます。</p>設備
            <ul>
              <li>流し台</li>
              <li>IHコンロ2台</li>
              <li>電子レンジ2台</li>
              <li>冷蔵庫3台</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-xs-12">
        <h3>談話室 📺</h3>
        <div class="row">
          <div class="col-sm-6 col-xs-12">
            <a
              :href="items[2].href"
              data-lightbox="image"
              data-title="談話室"
              onClick="ga('send', 'event', 'photo', 'photo', 'danwa')"
              class="photo dorm"
            >
              <img :src="items[2].mini" class="img-responsive img-rounded" alt="談話室">
            </a>
          </div>
          <div class="col-sm-6 col-xs-12">
            <p>談話室は自由な部屋です。階によって特色があり、例えば7階だったら写真のようなシンプルな部屋になっています。他の例をあげると、8階はゲーム機等があり、みんなで遊ぶ部屋となっています。</p>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-xs-12">
        <h3>洗濯室 👔</h3>
        <div class="row">
          <div class="col-sm-6 col-xs-12">
            <a
              :href="items[3].href"
              data-lightbox="image"
              data-title="洗濯室"
              onClick="ga('send', 'event', 'photo', 'photo', 'sentaku')"
              class="photo dorm"
            >
              <img :src="items[3].mini" class="img-responsive img-rounded" alt="洗濯室">
            </a>
          </div>
          <div class="col-sm-6 col-xs-12">
            <p>洗濯室には、洗濯機3台、乾燥機3台があります。空いている台はいつでも使うことができます。洗剤は個人で用意してください。</p>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-xs-12">
        <h3>お風呂場 🛁</h3>
        <div class="row">
          <div class="col-sm-4 col-xs-4">
            <a
              :href="items[4].href"
              data-lightbox="image"
              data-title="風呂場の廊下"
              onClick="ga('send', 'event', 'photo', 'photo', 'huroba')"
              class="photo dorm"
            >
              <img :src="items[4].mini" class="img-responsive img-rounded" alt="風呂場の廊下">
            </a>
          </div>
          <div class="col-sm-4 col-xs-4">
            <a
              :href="items[5].href"
              data-lightbox="image"
              data-title="風呂場のシャワー室"
              onClick="ga('send', 'event', 'photo', 'photo', 'shower')"
              class="photo dorm"
            >
              <img :src="items[5].mini" class="img-responsive img-rounded" alt="風呂場のシャワー室">
            </a>
          </div>
          <div class="col-sm-4 col-xs-4">
            <a
              :href="items[6].href"
              data-lightbox="image"
              data-title="風呂場の浴室"
              onClick="ga('send', 'event', 'photo', 'photo', 'bath')"
              class="photo dorm"
            >
              <img :src="items[6].mini" class="img-responsive img-rounded" alt="風呂場の浴室">
            </a>
          </div>
          <div class="col-sm-12 col-xs-12">
            <p>お風呂場は大浴場はなく、全て個室となっています。シャワー室が3部屋、浴室が2部屋あります。いつでも使えます。</p>
          </div>
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
          href: require("@/assets/images/dormitory/hosyoku.jpg"),
          mini: require("@/assets/images/dormitory/hosyoku.jpg")
        },
        {
          href: require("@/assets/images/dormitory/kitchen.jpg"),
          mini: require("@/assets/images/dormitory/kitchen.jpg")
        },
        {
          href: require("@/assets/images/dormitory/danwa.jpg"),
          mini: require("@/assets/images/dormitory/danwa.jpg")
        },
        {
          href: require("@/assets/images/dormitory/sentaku.jpg"),
          mini: require("@/assets/images/dormitory/sentaku.jpg")
        },
        {
          href: require("@/assets/images/dormitory/huroba.jpg"),
          mini: require("@/assets/images/dormitory/huroba.jpg")
        },
        {
          href: require("@/assets/images/dormitory/shower.jpg"),
          mini: require("@/assets/images/dormitory/shower.jpg")
        },
        {
          href: require("@/assets/images/dormitory/bath.jpg"),
          mini: require("@/assets/images/dormitory/bath.jpg")
        }
      ]
    };
  }
};
</script>