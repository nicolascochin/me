import colors from 'vuetify/es5/util/colors'
import momentFork from 'moment';

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
    "@/plugins/moment",
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
    'nuxt-i18n'
  ],
  /*
  ** Nuxt?js hooks
  */
  hooks: {
    render: {
      route(url, result, context) {
        result.html = result.html.replace('<link data-n-head="ssr" rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">', '')
      }
    }
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.js' },
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'lang/',
    beforeLanguageSwitch: (oldLocale, newLocale) => console.log('fdfklsjflksdjfklsdjlkjsdkl'),
    onLanguageSwitched: (oldLocale, newLocale) => console.log(`dhskqjdhjkqshdkjqshkjd -- [${newLocale}]`)
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
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
      if (ctx && ctx.isClient) {
        config.optimization.splitChunks.maxSize = 51200
      }
    }
  }
}
