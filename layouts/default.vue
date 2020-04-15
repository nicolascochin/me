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
    const i18nSeo = (this as any).$nuxtI18nSeo();
    const routeName = this.$nuxt.$route.name || ''
    const i18nKey = routeName.replace(/___.*$/, '')
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs
      },
      title: this.$i18n.t(`pages.${i18nKey}.title`),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.t(`pages.${i18nKey}.description`)
        },
        ...i18nSeo.meta
      ],
      link: [
        ...i18nSeo.link
     ]
    }
  }
}
</script>
