<template>
  <v-sheet>
    <h2 class="title">{{title}}</h2>
    <slot></slot>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";


@Component
export default class ResumeSection extends Vue {
  @Prop({ default: '' }) private title!: string;

}
</script>
