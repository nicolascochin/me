<template>
  <pre>
    <code :class="`language-${this.language.name}`" v-text="language.code">
    </code>
  </pre>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

interface ILanguage {
  name: string,
  code: string,
}

@Component
export default class Languages extends Vue {
  private languages: Array<ILanguage> = [
    { name: 'Java', code: `System.out.println("Bonjour");` },
    { name: 'JS', code: `console.log("Bonjour");` },
    { name: 'Ruby', code: `puts "Bonjour"` },
    { name: 'Python', code: `print("Bonjour")` },
  ]

  private get language(): ILanguage {
    return this.languages[Math.floor(Math.random() * this.languages.length)]
  }
}
</script>
