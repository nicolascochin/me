// import Vue from 'vue'
import { Vue } from "nuxt-property-decorator";

declare module 'vue/types/vue' {
  interface Vue {
    $eventBus: Vue
    $events: any
  }
}


Vue.prototype.$eventBus = new Vue();
Vue.prototype.$events = {
  ui: {
    sidebarToggle: 'SidebarToggle'
  }
};
