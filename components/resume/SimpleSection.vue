<template>
  <article :class="classes">
    <h2 class="resume section_title">{{data.title}}</h2>
    <div v-html="data.content"></div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import VueI18n from 'vue-i18n'
import SimpleSectionModel from "@/models/SimpleSection";

@Component
export default class SimpleSection extends Vue {
  @Prop({required: true, type: SimpleSectionModel}) private data!: SimpleSectionModel;
  @Prop({default: () => []}) private classes!:Array<string>;
}
</script>
