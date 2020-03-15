module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700&display=swap' },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" }
    ],
    script: [
        { src:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
        { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' },
      ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css',
    'slick-carousel/slick/slick.css',
    'slick-carousel/slick/slick-theme.css'
  ],
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    sass: [
      '@/assets/sass/_mixins.sass'
      ]
  },
  plugins: [
    { src: "~plugins/slick-slide.js", mode: 'client' }
],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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

