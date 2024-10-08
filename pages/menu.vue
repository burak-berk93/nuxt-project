<template>
  <div>
    <!-- Menü Butonu -->
    <button @click="toggleMenu" class="p-2 bg-blue-600 text-white rounded-md">
      <!-- Hamburger Icon -->
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>

    <!-- Menü -->
    <div :class="['fixed top-0 left-0 h-full bg-gradient-to-r from-purple-950 to-purple-800 p-6 text-white transform transition-transform', { 'menu-visible': isMenuOpen, 'menu-hidden': !isMenuOpen }]">
      <!-- Çarpı Butonu -->
      <button @click="toggleMenu" class="absolute top-4 right-4">
        <!-- Çarpı İcon -->
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Menü Listesi -->
      <nav class="mt-8">
        <ul class="space-y-4">
          <!-- Hakkımızda (Açılır Menü) -->
          <li>
            <div @click="toggleSubMenu('about')" :class="['flex items-center justify-between rounded-lg border border-gray-400 p-2', subMenuOpen === 'about' ? 'bg-purple-800 text-white' : 'hover:bg-purple-800']">
              <span>Basic</span>
              <button class="focus:outline-none">
                <svg :class="{ 'rotate-90': subMenuOpen === 'about' }" class="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>

            <!-- Açılır Menü -->
            <ul v-if="subMenuOpen === 'about'" class="ml-8 space-y-2">
              <li><button @click="addComponent('Header')" class="block p-2 text-gray-400 hover:text-blue-500">Heading</button></li>
              <li><button @click="addComponent('Button')" class="block p-2 text-gray-400 hover:text-blue-500">Full Name</button></li>
            </ul>
          </li>
          <!-- İletişim -->
          <li>
            <div class="flex items-center justify-between">
              <a href="#" class="flex items-center space-x-2 p-2 text-white hover:text-blue-500">
                <span>İletişim</span>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMainStore } from '@/stores/main.js';

const store = useMainStore();
const isMenuOpen = ref(false);
const subMenuOpen = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

const toggleSubMenu = (menu) => {
  subMenuOpen.value = subMenuOpen.value === menu ? null : menu;
}

const addComponent = (componentType) => {
  store.addComponent(componentType); // Store'dan bileşen ekle
};
</script>

<style scoped>
.menu-hidden {
  transform: translateX(-100%);
}

.menu-visible {
  transform: translateX(0);
}

.menu-transition {
  transition: transform 0.3s ease;
}
</style>
