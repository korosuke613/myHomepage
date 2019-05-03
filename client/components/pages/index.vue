<template>
  <!-- 本文ブロック  -->
  <div class="container">
    <div class="row">
      <div class="col-xs-12" style="background:#ebebeb;height: 100%;">
        <Profile/>
        <hr class="style-two">
        <div class="row">
          <div class="col-sm-6">
            <Activity/>
          </div>
          <div class="col-sm-6">
            <Document/>
          </div>
          <div class="col-sm-12">
            <Photo/>
          </div>
        </div>
        <!-- 下部の空白 -->
        <div style="margin-bottom:30px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import History from "../molcules/History.vue";
import Link from "../molcules/Link.vue";
import Activity from "../molcules/Activity.vue";
import Document from "../molcules/Document.vue";
import Photo from "../molcules/Photo.vue";
import Profile from "../molcules/Profile.vue";
export default {
  layout: "default",
  components: {
    Profile,
    History,
    Link,
    Activity,
    Document,
    Photo
  },
  head() {
    return {
      title: "Korosuke613@miyazaki",
      titleTemplate: ""
    };
  }
};
</script>