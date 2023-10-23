import { loadServerElement } from "../loadElm";
export const cacheMap = new Map();
export default defineNuxtPlugin(async (nuxtApp) => {
    // url上获取版本或请求中获取指定版本
    const version = nuxtApp._route.query.version as string || '4.7.2';
    useHead({
      link: [{ href: `https://cdn.bootcdn.net/ajax/libs/vant/${version}/index.min.css`, rel: 'stylesheet' }],
    })
    let Elm: any;
    const cacheElm = cacheMap.get(`element${version}`);
    if (cacheElm) {
      Elm = cacheElm
      console.info('走缓存');
    } else {
      await loadServerElement(version);
      // Elm = await import("../loadElm");
      Elm = global.vant;
      process.nextTick(() => {
        // 设置缓存
        cacheMap.set(`element${version}`, Elm);
      })
    }
    // 动态导入
    nuxtApp.vueApp.use(Elm);
});
