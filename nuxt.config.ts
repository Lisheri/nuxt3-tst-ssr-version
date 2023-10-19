// https://nuxt.com/docs/api/configuration/nuxt-config
// import { viteExternalsPlugin } from "vite-plugin-externals";
// import { viteExternalsPlugin } from "vite-plugin-externals";
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
          }
        ]
      }
    },
    vite: {
        plugins: [
            // viteExternalsPlugin({
            //   // vue: 'Vue',
            // })
        ],
    }
});
