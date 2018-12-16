import { API } from 'aws-amplify'

export default async function({ store, redirect }) {
  // ユーザーが認証されていないとき
  console.log()
  if (!localStorage.getItem('access_token')) {
    const res = await API.post('backend', '/request_token', {})
    localStorage.setItem('oauth_token', res.oauth_token)
    localStorage.setItem('oauth_token_secret', res.oauth_token_secret)
    return redirect(
      'https://api.twitter.com/oauth/authenticate?oauth_token=' +
        res.oauth_token
    )
  }
}
