<template>
  <v-app>
    <AppNavigationDrawer ></AppNavigationDrawer>
    <AppMenuBar ></AppMenuBar>
    <AppContent ></AppContent>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue}  from 'nuxt-property-decorator'
import AppNavigationDrawer from "@/components/ui/layout/AppNavigationDrawer.vue";
import AppMenuBar from "@/components/ui/layout/AppMenuBar.vue";
import AppContent from "@/components/ui/layout/AppContent.vue";

@Component({
  components: {
    AppNavigationDrawer,
    AppContent,
    AppMenuBar,
  }
})
export default class LayoutDefault extends Vue {
  private head () {
    return (this as any).$nuxtI18nSeo();
  }
}
</script>
