<template>
  <v-app-bar app dense :elevation="0" color="white">
    <v-app-bar-nav-icon v-show="isMobile" @click="onNavBarIcon">
      <v-icon >{{icon}}</v-icon>
    </v-app-bar-nav-icon>
    <v-toolbar-title></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, mixins, Vue } from "nuxt-property-decorator";
import ResponsiveMixin from "@/mixins/ResponsiveMixin";
import { mdiMenu } from "@mdi/js";

@Component
export default class AppMenuBar extends mixins(ResponsiveMixin)  {
  private icon: string = mdiMenu;

  private onNavBarIcon(): void {
    this.$eventBus.$emit(this.$events.ui.sidebarToggle)
  }
}
</script>
