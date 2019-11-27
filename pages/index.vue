<template lang="pug">
  div.container
    div.description 簡単におはゲルゲツイートできます。
    div.description_sub （ディアブルボア ハルカちゃんやペンネちゃんの画像とともに以下のテキストがツイートされます。）
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
      text: 'おはゲルゲ！\r\n#ディアブルボア\r\n#0917ディアブルボア赤羽ReNY\r\n\r\nおはゲルゲボタンで気軽におはゲルゲ！\r\nhttps://oha-geruge.netlify.com/'
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
  .description
    margin 10px
    font-size 1rem
  .description_sub
    margin 10px
    font-size 0.8rem
  .notice
    font-size 0.8rem
</style>
