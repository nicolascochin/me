<template>
  <OneColumnLayout :resume="resume" />
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OneColumnLayout from "@/components/resume/layouts/OneColumnWithTimeline.vue";
import Resume from "@/models/Resume";

@Component({
  components: {
    OneColumnLayout
  }
})
export default class PageResume extends Vue {
  private resume: Resume = new Resume();
}
</script>

<style lang="scss" scoped>
</style>
