<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" class="d-flex justify-start" >
        <MyPersonal />
      </v-col>
      <v-col cols="12" md="4" class="d-flex justify-center">
        <MyAvatar />
      </v-col>
      <v-col cols="12" md="4" class="d-flex justify-end">
        <MyContact />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex flex-column align-center">
        <span class="headline">{{ data.position }}</span>
        <span class="title">{{ data.subPosition }}</span>
      </v-col>
    </v-row>
  </v-container>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import MyAvatar from "./MyAvatar.vue"
import MyContact from "./MyContact.vue"
import MyPersonal from "./MyPersonal.vue"
import MeModel from "@/models/Me";

@Component({
  components: {
    MyAvatar: () => import("./MyAvatar.vue"),
    MyContact: () => import("./MyContact.vue"),
    MyPersonal: () => import("./MyPersonal.vue"),
  }
})
export default class Me extends Vue {
  @Prop({required: true, type: MeModel}) private data!: MeModel;
}
</script>
