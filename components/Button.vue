<template>
  <button :class="`btn ${type}`" @click="handleClick">
    <slot></slot>
  </button>
  
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  }
})

const handleClick = () => {
  console.log('Button clicked!')
}
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}
.btn.primary {
  background-color: #007bff;
}
.btn.secondary {
  background-color: #6c757d;
}
</style>
