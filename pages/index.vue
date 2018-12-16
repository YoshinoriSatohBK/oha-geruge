<template lang="pug">
  div
    el-button.button(@click.stop="tweet()") おはゲルゲ
</template>

<script>
import { API } from 'aws-amplify'

export default {
  components: {},
  middleware: 'authenticated',
  methods: {
    async tweet() {
      const res = await API.post('backend', '/tweet', {
        body: {
          access_token_key: localStorage.getItem('access_token'),
          access_token_secret: localStorage.getItem('access_token_secret'),
          text: 'おはゲルゲ\rこんにちゲルゲ'
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .button
    margin 20px
</style>
