<template>
  <div id="app">
    <div id="header"></div>
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
#header {
  @apply bg-primary absolute left-0 top-0 right-0 -z-10;
  height: 50vh;
}
</style>
