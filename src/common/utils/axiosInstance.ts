import axios from 'axios';

export default function axiosInstance(baseURL:string) {
  
  return axios.create({
    baseURL: baseURL,
    timeout: 30000,
    headers: {
      'content-type': 'application/json',
    },
  });
  
  
}