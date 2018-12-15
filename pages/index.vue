<template lang="pug">
  div
    el-button.button(@click.stop="login()") Login
    el-button.button おはゲルゲ
</template>

<script>
import { API } from 'aws-amplify'

export default {
  components: {},
  method: {
    login() {
      API.post('backend', '/post', param)
    }
  }
}
</script>

<style scoped lang="stylus">
  .button
    margin 20px
</style>
