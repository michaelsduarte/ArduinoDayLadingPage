<template>
  <div id="app">
    <NavBarVue />
    <router-view />
  </div>
</template>
<script>
import NavBarVue from './components/NavBar.vue'
export default {
  components: {
    NavBarVue,
  },
}
</script>
<style>
#app {
  @apply font-serif antialiased text-center text-gray-800 text-xl;
}
</style>
