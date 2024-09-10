<template>
  <div>
    <!-- Menü Butonu -->
    <button @click="toggleMenu" class="p-2 bg-blue-500 text-white rounded">
      Menü Aç/Kapat
    </button>

    <!-- Menü -->
    <div :class="['fixed top-0 left-0 h-full bg-gray-800 text-white transform transition-transform', { 'menu-visible': isMenuOpen, 'menu-hidden': !isMenuOpen }]" class="menu-transition w-64">
      <button @click="toggleMenu" class="p-2 bg-red-500 rounded">
        Kapat
      </button>
      <nav>
        <ul>
          <li><a href="#" class="block p-2">Ana Sayfa</a></li>
          <li><a href="#" class="block p-2">Hakkımızda</a></li>
          <li><a href="#" class="block p-2">İletişim</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
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
