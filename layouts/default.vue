<template lang="pug">
  div
    el-container.whole
      el-header.header
        div.title おはゲルゲボタン(β)
        img(v-if="imageUrl()" :src="imageUrl()").twicon
      el-main.main
        nuxt
</template>

<script>
export default {
  methods: {
    imageUrl() {
      return sessionStorage.getItem('profile_image_url')
    }
  }
}
</script>

<style scoped lang="stylus">
  .title
    text-align center
    vertical-align middle
    font-size 1.3rem

    display inline-block
  .twicon
    margin-left 1rem
    vertical-align middle
    border-radius 50%
    width 30px
  .header
    background white
    text-align center
    padding-top 13px
  .main
    margin auto
</style>

<style lang="stylus">
  body
    background #f9f9f9
    margin 0
</style>
