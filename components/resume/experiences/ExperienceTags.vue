<template>
  <div>
    <v-chip
      label
      v-for="tag in experience.tags"
      :key="tag"
      class="ma-1"
    >
      {{tag}}
    </v-chip>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import Experience from "@/models/Experience";

@Component
export default class ExperienceTags extends Vue {
  @Prop({required: true, type: Experience}) private experience!: Experience;
}
</script>

<style lang="scss" scoped>

</style>
