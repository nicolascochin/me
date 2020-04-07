<template>
  <v-list dense>
    <v-list-item
      v-for="(item, i) in subTitles"
      :key="i"
    >
      <v-list-item-icon style="margin-right: 5px">
        <v-icon>{{item.icon}}</v-icon>
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
import { mdiAt, mdiMapMarker, mdiTimelapse } from '@mdi/js'

@Component
export default class ExperienceDescriptionList extends Vue {
  @Prop({required: true, type: Experience}) private experience!: Experience;


  get subTitles(): any[] {
    return [
      { icon: mdiAt,         text: this.experience.company },
      { icon: mdiMapMarker, text: this.experience.location },
      { icon: mdiTimelapse,  text: this.showDuration },
    ]
  }

  private get showDuration(): string {
    return `${this.experience.startHuman} - ${this.experience.endHuman} (${this.experience.duration})`
  }
}
</script>

<style lang="scss" scoped>

</style>
