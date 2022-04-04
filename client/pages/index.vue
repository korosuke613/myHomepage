<template>
  <div class="row">
    <div class="col-xs-12">
      <Profile />
      <div class="row">
        <div class="col-sm-6">
          <History />
        </div>
        <div class="col-sm-6">
          <Link />
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-6">
          <Activity />
        </div>
        <div class="col-sm-6">
          <Document />
        </div>
        <div class="col-sm-12">
          <Photo />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import History from '@/components/HistoryList.vue'
import Link from '@/components/LinkList.vue'
import Activity from '@/components/ActivityList.vue'
import Document from '@/components/DocumentList.vue'
import Photo from '@/components/PhotoList.vue'
import Profile from '@/components/ProfileBlock.vue'
export default {
  components: {
    Profile,
    History,
    Link,
    Activity,
    Document,
    Photo
  },
  layout: 'default',
  head () {
    return {
      title: 'Korosuke613@miyazaki',
      titleTemplate: ''
    }
  }
}
</script>
