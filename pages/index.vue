<template>
  <v-container fluid style="height: 100vh;" class="d-flex flex-column">
    <v-row align="center" justify="center" dense no-gutters>
      <v-col cols="12">
        <Avatar />
      </v-col>
    </v-row>
    <v-row align="center" justify="center" dense no-gutters>
      <!-- <v-col cols="12" md="4"  class="d-flex flex-column justify-center align-center"> -->
      <v-col cols="12"  class="d-flex flex-column justify-center align-center">
        <client-only placeholder="Loading...">
          <Language />
        </client-only>
      </v-col>
      <!-- <v-col cols="12" md="8"  class="d-flex flex-column justify-center align-start" v-html="$t('home.intro')"> -->
      <v-col cols="12" class="d-flex flex-column justify-center align-start" v-html="$tc('home.intro', 10, { count: numberYearsOfXp() })">
      </v-col>
    </v-row>
    <v-row align="center" justify="center" dense no-gutters>
      <v-col cols="9" sm="6" md="4" lg="3" class="d-flex align-center justify-space-between">
        <v-btn link nuxt :to="localePath({name: 'contact'})">{{ $t('home.btn.contact') }}</v-btn>
        <v-btn link nuxt :to="localePath({name: 'resume'})">{{ $t('home.btn.resume') }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, mixins }  from 'nuxt-property-decorator'
import XpMixin from "@/mixins/XpMixin";

@Component({
  components: {
    Avatar: () => import('@/components/resume/me/MyAvatar.vue'),
    Language: () => import('@/components/Languages.vue')
  }
})
export default class PageIndex extends mixins(XpMixin) {
}
</script>
