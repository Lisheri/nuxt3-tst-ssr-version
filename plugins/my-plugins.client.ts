import { appendNode, NodeType } from '../utils/appendNode';

export default defineNuxtPlugin(async (nuxtApp) => {
    if (process.browser) {
      const version = nuxtApp._route.query.version || '4.7.2';
      const vue = await import('vue');
      (window as any).Vue = vue; // ? 提供element-plus初始化, 若单独走cdn会导致element-plus初始化时版本和注水之前版本不统一
      // ? 阻塞加载会消耗性能
      await appendNode(
        NodeType.Script,
        // `https://unpkg.com/element-plus@${version}`,
        `https://fastly.jsdelivr.net/npm/vant@${version}/lib/vant.min.js`,
        () => {
          const elementPlus = (window as any).vant;
          nuxtApp.vueApp.use(elementPlus);
          nuxtApp.vueApp.provide(elementPlus.ID_INJECTION_KEY, {
            prefix: Math.floor(Math.random() * 10000),
            current: 0,
          });
        }
      )
    };
});
