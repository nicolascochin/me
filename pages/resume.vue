<template>
  <div>
    <Section title="Expériences">
      <ExperienceTimeline />
    </Section>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Section from "@/components/resume/Section.vue";
import ExperienceTimeline from "@/components/resume/experiences/ExperienceTimeline.vue";

@Component({
  components: {
    Section,
    ExperienceTimeline,
  }
})
export default class PageResume extends Vue {

}
</script>

<style lang="scss" scoped>
</style>
