export enum NodeType {
  Script = 'script',
  Link = 'link'
}
export const appendNode = (nodeType: NodeType, src: string, cb =  () => {}, isModule = false) => {
  return new Promise((resolve) => {
    const node = document.createElement(nodeType);
    if (nodeType === NodeType.Script) {
      (node as HTMLScriptElement).src = src;
      isModule && (node.type = 'module')
      document.body.appendChild(node)
      node.onload = () => {
        cb();
        resolve('ok');
      }
    } else {
      (node as HTMLLinkElement).rel = 'stylesheet';
      (node as HTMLLinkElement).href = src
      document.head.appendChild(node);
      resolve('ok');
    }
  })
}
