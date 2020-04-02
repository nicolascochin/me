<template>
  <v-list dense>
    <v-list-item-group color="primary">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
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

interface IContact {
  icon: string,
  value: string
}

@Component
export default class MyPersonal extends Vue {
  private items: Array<IContact> = [
    { icon: 'mdi-school', value: 'EPITA (promo 2004)'},
    { icon: 'mdi-briefcase', value: 'todo'},
    { icon: 'mdi-home', value: 'Menthon saint Bernard (74)'},
  ]
}
</script>
