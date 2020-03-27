import fr from 'vuetify/src/locale/en'
import en from 'vuetify/src/locale/fr'

export default function ({ app }) {
  return {
    lang: {
      t: (key, ...params) => app.i18n.t(key, params),
      locales: { fr, en },
      current: 'fr',
    },
    breakpoint: {},
    icons: {},
    rtl: false,
    theme: {}
  }
}
