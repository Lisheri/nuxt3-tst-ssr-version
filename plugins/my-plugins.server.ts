import { loadServerElement } from "../loadElm";
export default defineNuxtPlugin(async (nuxtApp) => {
    // url上获取版本或请求中获取指定版本
    const version = nuxtApp._route.query.version as string;
    await loadServerElement(version);
    const Elm = await import("../loadElm");
    // 动态导入
    // @ts-ignore
    nuxtApp.vueApp.use(Elm);
    // @ts-ignore
    console.info(Elm.version, 'version')
    // @ts-ignore
    nuxtApp.vueApp.provide(Elm.ID_INJECTION_KEY, {
        prefix: Math.floor(Math.random() * 10000),
        current: 0,
    })
});
