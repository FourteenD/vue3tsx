type ArrayFormat = "indices" | "brackets" | "repeat" | "comma";

/**
 * 它将对象转换为查询字符串
 * @param data - 要转换为查询字符串的数据。
 * @param [isPrefix=true] - 是否在字符串前面添加问号。
 * @param {ArrayFormat} [arrayFormat=brackets] - 数组的格式，可以是以下之一："indices" | "brackets" | "repeat" | "comma"
 * @returns {string}  返回一个查询字符串。
 */
export const queryParams = (
  data: { [key: string]: any } = {},
  isPrefix = true,
  arrayFormat: ArrayFormat = "brackets"
): string => {
  const prefix = isPrefix ? "?" : "";
  const _result = [];
  if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
    arrayFormat = "brackets";
  for (const key in data) {
    const value = data[key];
    // 去掉为空的参数
    if (["", undefined, null].indexOf(value) >= 0) {
      continue;
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case "indices":
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (let i = 0; i < value.length; i++) {
            _result.push(`${key}[${i}]=${value[i]}`);
          }
          break;
        case "brackets":
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach((_value) => {
            _result.push(`${key}[]=${_value}`);
          });
          break;
        case "repeat":
          // 结果: ids=1&ids=2&ids=3
          value.forEach((_value) => {
            _result.push(`${key}=${_value}`);
          });
          break;
        case "comma":
          // 结果: ids=1,2,3
          let commaStr = "";
          value.forEach((_value) => {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(`${key}=${commaStr}`);
          break;
        default:
          value.forEach((_value) => {
            _result.push(`${key}[]=${_value}`);
          });
      }
    } else {
      _result.push(`${key}=${value}`);
    }
  }
  return _result.length ? prefix + _result.join("&") : "";
};

export default {
  queryParams,
};
