import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";

console.log("API SERVER HOST:", process.env.NEXT_PUBLIC_API_SERVER_HOST);

const SERVER_HOST: string = process.env.NEXT_PUBLIC_API_SERVER_HOST;

// update this method when using different http client library
const request = (method: Method = "GET", url: string, config = {}): Promise<AxiosResponse> => {
  
  const { params, data, headers, maxContentLength }: AxiosRequestConfig = config;
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
    axios(transformedRequestData)
      .then(response => {
        const res = normalizeResponse(response);
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}

// normalize response to expected format used in client code
const normalizeResponse = (response: AxiosResponse<any>) => {
  return response;
}

const get = (url: string, config: unknown) => {
  return request("GET", url, config);
}

const post = (url: string, config: unknown) => {
  return request("POST", url, config);
}

const put = (url: string, config: unknown) => {
  return request("PUT", url, config);
}

const destroy = (url: string, config: unknown) => {
  return request("DELETE", url, config);
}

export default { get, post, put, destroy }