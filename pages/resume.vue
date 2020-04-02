<template>
  <div>
    <ExperienceTimeline />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import ExperienceTimeline from "@/components/resume/experiences/ExperienceTimeline.vue";

@Component({
  components: {
    ExperienceTimeline,
  }
})
export default class PageResume extends Vue {

}
</script>

<style lang="scss" scoped>
</style>
