import utils from "./";

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
interface RequestInit {
  baseUrl: string;
}

export class Fetch {
  init: RequestInit;
  /**
   * 构造函数将 RequestInit 类型的对象作为参数，并将其分配给 Request 对象的 init 属性
   * @param {RequestInit} init - 请求初始化
   */
  constructor(init: RequestInit) {
    this.init = init;
  }
  /**
   * 它接受一个路径、一个请求方法和一个可选的主体，并返回一个解析为响应的 Promise
   * @param {string} path - 您要访问的资源的路径。
   * @param {Method} method - 要使用的 HTTP 方法。
   * @param {BodyInit} [body] - 请求的正文。
   * @returns 解析为 Response 对象的 Promise。
   */
  request(path: string, method: Method, body?: BodyInit): Promise<Response> {
    const url = `${this.init.baseUrl}${path}`;
    const init = {
      ...this.init,
      method,
      body,
    };
    return fetch(url, init);
  }
  get(
    path: string,
    query: {
      [key: string]: any;
    }
  ): Promise<Response> {
    if (query) path += utils.url.queryParams(query);
    return this.request(path, "GET");
  }
  post(path: string, body: BodyInit): Promise<Response> {
    return this.request(path, "POST", body);
  }
  put(path: string, body: BodyInit): Promise<Response> {
    return this.request(path, "PUT", body);
  }
  delete(
    path: string,
    query: {
      [key: string]: any;
    }
  ): Promise<Response> {
    if (query) path += utils.url.queryParams(query);
    return this.request(path, "DELETE");
  }
  patch(path: string, body: BodyInit): Promise<Response> {
    return this.request(path, "PATCH", body);
  }
  head(path: string, body: BodyInit): Promise<Response> {
    return this.request(path, "HEAD", body);
  }
  options(path: string, body: BodyInit): Promise<Response> {
    return this.request(path, "OPTIONS", body);
  }
}

export default Fetch;
