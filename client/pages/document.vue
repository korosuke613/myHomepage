<template>
  <div class="row">
    <div class="col-xs-12">
      <h1>Document</h1>
      <div v-for="item in items" :key="item.href">
        <a :href="item.href" target="_blank" :onClick="item.ga">
          <span style="color:#000">{{item.day}}</span>
          {{item.title}}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { items } from "@/assets/json/DocumentsData.js";
export default {
  layout: "default",

  data() {
    return {
      items: items
    };
  },
  head() {
    return {
      title: "Document"
    };
  }
};
</script>
