import axios from 'axios'
import vm from 'vm';
import * as vue from 'vue';

// 'https://unpkg.com/dayjs/plugin/customParseFormat.js',
// const plugins = [
//   'customParseFormat',
//   'weekday',
//   'localeData',
//   'weekOfYear',
//   'weekYear',
//   'advancedFormat',
//   'quarterOfYear'
// ]

// export const loadServerElement = async (version: string) => {
//   for await (const plugin of plugins) {
    // const { data } = await axios.get(`https://unpkg.com/dayjs/plugin/${plugin}.js`);
    // eval(data);
//   }
//   const res2 = await axios.get('https://unpkg.com/dayjs/dayjs.min.js');
//   eval(res2.data);
//   const res = await axios.get(`https://unpkg.com/ant-design-vue@${version}/dist/antd.min.js`)
//   eval(res.data);
//   // new Function(res.data)();
// }

// v8虚拟机模拟script标签加载模块
const loadModule = async (url: string) => {
  const { data } = await axios.get(url);
  const script = new vm.Script(data);
  global.Vue = vue;
  await script.runInThisContext();
}

// const loadModuleEval = async (url: string) => {
//   const { data } = await axios.get(url);
//   if (process.env.NODE_ENV === 'production') {
//     // 生产环境下单独设置vue, 用于vant初始化
//     global.Vue = vue;
//   }
//   const res = eval(data);
// }

export const loadServerElement = async function (version: string) {
  // await loadModule(`https://unpkg.com/vue@3.3.4`);
  // await loadModule(`https://unpkg.com/element-plus@${version}`);
  // await loadModuleEval(`https://unpkg.com/element-plus@${version}`);
  // await loadModuleEval(`https://cdn.bootcdn.net/ajax/libs/vant/${version}/vant.min.js`)
  await loadModule(`https://cdn.bootcdn.net/ajax/libs/vant/${version}/vant.min.js`);
}
