import axios from 'axios'

export const loadServerElement = async (version: string) => {
  const res = await axios.get(`https://unpkg.com/element-plus@${version}`);
  eval(res.data);
  // new Function(res.data)();
}
