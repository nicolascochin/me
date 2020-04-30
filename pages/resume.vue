<template>
  <LazyHydrate ssr-only>
    <OneColumnLayout :resume="resume" />
  </LazyHydrate>
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Resume from "@/models/Resume";
import LazyHydrate from 'vue-lazy-hydration';


@Component({
  components: {
    LazyHydrate,
    OneColumnLayout: () => import("@/components/resume/layouts/OneColumnWithTimeline.vue"),
  }
})
export default class PageResume extends Vue {
  private resume: Resume = new Resume();
}
</script>

<style lang="scss" scoped>
</style>
