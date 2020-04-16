<template>
  <article id="resume">
    <Me :data="resume.me" />
    <SimpleSection :data="resume.infos" />
    <ExperienceTimeline :data="resume.experiences" />
    <SimpleSection :data="resume.education"  />
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import Resume from "@/models/Resume";

@Component({
  components: {
    ExperienceTimeline: () => import("@/components/resume/experiences/ExperienceTimeline.vue"),
    SimpleSection: () => import("@/components/resume/SimpleSection.vue"),
    Me: () => import("@/components/resume/me/Me.vue"),
  }
})
export default class OneColumnWithTimelineLayout extends Vue {
  @Prop({required: true, type: Resume}) resume!: Resume;
}
</script>

<style lang="scss">
#resume {
  .section_title {
    border-bottom: 1px solid var(--v-primary-base);
    margin-top: 40px;
    margin-bottom: 20px;
  }
}
</style>
