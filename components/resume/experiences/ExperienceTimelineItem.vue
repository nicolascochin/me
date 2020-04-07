<template>
  <v-timeline-item
    color="purple lighten-2"
    fill-dot
    right
  >
    <v-card>
      <v-card-title class="purple lighten-2">
        <h2 class="display-0 white--text font-weight-light">{{experience.position}}</h2>
      </v-card-title>
      <ExperienceDescriptionList :experience="experience" />
      <v-card-text class="px-3 py-1" v-html="experience.description" />
      <v-divider class="my-2"/>
      <ExperienceTags :experience="experience" />
    </v-card>
  </v-timeline-item>
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
