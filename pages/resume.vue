<template>
  <OneColumnLayout :resume="resume" />
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Resume from "@/models/Resume";

@Component({
  components: {
    OneColumnLayout: () => import("@/components/resume/layouts/OneColumnWithTimeline.vue"),
  }
})
export default class PageResume extends Vue {
  private resume: Resume = new Resume();
}
</script>

<style lang="scss" >
#resume {
  dt {
    font-weight: bold;
  }

  dd {
    margin-left: 30px
  }
}
</style>
