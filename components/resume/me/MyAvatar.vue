<template>
  <section :style="sectionStyles">
    <v-avatar :size="150" class="with-border" >
      <v-img
        src="/me.webp"
        lazy-src="/me.webp"
        alt="Nicolas COCHIN"
        contain
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-avatar>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class MyAvatar extends Vue {
  @Prop({default: "center"}) private alignment!: string;

  private sectionStyles: any = {
    "text-align": this.alignment,
  }
}
</script>

<style lang="scss" scoped>
.with-border {
  border: 3px solid steelblue;
}
</style>
