<template>
  <div class="row">
    <div class="col-xs-12" style="background:#ebebeb;height: 100%;">
      <h1>宮崎大学国際交流宿舎の紹介（２０１７年版）</h1>
      <p>宮崎大学の寮の一つ、国際交流宿舎を紹介するページです。宮崎大学の国際交流宿舎ってどうかなと思っている高校生の皆さんの参考になればと思います。</p>
      <p>
        現寮生・元寮生向けのページは
        <nuxt-link to="/dormitory">
          こちら
        </nuxt-link>
      </p>
      <p>
        <strong>！注意！ このページは宮崎大学とは一切関係ありません。一寮生である私から見た国際寮を紹介するページになります。</strong>
      </p>
      <hr class="style-two">
      <div class="col-xs-12">
        <Abstruct />
      </div>

      <div class="col-xs-12">
        <Good />
      </div>

      <div class="col-xs-12">
        <Room />
      </div>
      <div class="col-xs-12">
        <CommonRoom />
      </div>

      <div class="col-xs-12">
        <Eval />
      </div>

      <div class="col-xs-12">
        <Around />
      </div>

      <div class="col-xs-12">
        <QandA />
      </div>

      <div class="col-xs-12">
        <Link />
      </div>

      <div class="col-xs-12">
        <Contribute />
      </div>

      <div class="col-xs-12">
        <h2>謝辞</h2>本ページを作成するにあたり、アンケートに協力していただいた皆様に感謝いたします。
      </div>
      <p />
      <div class="col-xs-12 text-right">
        <nuxt-link to="/">
          <em>戻る</em>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Abstruct from '@/components/dormitory_introduction/DormitoryAbstruct.vue'
import Good from '@/components/dormitory_introduction/GoodPoint.vue'
import Room from '@/components/dormitory_introduction/RoomDetail.vue'
import CommonRoom from '@/components/dormitory_introduction/CommonRoom.vue'
import Eval from '@/components/dormitory_introduction/EvalOther.vue'
import Around from '@/components/dormitory_introduction/AroundPlace.vue'
import QandA from '@/components/dormitory_introduction/QandA.vue'
import Link from '@/components/dormitory_introduction/LinkList.vue'
import Contribute from '@/components/dormitory_introduction/HowToContribute.vue'
import Meta from '~/assets/mixins/meta'

export default {
  components: {
    Abstruct,
    Good,
    Room,
    CommonRoom,
    Eval,
    Around,
    QandA,
    Link,
    Contribute
  },
  mixins: [Meta],
  layout: 'default',
  data () {
    return {
      meta: {
        title: '宮崎大学国際交流宿舎の紹介(2017)',
        description: '宮崎大学の寮の一つ、国際交流宿舎を紹介するページです。',
        url: this.$nuxt.$route.path
      },
      link: [
        { rel: 'canonical', href: 'https://korosuke613.dev/posts/dormitory_introduction/' }
      ]
    }
  }
}
</script>
