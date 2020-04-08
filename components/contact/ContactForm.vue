<template>
  <v-form netlify ref="form">
    <v-text-field
      :label = "$t('contact.from')"
      :placeholder = "$t('contact.yourEmail')"
      clearable
      autofocus
    />
    <v-textarea
      :label="$t('contact.message')"
      :placeholder = "$t('contact.yourMessage')"
      clearable
    />
      <!-- :disabled="!valid" -->
    <v-btn
      color="success"
      @click="validate"
    >
    {{$t('contact.validate')}}
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class ContactForm extends Vue {

  private validate() {
    (this.$refs.form as any).validate();
  }
}
</script>
