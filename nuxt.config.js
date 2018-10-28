const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Bullet Buddy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vueTouchEvents.js',
    { src: '~/plugins/pouchdb', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@nuxtjs/pwa', 
      { 
        manifest: {
          "name": "Bullet Buddy",
          "short_name": "Bullet Buddy",
          "theme_color": "#000000",
          "background_color": "#ffffff",
          "display": "standalone",
          "orientation": "portrait",
          "Scope": "/",
          "start_url": "/",
          "splash_pages": null,
          "lang": "en",
        },
      }
    
    ]
  ],

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
  }
}
