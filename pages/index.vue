<template>
  <div>
    <Header title="Welcome to My Nuxt.js App" />
    <Button 
    :name="'Ahmet'" 
      :age="30" 
      :isActive="true" 
    title="Welcome to My Nuxt.js App" type="primary">Click Me!</Button>


  </div>

</template>

<script setup>
import Header from '~/components/Header.vue'
import Button from '~/components/Button.vue'

// Üst bileşen veri
const parentMessage = ref("Merhaba Vue!");

// Alt bileşenden gelen olayı yakalayan fonksiyon
const handleMessageChange = (newMessage) => {
  parentMessage.value = newMessage;
};
</script>

<style scoped>
/* Sayfa stili buraya eklenebilir */
</style>