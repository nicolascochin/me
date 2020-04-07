<template>
  <section>
    <h2 class="resume section_title">{{data.title}}</h2>
    <v-timeline dense>
      <ExperienceTimelineItem
        v-for="experience in data.experiences"
        :key="experience.i18nKey"
        :experience="experience"
      />
    </v-timeline>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import Experiences from "@/models/Experiences";

@Component({
  components: {
    ExperienceTimelineItem: () => import("./ExperienceTimelineItem.vue"),
  }
})
export default class ExperienceTimeline extends Vue {
  @Prop({required: true, type: Experiences}) data!: Experiences;
}
</script>

<style lang="scss" scoped>
</style>
