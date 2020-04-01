<template>
  <v-timeline dense>
    <v-timeline-item v-for="experience in experiences" :key="experience.i18nKey">
      {{ experience.title  }} -- {{ experience.duration  }} || {{ experience.test}}
    </v-timeline-item>
  </v-timeline>
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator";
import ExperienceMixin from "@/mixins/ExperienceMixin";

@Component
export default class ExperienceTimeline extends mixins(ExperienceMixin) {
}
</script>

<style lang="scss" scoped>
</style>
