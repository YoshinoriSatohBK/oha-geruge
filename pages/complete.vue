<template lang="pug">
  div
    div.complete-text おはゲルゲ完了！
    el-row
      el-col(:span="8")
        img(src="https://pbs.twimg.com/profile_images/1058000656500322304/uSGYRaZo_400x400.jpg").twicon
      el-col(:span="16")
        div.profile-text ハルカ 🦇ディアブルボア6/1初ワンマン
        a.twitter-follow-button(
          href="https://twitter.com/haluka0919"
          :data-size="followButtonSize"
          :data-show-count="showCount"
        ) Follow
    div
      a.twitter-timeline(
        href="https://twitter.com/haluka0919"
        :data-tweet-limit="5"
        :data-width="400"
        :data-height="300"
      )
    script(
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    )
</template>

<script>
export default {
  data() {
    return {
      followButtonSize: 'medium',
      showCount: 'false'
    }
  }
}
</script>

<style scoped lang="stylus">
  .this
    margin auto
  .button
    margin 20px 0px
  .profile-text
    font-size 0.8rem
  .twicon
    margin-left 1rem
    margin-right 20px
    margin-bottom 20px
    vertical-align middle
    border-radius 50%
    width 80px
  .complete-text
    text-align center
    font-size 1.2rem
    margin-bottom 14px
</style>
