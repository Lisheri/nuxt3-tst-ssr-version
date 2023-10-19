// import ElementPlus from "element-plus";
import { appendNode, NodeType } from '../utils/appendNode';

export default defineNuxtPlugin(async (nuxtApp) => {
    if (process.browser) {
      const version = nuxtApp._route.query.version;
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
