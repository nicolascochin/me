import Base from "./Base"
import Experience from "./Experience"

export default class Experiences extends Base {

  constructor() {
    super()
  }

  private get experienceKeys(): Array<string> {
    return Object.keys(this.t('resume.experience.experiences'))
  }

  get experiences(): Array<Experience> {
    return this.experienceKeys.map(exp => new Experience(exp))
  }
}
