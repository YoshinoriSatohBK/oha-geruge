import { API } from 'aws-amplify'

export default async function({ store, redirect }) {
  if (localStorage.getItem('access_token')) {
    const res = await API.get('backend', '/get_user', {
      body: {
        access_token_key: localStorage.getItem('access_token'),
        access_token_secret: localStorage.getItem('access_token_secret')
      }
    })
    console.log(res)
    sessionStorage.setItem('profile_image_url', res.profile_image_url)
  } else {
    const res = await API.post('backend', '/request_token', {})
    localStorage.setItem('oauth_token', res.oauth_token)
    localStorage.setItem('oauth_token_secret', res.oauth_token_secret)
    // return redirect(
    //   'https://api.twitter.com/oauth/authenticate?oauth_token=' +
    //     res.oauth_token
    // )
  }
}
