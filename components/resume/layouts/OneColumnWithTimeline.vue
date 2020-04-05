<template>
  <div>
    <Me :data="resume.me" />
    <SimpleSection :data="resume.infos" />
    <ExperienceTimeline :data="resume.experiences" />
    <SimpleSection :data="resume.education"  />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import ExperienceTimeline from "@/components/resume/experiences/ExperienceTimeline.vue";
import SimpleSection from "@/components/resume/SimpleSection.vue";
import Me from "@/components/resume/me/Me.vue";
import Resume from "@/models/Resume";

@Component({
  components: {
    ExperienceTimeline,
    SimpleSection,
    Me,
  }
})
export default class OneColumnWithTimelineLayout extends Vue {
  @Prop({required: true, type: Resume}) resume!: Resume;
}
</script>
