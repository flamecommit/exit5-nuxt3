import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  components: true,
  css: [
    '@/assets/scss/reset.scss'
  ],
  modules: [
    '@nuxt/content'
  ]
})
