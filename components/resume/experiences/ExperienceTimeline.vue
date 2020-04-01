<template>
  <v-timeline dense>
    <v-timeline-item v-for="experience in experiences" :key="experience.i18nKey">
      {{ experience.title  }} -- {{ experience.duration  }} || {{ experience.test}}
    </v-timeline-item>
  </v-timeline>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Experience from "@/models/Experience"

@Component
export default class ExperienceTimeline extends Vue {
  get experienceKeys(): Array<string> {
    return Object.keys(this.$t('experiences'))
  }

  get experiences(): Array<Experience> {
    return this.experienceKeys.map(exp => new Experience(exp))
  }
}
</script>

<style lang="scss" scoped>
</style>
