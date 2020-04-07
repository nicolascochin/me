<template>
  <v-list dense flat>
    <v-list-item-group >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :ripple="false"
        link
        :href="item.value"
        target="_blank"
      >
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.value"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { mdiWeb, mdiGithub, mdiLinkedin, mdiEmail } from "@mdi/js";
interface IContact {
  icon: string,
  value: string
}

@Component
export default class MyContact extends Vue {
  private items: Array<IContact> = [
    { icon: mdiWeb, value: 'https://nicolas.coch.in'},
    { icon: mdiGithub, value: 'https://github.com/nicolascochin'},
    { icon: mdiLinkedin, value: 'https://www.linkedin.com/in/nicolascochin/'},
    { icon: mdiEmail, value: 'email me'},
  ]
}
</script>
