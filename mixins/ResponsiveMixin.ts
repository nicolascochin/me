import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class ResponsiveMixin extends Vue {
  get isMobile(): boolean {
    return this.$vuetify.breakpoint.mdAndDown;
  }

  get isDesktop(): boolean {
    return !this.isMobile;
  }
}
