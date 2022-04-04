<template>
  <div>
    <h1>404エラー</h1>
    <p>お探しのページはありません...</p>
    <br>
    <h2>Google検索から来た人や、リンクを飛んで来た人へ</h2>
    <p>
      すみません、リンクが変わっている可能性があります。
      <br>もしかして、お探しのページは
      <nuxt-link to="/dormitory_introduction">
        宮崎大学国際交流宿舎の紹介(2017)
      </nuxt-link>
    </p>
    <br>
    <p>
      <nuxt-link to="/">
        トップページはこちら
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  /* eslint-disable-next-line vue/require-prop-types */
  props: ['error'] // エラーページ用のカスタムレイアウトを指定できます
}
</script>
