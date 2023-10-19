// import ElementPlus from 'element-plus'
// import { ID_INJECTION_KEY } from 'element-plus';
// @ts-ignore
import Elm from '../loadElm';
console.info(Elm)
export default defineNuxtPlugin(async nuxtApp => {
  console.info(nuxtApp._route.query.version)
  // const file = await writeElm();
  // @ts-ignore
  // const elm = await import("../element-files/element@2.4.0.js");
  // console.info(elm)
    nuxtApp.vueApp.use(Elm)
    // nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
    //     prefix: Math.floor(Math.random() * 10000),
    //     current: 0,
    // })
})