<template>
  <div>
    <h1>Profile</h1>
    <div class="row">
      <div class="col-sm-12 col-md-8">
        <myPhoto />
      </div>
      <div class="col-sm-12 col-md-4">
        <h2>
          平木場風太
          <small>（写真真ん中）</small>
        </h2>
        <p>
          宮崎大学 工学研究科 工学専攻 機械・情報系コース 修士課程1年 片山(徹)研究室所属
          <br>
          <br>
          <a
            href="https://github.com/korosuke613/BWDM"
            target="_blank"
            onClick="ga('send', 'event', 'link', 'other', 'BWDM')"
          >研究</a>でKotlin、
          <a
            href="https://github.com/KatLab-MiyazakiUniv/etrobocon2018"
            target="_blank"
            onClick="ga('send', 'event', 'link', 'other', 'etrobocon2018')"
          >ETロボコン</a>でC++を扱っています。
          学部の頃の研究でPythonを扱っていました。また、Javascriptを勉強中です。
          <br>
          <a
            href="https://github.com/korosuke613/spec2test"
            target="_blank"
            onClick="ga('send', 'event', 'link', 'other', 'spec2test')"
          >仕様書からテストケースを生成する研究</a>をしていました。
          <br>現在は
          <a
            href="https://github.com/korosuke613/BWDM"
            target="_blank"
            onClick="ga('send', 'event', 'link', 'other', 'BWDM')"
          >形式手法を用いて記述された仕様書からテストケースを生成する研究</a>を行っています。
          <br>
          <a
            href="https://korosuke613.hatenablog.com"
            target="_blank"
            onClick="ga('send', 'event', 'link', 'other', 'hatenablog')"
          >ブログ始めました。</a>
        </p>
        <p>
          <span itemprop="datePublished" content="2019-02-24">平成31年2月24日現在</span>
        </p>
      </div>
      <div class="col-sm-6">
        <History/>
      </div>
      <div class="col-sm-6">
        <Link/>
      </div>
    </div>
  </div>
</template>


<script>
import myPhoto from "./atoms/myPhoto.vue";
export default {
  components: {
    myPhoto
  }
};
</script>