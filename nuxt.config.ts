// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  alias:{
    assets:"/<rootDir>/assets",
  },
  css:["~/assets/main.css"]
})
