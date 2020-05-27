<template>
  <div>
    <main></main>
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
      return this.$store.state.ui.sidebarPosition;
    }
  }
};
</script>

<style>
</style>