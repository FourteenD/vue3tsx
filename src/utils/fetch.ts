import utils from "./";
type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
/* It's a wrapper around the native fetch API that allows you to make requests to a specific URL with a
specific set of default options. */
export class Fetch {
  /* It's a constructor function that takes in a url and a RequestInit object. */
  url: string;
  init: RequestInit;
  constructor(url: string, init: RequestInit) {
    this.url = url;
    this.init = init;
  }
  /**
   * It takes a path, a method, and an optional body, and returns a promise that resolves to a response
   * @param {string} path - The path to the resource you want to access.
   * @param {Method} method - The HTTP method to use.
   * @param {BodyInit} [body] - The body of the request.
   * @returns A promise that resolves to a Response object.
   */
  request(path: string, method: Method, body?: BodyInit): Promise<Response> {
    const url = `${this.url}${path}`;
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
