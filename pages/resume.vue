<template>
  <div>
    <InfosSection />
    <ExperienceTimeline />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import ExperienceTimeline from "@/components/resume/experiences/ExperienceTimeline.vue";
import InfosSection from "@/components/resume/infos/InfoSection.vue";

@Component({
  components: {
    ExperienceTimeline,
    InfosSection,
  }
})
export default class PageResume extends Vue {

}
</script>

<style lang="scss" scoped>
</style>
