<template>
  <div>
    <h1>404エラー</h1>
    <p>お探しのページはありません...</p>
    <br>
    <h2>Google検索から来た人や、リンクを飛んで来た人へ</h2>
    <p>
      すみません、リンクが変わっている可能性があります。
      <br>もしかして、お探しのページは
      <NuxtLink to="/dormitory_introduction">
        宮崎大学国際交流宿舎の紹介(2017)
      </NuxtLink>
    </p>
    <br>
    <p>
      <NuxtLink to="/">
        トップページはこちら
      </NuxtLink>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })

definePageMeta({
  layout: 'default'
})
</script>
