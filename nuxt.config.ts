// https://nuxt.com/docs/api/configuration/nuxt-config
// import { viteExternalsPlugin } from "vite-plugin-externals";
import { viteExternalsPlugin } from "vite-plugin-externals";
export default defineNuxtConfig({
    devtools: { enabled: true },
    alias: {
        "@": "./",
    },
    app: {
      head: {
        script: [
          {
            src: 'https://unpkg.com/vue@3.3.4/dist/vue.global.js'
          },
          {
            src: 'https://unpkg.com/vue-demi@0.13.11'
          }
        ]
      }
    },
    vite: {
        plugins: [
            viteExternalsPlugin({
              'element-plus': 'element-plus',
            })
        ],
    }
});
