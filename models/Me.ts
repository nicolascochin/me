import Base from "./Base"
import VueI18n from 'vue-i18n'

export default class Me extends Base {
  constructor() {
    super()
  }

  public get position(): VueI18n.TranslateResult {
    return this.t(`resume.me.position`)
  }
  public get subPosition(): VueI18n.TranslateResult {
    return this.t(`resume.me.subPosition`)
  }
}
