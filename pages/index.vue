<template>
  <v-container fluid style="height: 100vh;" class="d-flex flex-column">
    <v-row align="center" justify="center" dense no-gutters>
      <v-col cols="12">
        <Avatar />
      </v-col>
    </v-row>
    <v-row align="center" justify="center" dense no-gutters>
      <v-col cols="12" md="6"  class="d-flex flex-column justify-center align-center">
        <Language />
      </v-col>
      <v-col cols="12" md="6"  class="d-flex flex-column justify-center align-center">
        <p>fdjsklfjdslkfjlkdsfjkldsj</p>
        <p>fdjsklfjdslkfjlkdsfjkldsj</p>
        <p>fdjsklfjdslkfjlkdsfjkldsj</p>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" dense no-gutters>
      <v-col cols="9" sm="6" md="4" lg="3" class="d-flex align-center justify-space-between">
        <v-btn>Mon CV</v-btn>
        <v-btn>Contactez moi</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue }  from 'nuxt-property-decorator'

@Component({
  components: {
    Avatar: () => import('@/components/resume/me/MyAvatar.vue'),
    Language: () => import('@/components/Languages.vue')
  }
})
export default class PageIndex extends Vue {
}
</script>
