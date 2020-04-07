<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn
        v-on="on"
        nuxt
        link
        icon
        :to="switchLocalePath(availableLocale.code)"
      >
        <v-icon>{{icon}}</v-icon>
      </v-btn>
    </template>
    <span>{{ $t(`see_in.${availableLocale.code}`) }}</span>
  </v-tooltip>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { mdiTranslate } from "@mdi/js";

@Component
export default class LanguageSelect extends Vue {
  @Prop({default: ''}) private label!: string;
  private icon: string = mdiTranslate;

  get availableLocale () {
    return (this.$i18n as any).locales.filter((i: any) => i.code !== this.$i18n.locale)[0]
  }
}
</script>
