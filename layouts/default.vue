<template>
  <v-app>
    <v-container>
      <nuxt />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue}  from 'nuxt-property-decorator'

@Component
export default class LayoutDefault extends Vue {
}
</script>
