<template lang="pug">
  div おはゲルゲ
</template>

<script>
import { API } from 'aws-amplify'

export default {
  components: {},
  asyncData(context) {
    return {
      oauth_token: context.query.oauth_token,
      oauth_verifier: context.query.oauth_verifier
    }
  },
  async mounted() {
    await this.access_token()
  },
  methods: {
    async access_token() {
      const res = await API.post('backend', '/access_token', {
        body: {
          oauth_token: this.oauth_token,
          oauth_token_secret: sessionStorage.getItem('oauth_token_secret'),
          oauth_verifier: this.oauth_verifier
        }
      })
      sessionStorage.setItem('access_token', res.access_token)
      sessionStorage.setItem('access_token_secret', res.access_token_secret)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="stylus">
  .button
    margin 20px
</style>
