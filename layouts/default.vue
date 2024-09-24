<template>
    <div>
      <NuxtPage />
    </div>
  </template>
  
  <script setup>
  import { useHead } from '#app'
  
  useHead({
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap' }
    ]
  })
  </script>
  
  <style scoped>
  /* Global stil ve düzen kodları buraya eklenebilir */
  </style>
  