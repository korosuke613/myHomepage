<template>
  <div>
    <picture >
      <source :src="require('@/assets/images/myPhoto.jpg?webp')" type="image/webp">
      <img class="img-responsive img-rounded" :src="require('@/assets/images/myPhoto.jpg')" alt="ひらこばの写真">
    </picture>
  </div>
</template>
