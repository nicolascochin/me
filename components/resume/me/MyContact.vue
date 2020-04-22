<template>
  <v-list dense flat class="pt-0 pt-md-2">
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :ripple="false"
      v-bind="item"
      :selectable="false"
    >
      <v-list-item-icon>
        <v-icon>{{item.icon}}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { mdiWeb, mdiGithub, mdiLinkedin, mdiEmail } from "@mdi/js";
interface IContact {
  icon: string,
  title: string,
  href?: string,
  link?: boolean,
  nuxt?: boolean,
  to?: string,
  target?: string,
  rel?: string,
}

@Component
export default class MyContact extends Vue {
  private items: Array<IContact> = [
    { icon: mdiWeb,       title: 'https://nicolas.coch.in', href: 'https://nicolas.coch.in',                         link: true, target: "_blank", rel: "noopener"},
    { icon: mdiGithub,    title: 'https://github.com/nicolascochin', href: 'https://github.com/nicolascochin',             link: true, target: "_blank", rel: "noopener"},
    { icon: mdiLinkedin,  title: 'https://www.linkedin.com/in/nicolascochin', href: 'https://www.linkedin.com/in/nicolascochin/', link: true, target: "_blank", rel: "noopener"},
    // @ts-ignore
    { icon: mdiEmail,     title: 'contact', link: true, nuxt: true, to: this.localePath({name: 'contact'})},
  ]
}
</script>
