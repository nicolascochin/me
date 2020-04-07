<template>
  <!-- <v-select
    :items="languages"
    :label="label"
    dense
  /> -->
  <div>
    <v-btn
      v-for="locale in availableLocales"
      :key="locale.code"
      nuxt
      link
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class LanguageSelect extends Vue {
  @Prop({default: ''}) private label!: string;
  private languages: Array<any> = [
    {text: 'FR', value: 'FR'},
    {text: 'EN', value: 'EN'}
  ]

  get availableLocales () {
    return (this.$i18n as any).locales.filter((i: any) => i.code !== this.$i18n.locale)
  }
}
</script>
