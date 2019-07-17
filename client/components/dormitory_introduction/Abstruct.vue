<template>
  <div>
    <h2>概要</h2>
    <div class="row">
      <div class="col-sm-5 col-xs-12">
        <p>宮崎大学国際交流宿舎(以下国寮)は宮崎大学木花キャンパスにある学生寮です。寮の自治も寮生が行っています。</p>
        <p>大きな特徴は、日本人と外国人留学生が住んでいるということです。隣の部屋に外国人が住んでいることは国寮において全く珍しいことではありません。捕食室や談話室といった共用スペースもあるので、外国人留学生とのコミュニケーションも積極的に行えます。</p>
      </div>
      <div class="col-sm-7 col-xs-12">
        <a
          :href="items[0].href"
          data-lightbox="image"
          data-title="国寮正面"
          onClick="ga('send', 'event', 'photo', 'photo', 'dormitory')"
          class="photo dorm"
        >
          <picture>
            <source :srcset="items[0].mini_webp" type="image/webp" />
            <img :src="items[0].mini" class="img-responsive img-rounded" alt="国寮正面" />
          </picture>
        </a>
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
          href: require("@/assets/images/dormitory/dormitory.jpg"),
          mini: require("@/assets/images/dormitory/dormitory.jpg"),
          mini_webp: require("@/assets/images/dormitory/dormitory.jpg?webp")
        }
      ]
    };
  }
};
</script>
