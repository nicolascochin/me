<template>
  <v-content>
    <v-container fluid>
      <nuxt />
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class AppContent extends Vue {
}
</script>
