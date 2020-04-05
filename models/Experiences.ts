import Base from "./Base"
import Experience from "./Experience"
import VueI18n from 'vue-i18n'

export default class Experiences extends Base {

  constructor() {
    super()
  }

  public get title(): VueI18n.TranslateResult {
    return this.t('resume.experience.title')
  }

  public get experiences(): Array<Experience> {
    return this.experienceKeys.map(exp => new Experience(exp))
  }

  private get experienceKeys(): Array<string> {
    return Object.keys(this.t('resume.experience.experiences'))
  }
}
