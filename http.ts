import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";

const SERVER_HOST: string = process.env.NEXT_PUBLIC_SERVER_HOST;

// update this method when using different http client library
export function request(
  method: Method = "GET",
  url: string,
  config = {}
): Promise<AxiosResponse> {
  const { params, data, headers, maxContentLength }: AxiosRequestConfig =
    config;
  const baseURL = SERVER_HOST;

  // transform api parameters according to the http library schema
  const transformedRequestData: AxiosRequestConfig = {
    method: method,
    baseURL: baseURL,
    url: url,
    params: params,
    data: data,
    headers: headers,
    maxContentLength: maxContentLength,
  };

  return new Promise((resolve, reject) => {
    axios(transformedRequestData).then(resolve).catch(reject);
  });
}

export function get(url: string, config: unknown) {
  return request("GET", url, config);
}

export function post(url: string, config: unknown) {
  return request("POST", url, config);
}

export function put(url: string, config: unknown) {
  return request("PUT", url, config);
}

export function destroy(url: string, config: unknown) {
  return request("DELETE", url, config);
}
