<template>
  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
    <v-form ref="form" @submit.prevent="handleSubmit()">
      <ValidationProvider rules="required|email" :name="$t('contact.from').toLowerCase()" v-slot="{ errors }">
        <v-text-field
          v-model="from"
          :label = "$t('contact.from')"
          :placeholder = "$t('contact.yourEmail')"
          :error-messages="errors"
          required
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
          required
        />
      </ValidationProvider>
      <v-btn
        type="submit"
      >
        {{$t('contact.validate')}}
      </v-btn>
    </v-form>
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
}
</script>
