<template>
  <v-timeline dense>
    <ExperienceTimelineItem
      v-for="experience in experiences"
      :key="experience.i18nKey"
      :experience="experience"
    />
  </v-timeline>
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator";
import ExperienceMixin from "@/mixins/ExperienceMixin";
import ExperienceTimelineItem from "./ExperienceTimelineItem.vue";

@Component({
  components: {
    ExperienceTimelineItem,
  }
})
export default class ExperienceTimeline extends mixins(ExperienceMixin) {
}
</script>

<style lang="scss" scoped>
</style>
