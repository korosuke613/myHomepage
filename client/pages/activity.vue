<template>
  <div class="row">
    <div class="col-xs-12">
      <h1>Activity</h1>
      <div v-for="item in items" :key="item.href">
        <a :href="item.href" target="_blank" rel="noopener" :onClick="item.ga" class="make">
          <span style="color:#000">{{ item.day }}</span>
          {{ item.title }}
        </a>
      </div>
    </div>
    <div class="col-xs-12 text-right">
      <nuxt-link to="/">
        <em>戻る</em>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { items } from '@/assets/json/ActivityData.js'
import Meta from '~/assets/mixins/meta'

export default {
  mixins: [Meta],
  layout: 'default',

  data () {
    return {
      items,
      meta: {
        title: 'Activity',
        description: '今まで作ったもの？をまとめたページです。',
        url: this.$nuxt.$route.path
      }
    }
  }
}
</script>
