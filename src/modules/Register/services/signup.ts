import { AxiosRequestConfig, AxiosResponse, Method } from "axios";

import axiosInstance from "@common/utils/axiosInstance";
import { UserCreate } from "@modules/Register/types/SignUp";

const path = "/register";

const signUpUser = async (userCreate: UserCreate): Promise<AxiosResponse> => {
  try {
    const options: AxiosRequestConfig = {
      method: "POST" as Method,
      url: path,
      data: userCreate,
    };

    const response: AxiosResponse = await axiosInstance.request(options);
    return response;
  } catch (error) {
    throw error;
  }
};

export { signUpUser };
