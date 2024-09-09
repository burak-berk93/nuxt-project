import { defineNuxtPlugin } from '#app'
import Header from '~/components/Header.vue'
import Button from '~/components/Button.vue'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('Header', Header)
  nuxtApp.vueApp.component('Button', Button)
})
