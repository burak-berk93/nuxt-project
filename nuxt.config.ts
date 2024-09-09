export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css'  // CSS dosyasının doğru yoldan çağrıldığından emin olun
  ],
  plugins: [
    '~/plugins/global-components.ts'  // Plugin dosyalarının doğru yoldan çağrıldığından emin olun
  ]
})
