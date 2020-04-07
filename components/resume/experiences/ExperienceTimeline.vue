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
import ExperienceTimelineItem from "./ExperienceTimelineItem.vue";
import Experiences from "@/models/Experiences";

@Component({
  components: {
    ExperienceTimelineItem,
  }
})
export default class ExperienceTimeline extends Vue {
  @Prop({required: true, type: Experiences}) data!: Experiences;
}
</script>

<style lang="scss" scoped>
</style>
