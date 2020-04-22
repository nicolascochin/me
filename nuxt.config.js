export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: `%s | Nicolas COCHIN`,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: "preconnect", href: "https://fonts.gstatic.com/", crossorigin: "true" },
      { rel: "preconnect", href: "https://fonts.googleapis.com/", crossorigin: "true" },
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
    "@/plugins/export_i18n",
    "@/plugins/vee-validate",
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
    '@nuxtjs/axios',
    'nuxt-i18n',
    'nuxt-webfontloader',
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    hostname: 'https://nicolas.coch.in',
  },
  axios: {
    // proxyHeaders: false
  },
  router: {
    trailingSlash: true,
  },
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
  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.js' },
      { code: 'fr', name: 'Français', iso: 'fr-FR', file: 'fr.js' },
    ],
    vueI18n: {
      dateTimeFormats: {
        'en': {
          short: {
            year: 'numeric', month: 'short', day: 'numeric'
          },
          monthAndYear: {
            month: 'long', year: 'numeric'
          },
          long: {
            year: 'numeric', month: 'short', day: 'numeric',
            weekday: 'short', hour: 'numeric', minute: 'numeric'
          }
        },
        'fr': {
          short: {
            day: 'numeric', month: 'short', year: 'numeric'
          },
          monthAndYear: {
            month: 'long', year: 'numeric'
          },
          long: {
            year: 'numeric', month: 'short', day: 'numeric',
            weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false
          }
        }
      }
    },
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
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        console.log('===============================')
        console.log(`type: ${type} -- file: ${file}`)
        console.log(['script', 'font', 'style'].includes(type))
        console.log('===============================')
        return ['script', 'font', 'style'].includes(type)
      },
      // shouldPrefetch: (file, type) => {
      //   return ['style', 'font'].includes(type)
      // }
    },
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    transpile: [
      'vee-validate'
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // if (ctx && ctx.isClient) {
      //   config.optimization.splitChunks.maxSize = 51200
      // }
      // if (ctx && ctx.isClient) {
      //   config.optimization.splitChunks.maxSize = 51200 * 18
      // }
    }
  }
}
