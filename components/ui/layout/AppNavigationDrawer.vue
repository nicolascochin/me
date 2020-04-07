<template>
  <v-navigation-drawer
    app
    mini-variant
    :mini-variant-width="90"
    v-model="drawer"
  >
    <v-list
      dense
      nav
      flat
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        nuxt
        :to="localePath({name: item.route})"
        active-class="primary--text"
        exact
      >
        <v-list-item-icon>
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-icon large v-on="on">{{ item.icon }}</v-icon>
            </template>
            <span>{{ item.title }}</span>
          </v-tooltip>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator";
import { mdiHome, mdiViewDashboard, mdiBadgeAccountHorizontalOutline } from "@mdi/js";
import ResponsiveMixin from "@/mixins/ResponsiveMixin";

@Component
export default class AppNavigationDrawer extends mixins(ResponsiveMixin) {
  private items:any[] =  [
    { title: 'Accueil', icon: mdiHome, route: 'index' },
    { title: 'Mon CV', icon: mdiBadgeAccountHorizontalOutline, route: 'resume' },
  ]

  private drawer: boolean = true;
  private mini: boolean = true;

  private created() {
    this.drawer = this.isDesktop
    this.$eventBus.$on(this.$events.ui.sidebarToggle, this.onSideBarToggle);
  }
  private beforeDestroy() {
    this.$eventBus.$off(this.$events.ui.sidebarToggle, this.onSideBarToggle);
  }
  private onSideBarToggle(): void {
    this.drawer = !this.drawer;
  }
}
</script>
