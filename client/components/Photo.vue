<template>
  <div>
    <h1>Photo</h1>
    <div class="row">
      <div v-for="item in items" :key="item.href">
        <div class="col-xs-3">
          <a
            :href="item.href"
            data-lightbox="image"
            :data-title="item.title"
            :onClick="item.ga"
            class="photo"
          >
            <picture>
              <source :srcset="item.mini_webp" type="image/webp">
              <img class="img-responsive img-rounded" :src="item.mini" :alt="item.alt">
            </picture>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const genarateGA = title => {
  return `ga('send', 'event', 'photo', 'photo', '${title}\')`;
};

export default {
  data() {
    return {
      items: [
        {
          href: require("~/assets/images/aoshima.jpg"),
          title: "サンメッセ日南",
          ga: genarateGA("sanmesse"),
          mini: require("~/assets/images/aoshima_mini.jpg"),
          mini_webp: require("~/assets/images/aoshima_mini.jpg?webp"),
          alt: "サンメッセ日南"
        },
        {
          href: require("~/assets/images/fushimi.jpg"),
          title: "伏見稲荷神社",
          alt: "伏見稲荷神社",
          ga: genarateGA("hushimi"),
          mini: require("~/assets/images/fushimi_mini.jpg"),
          mini_webp: require("~/assets/images/fushimi_mini.jpg?webp")
        },
        {
          href: require("~/assets/images/takatiho.jpg"),
          title: "高千穂峡",
          alt: "高千穂峡",
          ga: genarateGA("takachiho"),
          mini: require("~/assets/images/takatiho_mini.jpg"),
          mini_webp: require("~/assets/images/takatiho_mini.jpg?webp")
        },
        {
          href: require("~/assets/images/kirishima.jpg"),
          title: "霧島",
          alt: "霧島",
          ga: genarateGA("kirishima"),
          mini: require("~/assets/images/kirishima_mini.jpg"),
          mini_webp: require("~/assets/images/kirishima_mini.jpg?webp")
        }
      ]
    };
  }
};
</script>

