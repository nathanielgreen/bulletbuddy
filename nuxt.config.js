const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Bullet Journal',
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
    { src: '~/plugins/localStorage.js', ssr: false },
    '~/plugins/vueTouchEvents.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@nuxtjs/pwa', 
      { 
        icon: {
          iconSrc: '~/static/icons/book-open.png',
        },
        manifest: {
          "name": "Bullet Journal",
          "short_name": "BuJo",
          "theme_color": "#000000",
          "background_color": "#ffffff",
          "display": "standalone",
          "orientation": "portrait",
          "Scope": "/",
          "start_url": "/",
          "icons": [
            {
              "src": "icons/icon-72x72.png",
              "sizes": "72x72",
              "type": "image/png"
            },
            {
              "src": "icons/icon-96x96.png",
              "sizes": "96x96",
              "type": "image/png"
            },
            {
              "src": "icons/icon-128x128.png",
              "sizes": "128x128",
              "type": "image/png"
            },
            {
              "src": "icons/icon-144x144.png",
              "sizes": "144x144",
              "type": "image/png"
            },
            {
              "src": "icons/icon-152x152.png",
              "sizes": "152x152",
              "type": "image/png"
            },
            {
              "src": "icons/icon-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
            },
            {
              "src": "icons/icon-384x384.png",
              "sizes": "384x384",
              "type": "image/png"
            },
            {
              "src": "icons/icon-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
            }
          ],
          "splash_pages": null
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
