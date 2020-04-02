<template>
  <section>
    <h2 class="resume section_title">{{$t('resume.experience.title')}}</h2>
    <v-timeline dense>
      <ExperienceTimelineItem
        v-for="experience in experiences"
        :key="experience.i18nKey"
        :experience="experience"
      />
    </v-timeline>
  </section>
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
