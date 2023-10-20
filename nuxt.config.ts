// https://nuxt.com/docs/api/configuration/nuxt-config
// import { viteExternalsPlugin } from "vite-plugin-externals";
// import { viteExternalsPlugin } from "vite-plugin-externals";
export default defineNuxtConfig({
    devtools: { enabled: true },
    alias: {
        "@": "./",
    },
    vite: {
        plugins: [
            // viteExternalsPlugin({
            //   // vue: 'Vue',
            // })
        ],
    }
});
