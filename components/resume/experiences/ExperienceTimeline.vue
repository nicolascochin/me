<template>
  <v-lazy
    transition="fade-transition"
    :options="{threshold: .5}"
    min-height="200"
  >
    <section>
      <h3 class="resume section_title headline">{{data.title}}</h3>
      <v-timeline dense>
        <ExperienceTimelineItem
          v-for="experience in data.experiences"
          :key="experience.i18nKey"
          :experience="experience"
        />
      </v-timeline>
    </section>
  </v-lazy>
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
