import axios from 'axios'
// import fs from 'fs'
// import path, { dirname } from 'path'
// import { fileURLToPath } from 'url'
// export const __dirname = dirname(fileURLToPath(import.meta.url))
const res = await axios.get(`https://unpkg.com/element-plus@2.4.0`);
eval(res.data);

// export const writeElm = (version = '2.4.0') => {
//   return new Promise((resolve) => {
//     axios.get(`https://unpkg.com/element-plus@2.4.0`).then((res) => {
//       // console.info(res.data)
//       const file = path.resolve(__dirname, `./element-files/element@${version}.js`);
//       fs.writeFile(file, res.data, 'utf-8', () => {
//         fs.readFile(file, 'utf-8', (err, res) => {
//           resolve(file)
//         })
//       })
//     })
//   })
// }
