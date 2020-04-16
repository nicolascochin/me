<template>
  <v-container>
    <h2 class="display-1 mb-5">{{$t('contact.pageTitle')}}</h2>
    <ContactForm />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {
    ContactForm: () => import("@/components/contact/ContactForm.vue"),
  }
})
export default class PageContact extends Vue {
}
</script>
