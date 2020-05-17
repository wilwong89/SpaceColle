<template>
  <div id="app"></div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Sidebar,
    Navbar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
