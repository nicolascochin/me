<template>
  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
    <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="contact"
      ref="form"
      @submit.prevent="handleSubmit(send)"
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
        type="submit"
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

  private get dataToSend(): any {
    return {
      from: this.from,
      message: this.message
    }
  }

  private get dataEncoded() {
    return Object.keys(this.dataToSend)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(this.dataToSend[key]))
       .join('&')
  }

  private send() {
    const options: any = {
      header: { "Content-Type": "application/x-www-form-urlencoded" }
    }
    this.$axios.$post(
      "/",
      this.dataEncoded,
      options,
    )
  }
}
</script>
