<template>
  <div>
    <sidebar ng-if="sidebarPosition"></sidebar>
    <main></main>
    <sidebar ng-if="!sidebarPosition"></sidebar>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "maindisplay",
  components: {
    Sidebar
  },
  computed: {
    sidebarPosition() {
      if (this.$store.state.ui.sidebarPosition === 1) return true;
      else return false;
    }
  }
};
</script>

<style>
</style>