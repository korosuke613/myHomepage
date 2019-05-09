<template>
  <div>
    <h1>Activity</h1>
    <div v-for="item in items" :key="item.href">
      <a :href="item.href" target="_blank" rel="noopener" :onClick="item.ga" class="make">
        <span style="color:#000">{{item.day}}</span>
        {{item.title}}
      </a>
    </div>
    <div align="right">
      <router-link to="/activity">more activity</router-link>
    </div>
  </div>
</template>

<script>
import { items } from "@/assets/json/ActivityData.js";
export default {
  data() {
    return {
      items: items.slice(0, 6)
    };
  }
};
</script>
