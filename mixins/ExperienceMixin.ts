import { Component, Vue } from "nuxt-property-decorator";
import Experience from "@/models/Experience"

@Component
export default class ExperienceMixin extends Vue {
  get experienceKeys(): Array<string> {
    return Object.keys(this.$t('resume.experience.experiences'))
  }

  get experiences(): Array<Experience> {
    return this.experienceKeys.map(exp => new Experience(exp))
  }
}
