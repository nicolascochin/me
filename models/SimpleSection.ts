import Base from "./Base"
import VueI18n from 'vue-i18n'

export default class SimpleSection extends Base {

  constructor(private i18nKey: string) {
    super()
  }

  public get title(): VueI18n.TranslateResult {
    return this.t(`resume.${this.i18nKey}.title`)
  }

  public get content(): VueI18n.TranslateResult {
    return this.t(`resume.${this.i18nKey}.content`)
  }
}
