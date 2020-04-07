<template>
  <v-list dense flat>
    <v-list-item-group color="primary">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :ripple="false"
        :selectable="true"
      >
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.value"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import VueI18n from 'vue-i18n'
import { mdiRemote, mdiBriefcase, mdiHome } from "@mdi/js";

interface IPersonal {
  icon: string,
  value: VueI18n.TranslateResult
}

@Component
export default class MyPersonal extends Vue {
  private static i18nPrefix: string = 'resume.me.personal';

  private items: Array<IPersonal> = [
    { icon: mdiRemote, value: this.translate('remote')},
    { icon: mdiBriefcase, value: this.translatec('xp', this.numberYearsOfXp)},
    { icon: mdiHome, value: this.translate('home')},
  ]

  private get numberYearsOfXp(): number {
    return new Date().getFullYear() - 2004;
  }

  private translate(key: string): VueI18n.TranslateResult {
    return this.$t(`${MyPersonal.i18nPrefix}.${key}`)
  }

  private translatec(key: string, count: number): VueI18n.TranslateResult {
    return this.$tc(`${MyPersonal.i18nPrefix}.${key}`, count, {count: count})
  }
}
</script>
