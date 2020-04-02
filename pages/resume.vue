<template>
  <div>
    <Me />
    <SimpleSection i18nKey="infos" />
    <ExperienceTimeline />
    <SimpleSection i18nKey="education"  />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import ExperienceTimeline from "@/components/resume/experiences/ExperienceTimeline.vue";
import SimpleSection from "@/components/resume/SimpleSection.vue";
import Me from "@/components/resume/me/Me.vue";

@Component({
  components: {
    ExperienceTimeline,
    SimpleSection,
    Me,
  }
})
export default class PageResume extends Vue {

}
</script>

<style lang="scss" scoped>
</style>
