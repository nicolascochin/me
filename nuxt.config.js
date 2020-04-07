export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/eventBus",
    "@/plugins/export_moment",
    "@/plugins/export_i18n",
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-i18n',
    '@nuxtjs/moment',
    'nuxt-webfontloader',
  ],
  /*
  ** Nuxt.js hooks (unused thanks to defaultAssets: false,)
  */
  // hooks: {
  //   render: {
  //     route(url, result, context) {
  //       result.html = result.html.replace('<link data-n-head="ssr" rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">', '')
  //     }
  //   },
  //   generate: {
  //     page(page) {
  //       page.html = page.html.replace('<link data-n-head="ssr" rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">', '')
  //     }
  //   },
  // },
  /*
  ** @nuxtjs/moment config
  */
  moment: {
    locales: ['fr'],
    defaultLocale: 'fr',
    plugins: [
      'moment-precise-range-plugin',
    ]
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.js' },
      { code: 'fr', name: 'Français', iso: 'fr-FR', file: 'fr.js' },
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    lazy: true,
    seo: false,
    langDir: 'lang/',
  },
  webfontloader: {
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap']
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: false,
    optionsPath: './vuetify.options.js',
    theme: {
      // dark: true,
      // themes: {
      //   dark: {
      //     primary: colors.blue.darken2,
      //     accent: colors.grey.darken3,
      //     secondary: colors.amber.darken3,
      //     info: colors.teal.lighten1,
      //     warning: colors.amber.base,
      //     error: colors.deepOrange.accent4,
      //     success: colors.green.accent3
      //   }
      // }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    // extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // if (ctx && ctx.isClient) {
      //   config.optimization.splitChunks.maxSize = 51200
      // }
      if (ctx && ctx.isClient) {
        config.optimization.splitChunks.maxSize = 51200 * 18      }
    }
  }
}
