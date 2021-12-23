<template>
  <nav
    class="relative flex flex-wrap items-center justify-between py-3 navbar-expand-lg mb-3"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
          to="/"
        >
          <img class="block h-12" src="@/assets/Logo.svg" alt="Workflow" />
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          @click="toggleNavbar()"
        >
          <MenuAlt3Icon class="h-5 w-5 text-white" />
        </button>
      </div>
      <div
        :class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex lg:flex-grow items-center"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li v-for="item in navigation" :key="item.name" class="nav-item">
            <router-link
              class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
              :to="item.href"
            >
              <span class="ml-2">{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { MenuAlt3Icon } from '@heroicons/vue/outline'

export default {
  name: 'NavBar',
  components: {
    MenuAlt3Icon,
  },
  data() {
    return {
      showMenu: false,
      navigation: [
        { name: 'Home', href: '/' },
        { name: 'Sobre', href: '/sobre' },
        { name: 'Patrocinio', href: '/patrocinio' },
        { name: 'Eventos', href: '/eventos' },
      ],
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu
    },
  },
}
</script>

<style></style>
