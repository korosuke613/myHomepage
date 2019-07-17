<template>
  <div class="row">
    <div class="col-xs-12">
      <h1>Document</h1>
      <h2>Blog</h2>
      <p>
        ブログの最新記事10件です。10件より前は
        <a
          href="https://korosuke613.hatenablog.com"
          target="_blank"
          rel="noopener"
          onClick="ga('send', 'event', 'link', 'blog', 'はてなブログ')"
        >コチラ</a>。
      </p>
      <div v-for="item in hatena" :key="item.href">
        <a :href="item.href" target="_blank" rel="noopener" :onClick="item.ga">
          <span style="color:#000">{{ item.day }}</span>
          {{ item.title }}
        </a>
      </div>
      <h2>Other</h2>
      <div v-for="item in other" :key="item.href">
        <a :href="item.href" target="_blank" rel="noopener" :onClick="item.ga">
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
import hatena from "@/assets/json/hatena.json";
import { other } from "@/assets/json/DocumentsData.js";
import Meta from "~/assets/mixins/meta";
export default {
  layout: "default",
  mixins: [Meta],

  data() {
    return {
      hatena: hatena,
      other: other,
      meta: {
        title: "Document",
        description: "今まで書いた何かをまとめたページです。",
        url: this.$nuxt.$route.path
      }
    };
  }
};
</script>
