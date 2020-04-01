<template>
  <v-list dense>
    <v-list-item
      v-for="(item, i) in subTitles"
      :key="i"
    >
      <v-list-item-icon style="margin-right: 5px">
        <v-icon v-text="item.icon"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="caption" v-text="item.text"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
</v-list>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import Experience from "@/models/Experience";

@Component
export default class ExperienceDescriptionList extends Vue {
  @Prop({required: true, type: Experience}) private experience!: Experience;

  get subTitles(): any[] {
    return [
      { icon: 'mdi-at',         text: this.experience.company },
      { icon: 'mdi-map-marker', text: this.experience.location },
      { icon: 'mdi-timelapse',  text: this.experience.duration },
    ]
  }
}
</script>

<style lang="scss" scoped>

</style>
