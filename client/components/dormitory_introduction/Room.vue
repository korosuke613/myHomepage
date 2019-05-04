<template>
  <div>
    <h2>居室 🏠</h2>
    <div class="row">
      <div class="col-lg-6 col-xs-12">
        <div class="row">
          <div class="col-sm-4 col-xs-4">
            <a
              href="@/assets/images/dormitory/room1.jpg"
              data-lightbox="image"
              data-title="居室1"
              onClick="ga('send', 'event', 'photo', 'photo', 'room1')"
              class="photo dorm"
            >
              <img src="@/assets/images/dormitory/room1.jpg" class="img-responsive img-rounded" alt="居室1">
            </a>
          </div>
          <div class="col-sm-4 col-xs-4">
            <a
              href="@/assets/images/dormitory/room2.jpg"
              data-lightbox="image"
              data-title="居室2"
              onClick="ga('send', 'event', 'photo', 'photo', 'room2')"
              class="photo dorm"
            >
              <img src="@/assets/images/dormitory/room2.jpg" class="img-responsive img-rounded" alt="居室2">
            </a>
          </div>
          <div class="col-sm-4 col-xs-4">
            <a
              href="@/assets/images/dormitory/toile.jpg"
              data-lightbox="image"
              data-title="トイレ"
              onClick="ga('send', 'event', 'photo', 'photo', 'toile')"
              class="photo dorm"
            >
              <img src="@/assets/images/dormitory/toile.jpg" class="img-responsive img-rounded" alt="トイレ">
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xs-12">
        <p>
          実際に国寮生が住んでいる居室について紹介します。
          <br>１人部屋で、トイレと洗面所が備え付けとなります。また、備品として、机・棚・クローゼット・ベッドがあります。
        </p>
      </div>
    </div>
  </div>
</template>
