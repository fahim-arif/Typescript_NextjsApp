import axios from "axios";

const API_SERVER_HOST: string = process.env.NEXT_PUBLIC_API_SERVER_HOST;

const axiosInstance = axios.create({
  baseURL: API_SERVER_HOST,
  timeout: 30000,
  headers: {
    "content-type": "application/json",
  },
});

export default axiosInstance;
