import Vue from "vue";
import Vuex from "vuex";
import Ships from "./Ships";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ui: {
      darkMode: false,
      sidebarPosition: 1, // 1 for left, 2 for right
    },
    playerInfo: {},
    Ships,
  },
});
