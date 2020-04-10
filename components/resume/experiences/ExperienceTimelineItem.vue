<template>
  <v-lazy
    transition="fade-transition"
    :options="{threshold: .5}"
    min-height="200"
  >
    <v-timeline-item
      :color="experience.headerColorsString"
      fill-dot
      right
    >
      <v-card>
        <v-card-title
          class="flex-column align-start"
          v-bind:class="experience.headerColorsString"
        >
          <h2 class="display-0 white--text font-weight-light">{{experience.position}}</h2>
          <span class="subtitle-1 grey--text text--lighten-4" v-show="experience.subtitle">{{experience.subtitle}}</span>
        </v-card-title>
        <ExperienceDescriptionList :experience="experience" />
        <v-card-text class="px-3 py-1" v-html="experience.description" />
        <v-divider class="my-2"/>
        <ExperienceTags :experience="experience" />
      </v-card>
    </v-timeline-item>
  </v-lazy>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import Experience from "@/models/Experience";
import ExperienceDescriptionList from "./ExperienceDescriptionList.vue";
import ExperienceTags from "./ExperienceTags.vue";

@Component({
  components: {
    ExperienceDescriptionList,
    ExperienceTags
  }
})
export default class ExperienceTimeline extends Vue {
  @Prop({required: true, type: Experience}) private experience!: Experience;


}
</script>

<style lang="scss" scoped>
</style>
