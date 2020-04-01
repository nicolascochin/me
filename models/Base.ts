// Use momentCustom in order to avoid a webpack issue (several lib export moment)
import momentCustom from 'moment';
import VueI18n from 'vue-i18n'

export default class Base {
  public static i18n: VueI18n;

  protected t(key: string): VueI18n.TranslateResult {
    return Base.i18n.t(key)
  }

  protected tc(key: string, count: number, options: any[] = [] ): VueI18n.TranslateResult {
    return Base.i18n.tc(key, count, options)
  }
}
