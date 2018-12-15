<template lang="pug">
  div
    el-button.button(@click.stop="login()") Login
    el-button.button おはゲルゲ
</template>

<script>
import { API } from 'aws-amplify'

export default {
  components: {},
  methods: {
    async login() {
      const res = await API.post('backend', '/request_token', {})
      sessionStorage.setItem('oauth_token', res.oauth_token)
      sessionStorage.setItem('oauth_token_secret', res.oauth_token_secret)
      window.location =
        'https://api.twitter.com/oauth/authenticate?oauth_token=' +
        res.oauth_token
    }
  }
}
</script>

<style scoped lang="stylus">
  .button
    margin 20px
</style>
