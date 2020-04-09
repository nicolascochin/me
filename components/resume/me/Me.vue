<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" class="d-flex justify-start order-md-0 pb-0 pb-md-3" >
        <MyPersonal />
      </v-col>
      <v-col cols="12" md="4" class="d-flex justify-md-end order-md-2 pt-0 pt-md-3">
        <MyContact />
      </v-col>
      <v-col cols="12" md="4" class="d-flex justify-center order-md-1">
        <MyAvatar />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex flex-column align-center">
        <h1 class="headline">{{ data.position }}</h1>
        <h3 class="title">{{ data.subPosition }}</h3>
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
