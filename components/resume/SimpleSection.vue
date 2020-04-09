<template>
  <section :class="classes">
    <h3 class="resume section_title headline">{{data.title}}</h3>
    <div v-html="data.content"></div>
  </section>
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
