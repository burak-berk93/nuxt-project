<template>
  <div>
    <!-- Bileşen Seçim Formu -->
    <div>
      <button @click="addComponent('Header')">Add Header</button>
      <button @click="addComponent('Button')">Add Button</button>
    </div>

    <!-- Dinamik Bileşenler Render Ediliyor -->
    <div v-for="(component, index) in components" :key="index">
      <component :is="component" />
    </div>

    <div>
      <p>Store'dan gelen mesaj: {{ store.message }}</p>
      <input v-model="newMessage" placeholder="Yeni mesaj gir" />
      <button @click="store.updateMessage(newMessage)">Mesajı Güncelle</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMainStore } from '~/stores/main.js';

// Store'u çağır
const store = useMainStore();
const newMessage = ref('');
const components = store.components;

const addComponent = (componentType) => {
  store.addComponent(componentType);
};
</script>

<style scoped>
/* Sayfa stili buraya eklenebilir */
</style>
