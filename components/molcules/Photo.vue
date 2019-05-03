<template>
  <div>
    <h1>Photo</h1>
    <div class="row">
      <div class="col-xs-3">
        <a
          href="images/aoshima.jpg"
          data-lightbox="image"
          data-title="サンメッセ日南"
          onClick="ga('send', 'event', 'photo', 'photo', 'sanmesse')"
          class="photo"
        >
          <img src="images/aoshima_mini.jpg" class="img-responsive img-rounded" alt>
        </a>
      </div>
      <div class="col-xs-3">
        <a
          href="images/fushimi.jpg"
          data-lightbox="image"
          data-title="伏見稲荷神社"
          onClick="ga('send', 'event', 'photo', 'photo', 'hushimi')"
          class="photo"
        >
          <img src="images/fushimi_mini.jpg" class="img-responsive img-rounded" alt>
        </a>
      </div>
      <div class="col-xs-3">
        <a
          href="images/takatiho.jpg"
          data-lightbox="image"
          data-title="高千穂峡"
          onClick="ga('send', 'event', 'photo', 'photo', 'takachiho')"
          class="photo"
        >
          <img src="images/takatiho_mini.jpg" class="img-responsive img-rounded" alt>
        </a>
      </div>
      <div class="col-xs-3">
        <a
          href="images/kirishima.jpg"
          data-lightbox="image"
          data-title="霧島"
          onClick="ga('send', 'event', 'photo', 'photo', 'kirishima')"
          class="photo"
        >
          <img src="images/kirishima_mini.jpg" class="img-responsive img-rounded" alt>
        </a>
      </div>
    </div>
  </div>
</template>
