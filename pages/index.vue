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
      disabled="processing"
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
        'おはゲルゲ！\r#ディアブルボア\r\rおはゲルゲボタンであなたも気軽におはゲルゲ！\rhttps://musing-torvalds-d26081.netlify.com/\r'
    }
  },
  methods: {
    async tweet(type) {
      await API.post('backend', '/tweet', {
        body: {
          access_token_key: localStorage.getItem('access_token'),
          access_token_secret: localStorage.getItem('access_token_secret'),
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
