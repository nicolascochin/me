<template>
  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
    <v-alert
      v-bind="alert"
      close-label="Close"
      dismissible
    >
      {{alert.message}}
    </v-alert>
    <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      ref="form"
      name="contact"
      @submit.prevent="handleSubmit(send)"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div
        class="d-none"
      >
        <v-text-field v-model="botField" label="bot"/>
        <!-- netlify need names -->
        <input name="email" type="email" />
        <input name="summary" type="text" />
        <input name="bot-field" type="text" />
      </div>
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
  private alert: any = {type: "success", value: false, message: ""}
  private from: string = ""
  private message: string = ""
  private botField: string = ""

  private get dataToSend(): any {
    return {
      email: this.from,
      summary: this.message,
      'form-name': "contact",
      'bot-field': this.botField
    }
  }

  private get dataEncoded() {
    return Object.keys(this.dataToSend)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(this.dataToSend[key]))
      .join('&')
  }

  private async send() {
    this.alert.value = false
    const options: any = {
      header: { "Content-Type": "application/x-www-form-urlencoded" }
    }
    this.$axios.$post(
      `${window.location.protocol}//${window.location.hostname}/`,
      this.dataEncoded,
      options,
    ).then(() => {
      this.alert.type = "success"
      this.alert.message = this.$i18n.t('contact.messageSent')
    }).catch(() => {
      this.alert.type = "error"
      this.alert.message = this.$i18n.t('contact.messageNotSent')
    }).finally(() => this.alert.value = true)
  }
}
</script>
