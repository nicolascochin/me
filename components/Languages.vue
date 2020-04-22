<template>
  <Prism :language="language.name">{{ language.code }}</Prism>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import Prism from 'vue-prism-component';
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-java'
import 'prismjs'

interface ILanguage {
  name: string,
  code: string,
}

@Component({
  components: {
    Prism,
  }
})
export default class Languages extends Vue {
  private languages: Array<ILanguage> = [
    { name: 'java', code: `System.out.println("Bonjour");` },
    { name: 'javascript', code: `console.log("Bonjour");` },
    { name: 'ruby', code: `puts "Bonjour"` },
    { name: 'python', code: `print("Bonjour")` },
  ]

  private language!: ILanguage;

  public created() {
    this.language = this.languages[Math.floor(Math.random() * this.languages.length)]
  }
}
</script>

 <style src="prismjs/themes/prism.css"> scoped>
 /* @import "~prismjs/themes/prism.css" */
 </style>
