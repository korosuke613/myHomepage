<template>
  <div>
    <h1>Link</h1>
    <ul class="list-inline">
      <li>
        <a
          href="https://korosuke613.hatenablog.com"
          target="_blank"
          onClick="ga('send', 'event', 'link', 'other', 'hatenablog')"
        >
          <i class="fa fa-sticky-note">Blog</i>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/korosuke613"
          target="_blank"
          onClick="ga('send', 'event', 'link', 'sns', 'Github')"
          class="sns"
        >
          <i class="fa fa-github">Github</i>
        </a>
      </li>
      <li>
        <a
          href="http://qiita.com/Shitimi_613"
          target="_blank"
          onClick="ga('send', 'event', 'link', 'sns', 'Qiita')"
          class="sns"
        >
          <span class="fa-stack">
            <i class="fa fa-square fa-stack-1x"></i>
            <i class="fa fa-search fa-stack-1x fa-inverse"></i>
          </span>Qiita
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/Shitimi_613"
          target="_blank"
          onClick="ga('send', 'event', 'link', 'sns', 'Twitter')"
          class="sns"
        >
          <i class="fa fa-twitter">Twitter</i>
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/futa.hirakoba.5"
          target="_blank"
          onClick="ga('send', 'event', 'link', 'sns', 'Facebook')"
          class="sns"
        >
          <i class="fa fa-facebook">Facebook</i>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/kwlv613/"
          target="_blank"
          onClick="ga('send', 'event', 'link', 'sns', 'instagram')"
          class="sns"
        >
          <i class="fa fa-instagram">Instagram</i>
        </a>
      </li>
    </ul>
    <a href="./dormitory_introduction.html">宮崎大学国際交流宿舎の紹介ページ(2017)</a>
    <router-link to="./dormitory">宮崎大学国際交流宿舎の寮生向けページ(2017)</router-link>
    <a
      href="http://earth.cs.miyazaki-u.ac.jp/~miyaji/"
      target="_blank"
      onClick="ga('send', 'event', 'link', 'other', 'Miyaji')"
    >研究室の友達、宮地俊宏くんのHP</a>
  </div>
</template>

<script>
export default {};
</script>