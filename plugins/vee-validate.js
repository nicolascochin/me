import { extend } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";

import { localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import fr from 'vee-validate/dist/locale/fr.json';

export default ({ app }) => {
  // No message specified.
  extend('required', required);
  extend('email', email);
  extend('min', min);

  // Install English and French locales.
  localize({
    en,
    fr
  });
  localize(app.i18n.locale)

  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    console.log(app)
    localize(newLocale)
  }
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    console.log(oldLocale, newLocale)
  }
}
