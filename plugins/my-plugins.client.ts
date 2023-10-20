// import ElementPlus from "element-plus";
import { appendNode, NodeType } from '../utils/appendNode';
// import { cacheMap } from './my-plugins.server';

export default defineNuxtPlugin(async (nuxtApp) => {
    if (process.browser) {
      const version = nuxtApp._route.query.version;
      const vue = await import('vue');
      // const Elm = await import('../loadElm');
      // console.info(cacheMap.get(`element${version}`));
      // @ts-ignore
      window.Vue = vue; // ? 提供element-plus初始化, 若单独走cdn会导致element-plus初始化时版本和注水之前版本不统一
      // nuxtApp.vueApp.use(Elm);
      // @ts-ignore
      // console.info(Elm.version, 'version')
      // @ts-ignore
      // nuxtApp.vueApp.provide(Elm.ID_INJECTION_KEY, {
      //     prefix: Math.floor(Math.random() * 10000),
      //     current: 0,
      // })
      
      await appendNode(
        NodeType.Script,
        `https://unpkg.com/element-plus@${version}`,
        () => {
          // @ts-ignore
          const elementPlus = window.ElementPlus;
          nuxtApp.vueApp.use(elementPlus);
          nuxtApp.vueApp.provide(elementPlus.ID_INJECTION_KEY, {
            prefix: Math.floor(Math.random() * 10000),
            current: 0,
          });
        }
      )
      appendNode(NodeType.Link, `https://unpkg.com/element-plus@${version}/dist/index.css`)
    };
});
