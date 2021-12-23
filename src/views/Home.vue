<template>
  <div class="content">
    <div class="flex flex-col w-64">
      <span>ARDUINO</span>
      <span>DAY 2022</span>
      <button class="btn" type="button">Inscreva-se</button>
    </div>
    <div class="ml-auto mr-auto p-2 mt-4 sm:p-0 sm:mt-40">
      <img class="w-auto" src="@/assets/ArduinoUno.svg" alt="Arduino Board" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
}
</script>
<style>
.content {
  @apply justify-center mt-10 text-5xl font-sans font-bold flex flex-wrap items-start sm:ml-12;
}
.btn {
  @apply bg-secondary w-56 mt-8 text-3xl active:bg-orange-500 
  uppercase font-bold rounded-md px-2 py-2 shadow hover:shadow-md 
  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all 
  duration-150;
}
</style>
