<template>
  <div>
    <router-link v-on:click.native="add" to="/">Home Link</router-link>
    <router-link tag="md-button" class="md-raised md-primary" to="/testView">Link 1</router-link>
    <router-link tag="md-button" class="md-raised md-primary" to="/kashView">Link 2</router-link>
    <router-link tag="md-button" class="md-raised md-primary" to="/kashView">Ship Stats</router-link>
  </div>
</template>

<script>
export default {
  name: "sidebar"
};
</script>

<style>
</style>
