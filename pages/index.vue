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
    ) おはゲルゲ
</template>

<script>
import { API } from 'aws-amplify'

export default {
  components: {},
  middleware: 'authenticated',
  data() {
    return {
      text:
        'おはゲルゲ\rおはゲルゲボタンで、あなたも簡単におはゲルゲ！\rhttps://musing-torvalds-d26081.netlify.com/\r#ディアブルボア'
    }
  },
  methods: {
    async tweet(type) {
      const res = await API.post('backend', '/tweet', {
        body: {
          access_token_key: localStorage.getItem('access_token'),
          access_token_secret: localStorage.getItem('access_token_secret'),
          text: this.text,
          type: type
        }
      })
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
