export const isValidUsername = (str: string) => ['admin', 'editor'].indexOf(str.trim()) >= 0

export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)

export const isArray = (arg: any) => {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

export const isValidURL = (url: string) => {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

export const validateMobile = (rule: any, value: string, callback: any) => {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  if (reg.test(value)) {
    callback();
  } else {
    return callback(new Error('请输入正确的手机号'));
  }
}

// export const formatInputText = (str): string =>{
//     let pattern = new RegExp("[%--`~!@#$^&*()=|{}':;‘’《》_',\\[\\]<>/?~！@#￥……&*（）——| {}【】‘；：\\\"”“'。，、？]");
//     let resultStr = '';
//     for (let i = 0; i < str.length; i++) {
//         resultStr = resultStr+str.substr(i, 1).replace(pattern, '');
//     }
//     return resultStr;
// }

export const jsonString = (str: any) => {
    return typeof str === 'string' ? JSON.parse(str) : str
}
