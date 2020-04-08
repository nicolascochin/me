<template>
  <ValidationObserver ref="observer">
    <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="contact"
      ref="form"
    >
      <input type="hidden" name="form-name" value="contact" />
      <ValidationProvider rules="required|email" :name="$t('contact.from').toLowerCase()" v-slot="{ errors }">
        <v-text-field
          v-model="from"
          :label = "$t('contact.from')"
          :placeholder = "$t('contact.yourEmail')"
          :error-messages="errors"
          clearable
          autofocus
        />
      </ValidationProvider>
      <ValidationProvider rules="required|min:20" :name="$t('contact.message').toLowerCase()" v-slot="{ errors }">
        <v-textarea
          v-model="message"
          :label="$t('contact.message')"
          :placeholder = "$t('contact.yourMessage')"
          :error-messages="errors"
          clearable
        />
      </ValidationProvider>
      <v-btn
        @click="onSend"
      >
        {{$t('contact.validate')}}
      </v-btn>
    </form>
  </ValidationObserver>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import { ValidationProvider, ValidationObserver } from 'vee-validate';

@Component({
  components: {
    ValidationProvider,
    ValidationObserver,
  }
})
export default class ContactForm extends Vue {
  private from: string = ""
  private message: string = ""

  private async onSend() {
    const isValid: boolean = await (this.$refs.observer as any).validate()
    if (isValid) {
      (this.$refs.form as any).submit()
    }
  }
}
</script>
