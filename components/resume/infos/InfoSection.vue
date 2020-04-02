<template>
  <article>
    <h2 class="resume section_title">{{$t('resume.infos.title')}}</h2>
    <div v-html="$t('resume.infos.content')"></div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class InfosSection extends Vue {

}
</script>
