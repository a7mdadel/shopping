<template>
  <div class="container">
    <headerPage />
    <router-view />
  </div>
</template>
<script setup>
import headerPage from "./components/headerPage.vue";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link:hover {
      color: #42b983;
    }
  }
}
</style>
