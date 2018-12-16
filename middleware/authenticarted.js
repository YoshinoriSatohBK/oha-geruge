import { API } from 'aws-amplify'

export default async function({ store, redirect }) {
  // ユーザーが認証されていないとき
  if (!this.$cookie.get('accessToken')) {
    const res = await API.post('backend', '/request_token', {})
    this.$cookie.set('oauth_token', res.oauth_token)
    this.$cookie.set('oauth_token_secret', res.oauth_token_secret)
    return redirect(
      'https://api.twitter.com/oauth/authenticate?oauth_token=' +
        res.oauth_token
    )
  }
}
