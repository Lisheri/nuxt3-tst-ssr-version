import axios from 'axios'
import vm from 'vm';

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
  await script.runInThisContext();
}

const loadModuleEval = async (url: string) => {
  const { data } = await axios.get(url);
  eval(data);
}

export const loadServerElement = async function (version: string) {
  // await loadModule(`https://unpkg.com/vue@3.3.4`);
  // await loadModule(`https://unpkg.com/element-plus@${version}`);
  // await loadModuleEval(`https://unpkg.com/element-plus@${version}`);
  await loadModuleEval(`https://fastly.jsdelivr.net/npm/vant@${version}/lib/vant.min.js`)
}
