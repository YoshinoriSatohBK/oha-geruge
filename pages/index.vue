<template lang="pug">
  div.container

    el-input(
      type="textarea"
      :rows="10"
      v-model="text"
    )
    el-button.button(
      @click.stop="tweet('morning')"
      type="primary"
      plain
      :disabled="processing"
      v-loading="processing"
    ) おはゲルゲ
    div.notice アカウントを切り替える場合は、一度ブラウザを完全に閉じるか、シークレットモードで本URLへアクセスしてください。
</template>

<script>
import { API } from 'aws-amplify'

export default {
  components: {},
  middleware: 'authenticated',
  data() {
    return {
      processing: false,
      text:
        'おはゲルゲ！\r\n#ディアブルボア\r\n\r\nおはゲルゲボタンであなたもおはゲルゲ！\r\nhttps://musing-torvalds-d26081.netlify.com/'
    }
  },
  methods: {
    async tweet(type) {
      this.processing = true
      await API.post('backend', '/tweet', {
        body: {
          access_token_key: sessionStorage.getItem('access_token'),
          access_token_secret: sessionStorage.getItem('access_token_secret'),
          text: this.text,
          type: type
        }
      })
      this.$router.push('/complete')
    }
  }
}
</script>

<style scoped lang="stylus">
  .container
    margin auto
    max-width 400px
  .button
    margin 20px 0px
  .notice
    font-size 0.8rem
</style>
