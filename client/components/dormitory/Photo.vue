<template>
  <div>
    <h2>
      Photos
      <small>イベント写真</small>
    </h2>
    <p>
      パスワードは"僕の部屋番号"と"僕が寮長の時の副寮長の名字をローマ字にしたもの"をつなげたものです。
      <br>例）K101号室で副寮長の名前が倉元の場合→"101kuramoto"
    </p>

    <div class="col-sm-4 col-xs-6">
      <a
        href="https://opa.cig2.imagegateway.net/s/cp/HH32ADAJChy"
        target="_blank"
        onClick="ga('send', 'event', 'link', 'photo', '201704 bare-')"
      >
        <img src="@/assets/images/dormitory/2017bare-.jpg" class="img-responsive img-rounded">
      </a>
      <span id="photoname">2017/04 バレーカレー</span>
      <hr>
    </div>
    <div class="col-sm-4 col-xs-6">
      <a
        href="https://opa.cig2.imagegateway.net/s/cp/HWC5xCMfSjQ"
        target="_blank"
        onClick="ga('send', 'event', 'link', 'photo', '201611 gakusai')"
      >
        <img src="@/assets/images/dormitory/2016gakusai.jpg" class="img-responsive img-rounded">
      </a>
      <span id="photoname">2016/11 学祭</span>
      <hr>
    </div>

    <div class="col-sm-4 col-xs-6">
      <a
        href="https://opa.cig2.imagegateway.net/s/cp/C5yxMXfcu73"
        target="_blank"
        onClick="ga('send', 'event', 'link', 'photo', '201610 kyugi')"
      >
        <img src="@/assets/images/dormitory/2016kyugi.jpg" class="img-responsive img-rounded">
      </a>
      <span id="photoname">2016/10 球技大会</span>
      <hr>
    </div>

    <div class="col-sm-4 col-xs-6">
      <a
        href="https://opa.cig2.imagegateway.net/s/cp/FQSs3dBRR52"
        target="_blank"
        onClick="ga('send', 'event', 'link', 'photo', '201610 ensoku')"
      >
        <img src="@/assets/images/dormitory/2016ensoku.jpg" class="img-responsive img-rounded">
      </a>
      <span id="photoname">2016/10 遠足</span>
      <hr>
    </div>
    <div class="col-sm-4 col-xs-6">
      <a
        href="https://opa.cig2.imagegateway.net/s/cp/DZWKfVTL2jR"
        target="_blank"
        onClick="ga('send', 'event', 'link', 'photo', '201607 sososo')"
      >
        <img src="@/assets/images/dormitory/2016sososo.jpg" class="img-responsive img-rounded">
      </a>
      <span id="photoname">2016/07 そそそ会</span>
      <hr>
    </div>
    <div class="col-sm-4 col-xs-6">
      <a
        href="https://opa.cig2.imagegateway.net/s/cp/EhHswWMNTZE"
        target="_blank"
        onClick="ga('send', 'event', 'link', 'photo', '201604 bare-')"
      >
        <img src="@/assets/images/dormitory/2016bare-.jpg" class="img-responsive img-rounded">
      </a>
      <span id="photoname">2016/04 バレーカレー</span>
      <hr>
    </div>
    <div class="col-sm-4 col-xs-6">
      <a
        href="https://opa.cig2.imagegateway.net/s/cp/DuuBeHDSjC4"
        target="_blank"
        onClick="ga('send', 'event', 'link', 'photo', '201511 gakusai')"
      >
        <img src="@/assets/images/dormitory/2015gakusai.jpg" class="img-responsive img-rounded">
      </a>
      <span id="photoname">2015/11 学祭</span>
      <hr>
    </div>
    <div class="col-sm-4 col-xs-6">
      <a
        href="https://opa.cig2.imagegateway.net/s/album/DYRNKyxFF4V"
        target="_blank"
        onClick="ga('send', 'event', 'link', 'photo', '201510 halowin')"
      >
        <img src="@/assets/images/dormitory/2015haro.jpg" class="img-responsive img-rounded">
      </a>
      <span id="photoname">2015/10 ハロウィン</span>
      <hr>
    </div>
    <div class="col-sm-4 col-xs-6">
      <a
        href="https://opa.cig2.imagegateway.net/s/album/HedYYzPY4AA"
        target="_blank"
        onClick="ga('send', 'event', 'link', 'photo', '201510 ensoku')"
      >
        <img src="@/assets/images/dormitory/2015ensoku.jpg" class="img-responsive img-rounded">
      </a>
      <span id="photoname">2015/10 遠足</span>
      <hr>
    </div>
    <div class="col-sm-4 col-xs-6">
      <a
        href="http://opa.cig2.imagegateway.net/s/album/EC7UxKPnNK8"
        target="_blank"
        onClick="ga('send', 'event', 'link', 'photo', '201507 sososo')"
      >
        <img src="@/assets/images/dormitory/2015sososo.jpg" class="img-responsive img-rounded">
      </a>
      <span id="photoname">2015/07 そそそ会</span>
      <hr>
    </div>
    <div class="col-sm-4 col-xs-6">
      <a
        href="http://opa.cig2.imagegateway.net/s/album/DKZHPZLfFrS"
        target="_blank"
        onClick="ga('send', 'event', 'link', 'photo', '201506 taikukan')"
      >
        <img src="@/assets/images/dormitory/2015taikukan.jpg" class="img-responsive img-rounded">
      </a>
      <span id="photoname">2015/06 国寮大運動会(体育館)</span>
      <hr>
    </div>
    <div class="col-sm-4 col-xs-6">
      <a
        href="http://opa.cig2.imagegateway.net/s/album/GNijfnSaaPf"
        target="_blank"
        onClick="ga('send', 'event', 'link', 'photo', '201506 soto')"
      >
        <img src="@/assets/images/dormitory/2015soto.jpg" class="img-responsive img-rounded">
      </a>
      <span id="photoname">2015/06 国寮大運動会(外)</span>
      <hr>
    </div>
    <div class="col-sm-4 col-xs-6">
      <a
        href="http://opa.cig2.imagegateway.net/s/album/BMiHaGBDcxC"
        target="_blank"
        onClick="ga('send', 'event', 'link', 'photo', '201505 kaeda')"
      >
        <img src="@/assets/images/dormitory/2015kaeda.jpg" class="img-responsive img-rounded">
      </a>
      <span id="photoname">2015/05 加江田ウォークラリー</span>
      <hr>
    </div>
  </div>
</template>
