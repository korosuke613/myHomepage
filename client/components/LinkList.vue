<template>
  <div>
    <h1>Link</h1>
    <ul class="list-inline">
      <li>
        <a
          href="https://github.com/korosuke613"
          target="_blank"
          rel="noopener"
          onClick="ga('send', 'event', 'link', 'sns', 'Github')"
          class="sns"
        >
          <img src="https://img.shields.io/badge/-Github-181717?style=flat&logo=github">
        </a>
      </li>
      <li>
        <a
          href="https://korosuke613.hatenablog.com"
          target="_blank"
          rel="noopener"
          onClick="ga('send', 'event', 'link', 'other', 'hatenablog')"
        >
          <img src="https://img.shields.io/badge/-Blog-9F55FF?style=flat&logo=blogger&logoColor=white">
        </a>
      </li>
      <li>
        <a
          href="https://zenn.dev/korosuke613"
          target="_blank"
          rel="noopener"
          onClick="ga('send', 'event', 'link', 'other', 'zenn')"
        >
          <img src="https://img.shields.io/badge/-Zenn-3EA8FF?style=flat&logo=zenn&logoColor=white">
        </a>
      </li>
      <li>
        <a
          href="http://qiita.com/Shitimi_613"
          target="_blank"
          rel="noopener"
          onClick="ga('send', 'event', 'link', 'sns', 'Qiita')"
          class="sns"
        >
          <img src="https://img.shields.io/badge/-Qiita-55C500?style=flat&logo=qiita&logoColor=white">
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/Shitimi_613"
          target="_blank"
          rel="noopener"
          onClick="ga('send', 'event', 'link', 'sns', 'Twitter')"
          class="sns"
        >
          <img src="https://img.shields.io/badge/-Twitter-1DA1F2?style=flat&logo=twitter&logoColor=white">
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/futa.hirakoba.5"
          target="_blank"
          rel="noopener"
          onClick="ga('send', 'event', 'link', 'sns', 'Facebook')"
          class="sns"
        >
          <img src="https://img.shields.io/badge/-Facebook-1877F2?style=flat&logo=facebook&logoColor=white">
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/kwlv613/"
          target="_blank"
          rel="noopener"
          onClick="ga('send', 'event', 'link', 'sns', 'instagram')"
          class="sns"
        >
          <img src="https://img.shields.io/badge/-Instagram-E4405F?style=flat&logo=instagram&logoColor=white">
        </a>
      </li>
    </ul>
    <NuxtLink to="/dormitory_introduction">
      宮崎大学国際交流宿舎の紹介ページ(2017)
    </NuxtLink>
    <NuxtLink to="/dormitory">
      宮崎大学国際交流宿舎の寮生向けページ(2017)
    </NuxtLink>
    <br>
    <a
      href="http://earth.cs.miyazaki-u.ac.jp/"
      target="_blank"
      rel="noopener"
      onClick="ga('send', 'event', 'link', 'other', 'katlab')"
    >片山徹郎研究室</a>
    <br>
    <a
      href="http://earth.cs.miyazaki-u.ac.jp/~miyaji/"
      target="_blank"
      rel="noopener"
      onClick="ga('send', 'event', 'link', 'other', 'Miyaji')"
    >研究室の友達、宮地俊宏くんのHP</a>
    <br>
    <a
      href="https://tatsumi0000.github.io/tatsumi0000/#/top"
      target="_blank"
      rel="noopener"
      onClick="ga('send', 'event', 'link', 'other', 'Nishida')"
    >研究室の友達、西田龍登くんのHP</a>
  </div>
</template>

<script>
export default {}
</script>
