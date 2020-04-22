import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class XpMixin extends Vue {
  public numberYearsOfXp(): number {
    return new Date().getFullYear() - 2004;
  }
}
