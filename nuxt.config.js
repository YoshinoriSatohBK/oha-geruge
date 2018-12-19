const pkg = require('./package')

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'おはゲルゲボタン' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'おはゲルゲボタン' },
      { property: 'og:url', content: 'https://oha-geruge.netlify.com' },
      { property: 'og:description', content: 'おはゲルゲボタン' },
      // { property: 'og:image', content: this.$store.state.assetsHost + '/article/' + this.article.id + '/head.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@5f78xJ5NGn5sljw' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['element-ui/lib/theme-chalk/index.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/aws-amplify', '@/plugins/element-ui'],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    Amplify: {
      API: {
        endpoints: [
          {
            name: 'backend',
            endpoint:
              'https://97rrz7ttfd.execute-api.ap-northeast-1.amazonaws.com/Prod',
            region: 'ap-northeast-1'
          }
        ]
      },
      Analytics: {
        disabled: true
      }
    }
  }
}
