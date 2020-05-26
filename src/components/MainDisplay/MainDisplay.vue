<template>
  <div></div>
</template>

<script>
export default {
  name: "maindisplay",
  computed: {
    sidebarPosition() {
      return this.$store.state.ui.sidebarPosition;
    }
  }
};
</script>

<style>
</style>