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
        <div>
          サイボウズ株式会社 開発本部<br />生産性向上チーム
          <br />
          <br />
          <a
            href="https://github.com/korosuke613/BWDM"
            target="_blank"
            rel="noopener"
            onClick="ga('send', 'event', 'link', 'other', 'BWDM')"
            >研究</a
          >でKotlin、<a
            href="https://github.com/KatLab-MiyazakiUniv/etrobocon2018"
            target="_blank"
            rel="noopener"
            onClick="ga('send', 'event', 'link', 'other', 'etrobocon2018')"
            >ETロボコン</a
          >でC++を扱っていました。学部の頃の研究ではPythonを扱っていました。最近はGoを勉強中です。
          <br />
          学部では<a
            href="https://github.com/korosuke613/spec2test"
            target="_blank"
            rel="noopener"
            onClick="ga('send', 'event', 'link', 'other', 'spec2test')"
            >仕様書からテストケースを生成する研究</a
          >をしていました。 <br />大学院では<a
            href="https://github.com/korosuke613/BWDM"
            target="_blank"
            rel="noopener"
            onClick="ga('send', 'event', 'link', 'other', 'BWDM')"
            >形式手法を用いて記述された仕様書からテストケースを生成する研究</a
          >を行っていました。
          <br />
          サイボウズでは生産性向上チームで開発基盤の構築・運用や開発チームの支援活動を行っています。<a
            href="https://korosuke613.hatenablog.com"
            target="_blank"
            rel="noopener"
            onClick="ga('send', 'event', 'link', 'other', 'hatenablog')"
            >ブログやってます。が、最近更新できてません。</a
          >
          <br />
        </div>
        <p>
          <span itemprop="datePublished" content="2020-06-12"
            >令和3年2月4日現在</span
          >
        </p>
      </div>
      <div class="col-sm-6">
        <History />
      </div>
      <div class="col-sm-6">
        <Link />
      </div>
    </div>
  </div>
</template>


<script>
import myPhoto from "./atoms/myPhoto.vue";
import History from "~/components/History";
export default {
  components: {
    myPhoto,
    History
  },
};
</script>
