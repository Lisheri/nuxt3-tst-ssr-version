import { loadServerElement } from "../loadElm";
export const cacheMap = new Map();
export default defineNuxtPlugin(async (nuxtApp) => {
    // url上获取版本或请求中获取指定版本
    const version = nuxtApp._route.query.version as string || '4.7.2';
    useHead({
      // link: [{ href: `https://unpkg.com/element-plus@${version}/dist/index.css`, rel: 'stylesheet' }],
      link: [{ href: `https://fastly.jsdelivr.net/npm/vant@${version}/lib/index.css`, rel: 'stylesheet' }],
    })
    let Elm: any;
    const cacheElm = cacheMap.get(`element${version}`);
    if (cacheElm) {
      Elm = cacheElm
    } else {
      await loadServerElement(version);
      Elm = await import("../loadElm");
      process.nextTick(() => {
        // 设置缓存
        cacheMap.set(`element${version}`, Elm);
      })
    }
    // 动态导入
    nuxtApp.vueApp.use(Elm);
    nuxtApp.vueApp.provide(Elm.ID_INJECTION_KEY, {
        prefix: Math.floor(Math.random() * 10000),
        current: 0,
    })
});
