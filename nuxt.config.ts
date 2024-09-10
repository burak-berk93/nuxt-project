export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css'
  ],
  buildModules: [
    '@nuxt/postcss8',  // Ensure this module is included
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
