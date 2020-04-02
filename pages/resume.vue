<template>
  <div>
    <Me />
    <InfosSection />
    <ExperienceTimeline />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import ExperienceTimeline from "@/components/resume/experiences/ExperienceTimeline.vue";
import InfosSection from "@/components/resume/infos/InfoSection.vue";
import Me from "@/components/resume/infos/Me.vue";

@Component({
  components: {
    ExperienceTimeline,
    InfosSection,
    Me,
  }
})
export default class PageResume extends Vue {

}
</script>

<style lang="scss" scoped>
</style>
