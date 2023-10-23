// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": "./"
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("loadElm")) {
              console.info(id, "loadElm");
              return "loadElm";
            }
          }
        }
      }
    }
  }
});
