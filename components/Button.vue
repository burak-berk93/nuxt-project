<template>
  <div
    ref="menu"
    class="bg-white shadow-lg rounded-lg p-4 w-64 draggable"
    @mousedown="startDrag" @contextmenu.prevent="onRightClick"
  >
    <h2 class="text-lg font-bold mb-4">Menu</h2>
    <ul>
      <li class="py-2 border-b border-gray-300">Item 1-{{ title }}</li>
      <li class="py-2 border-b border-gray-300">Item 2</li>
      <li class="py-2 border-b border-gray-300">Item 3</li>
      <li class="py-2 border-b border-gray-300">Item 4</li>
    </ul>
  </div>
  
</template>

<script setup>

import { ref, defineProps } from 'vue'
const isRightClicked = ref(false)
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 18
  },
  isActive: {
    type: Boolean,
    default: false
  }
});

const onRightClick = () => {
  isRightClicked.value = !isRightClicked.value // True/False arasında geçiş yapar
  console.log(isRightClicked.value)
}

const menu = ref(null)
console.log()
const startDrag = (e) => {
  const menuElement = menu.value
  const offsetX = e.clientX - menuElement.getBoundingClientRect().left
  const offsetY = e.clientY - menuElement.getBoundingClientRect().top

  const onMouseMove = (e) => {
    menuElement.style.position = 'absolute'
    menuElement.style.left = `${e.clientX - offsetX}px`
    menuElement.style.top = `${e.clientY - offsetY}px`
  }

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
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
