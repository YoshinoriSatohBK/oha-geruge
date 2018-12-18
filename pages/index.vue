<template lang="pug">
  div.this
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
        'おはゲルゲ！\r\n#ディアブルボア\r\n\r\nおはゲルゲボタンで気軽におはゲルゲ！\r\nhttps://musing-torvalds-d26081.netlify.com/'
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
  .this
    margin auto
  .button
    margin 20px 0px
</style>
