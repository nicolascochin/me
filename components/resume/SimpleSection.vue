<template>
  <article :class="classes">
    <h2 class="resume section_title">{{title}}</h2>
    <div v-html="content"></div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import VueI18n from 'vue-i18n'

@Component
export default class SimpleSection extends Vue {
  @Prop({required: true}) private i18nKey!:string;
  @Prop({default: () => []}) private classes!:Array<string>;

  private get title(): VueI18n.TranslateResult {
    return this.$t(`resume.${this.i18nKey}.title`)
  }

  private get content(): VueI18n.TranslateResult {
    return this.$t(`resume.${this.i18nKey}.content`)
  }
}
</script>
