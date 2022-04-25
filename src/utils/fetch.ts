type method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
export default class Fetch {
  url: string;
  init: RequestInit;
  constructor(url: string, init: RequestInit) {
    this.url = url;
    this.init = init;
  }
  request(path: string, method: method, body?: BodyInit): Promise<Response> {
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
      [key: string]: string | number;
    }
  ): Promise<Response> {
    const esc = encodeURIComponent;
    let queryParams = Object.keys(query)
      .map((key) => `${esc(key)}=${esc(query[key])}`)
      .join("&");
    if (queryParams) path += `?${queryParams}`;
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
      [key: string]: string | number;
    }
  ): Promise<Response> {
    const esc = encodeURIComponent;
    let queryParams = Object.keys(query)
      .map((key) => `${esc(key)}=${esc(query[key])}`)
      .join("&");
    if (queryParams) path += `?${queryParams}`;
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
