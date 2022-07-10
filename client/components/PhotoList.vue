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
const genarateGA = (title) => {
  return `ga('send', 'event', 'photo', 'photo', '${title}')`
}

export default {
  data () {
    return {
      items: [
        {
          href: '~/assets/images/aoshima.jpg',
          title: 'サンメッセ日南',
          ga: genarateGA('sanmesse'),
          mini: '~/assets/images/aoshima_mini.jpg',
          mini_webp: '~/assets/images/aoshima_mini.jpg?webp',
          alt: 'サンメッセ日南'
        },
        {
          href: '~/assets/images/fushimi.jpg',
          title: '伏見稲荷神社',
          alt: '伏見稲荷神社',
          ga: genarateGA('hushimi'),
          mini: '~/assets/images/fushimi_mini.jpg',
          mini_webp: '~/assets/images/fushimi_mini.jpg?webp'
        },
        {
          href: '~/assets/images/takatiho.jpg',
          title: '高千穂峡',
          alt: '高千穂峡',
          ga: genarateGA('takachiho'),
          mini: '~/assets/images/takatiho_mini.jpg',
          mini_webp: '~/assets/images/takatiho_mini.jpg?webp'
        },
        {
          href: '~/assets/images/kirishima.jpg',
          title: '霧島',
          alt: '霧島',
          ga: genarateGA('kirishima'),
          mini: '~/assets/images/kirishima_mini.jpg',
          mini_webp: '~/assets/images/kirishima_mini.jpg?webp'
        }
      ]
    }
  }
}
</script>
