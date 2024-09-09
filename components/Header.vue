<template>
  <header>
    <h1>{{ title }}</h1>
    <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<div class="p-4 bg-gray-100">
    <h1 class="text-4xl font-bold text-center text-blue-600 bg-black">Welcome to My Nuxt App</h1>
    <p class="mt-4 text-lg text-gray-700">TailwindCSS is working!</p>
  </div>

  </header>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'My Nuxt.js App'
  }
})
</script>

<style scoped>
header {
  padding: 20px;
  background-color: #f8f9fa;
  text-align: center;
}
</style>



