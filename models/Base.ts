import VueI18n from 'vue-i18n'

export default class Base {
  public static i18n: VueI18n;
  public static moment: any;

  protected get moment() {
    return Base.moment;
  }

  protected te(key: string): boolean {
    return Base.i18n.te(key)
  }
  protected t(key: string): VueI18n.TranslateResult {
    return Base.i18n.t(key)
  }

  protected tc(key: string, count: number, options: any[] = [] ): VueI18n.TranslateResult {
    return Base.i18n.tc(key, count, options)
  }

  protected d(date: Date, format: string ): VueI18n.TranslateResult {
    return Base.i18n.d(date, format)
  }
}
