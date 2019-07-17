<template>
  <div>
    <h1>Document</h1>
    <div v-for="item in items" :key="item.href">
      <a :href="item.href" target="_blank" rel="noopener" :onClick="item.ga">
        <span style="color:#000">{{ item.day }}</span>
        {{ item.title }}
      </a>
    </div>
    <div align="right">
      <router-link to="/document">more document</router-link>
    </div>
  </div>
</template>
<script>
import items from "@/assets/json/hatena.json";
export default {
  data() {
    return {
      items: items.slice(0, 5)
    };
  }
};
</script>
