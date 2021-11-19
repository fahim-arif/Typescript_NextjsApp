import { AxiosRequestConfig, AxiosResponse, Method } from "axios";

import axiosInstance from "@common/utils/axiosInstance";
import { ForgotPasswordType } from "@modules/ResetPassword/types/ResetPassword";

const path = "/user-tickets";

const sendForgotPasswordRequest = async (email: ForgotPasswordType): Promise<AxiosResponse> => {
  try {
    const options: AxiosRequestConfig = {
      method: "POST" as Method,
      url: path,
      data: {
        email,
        ticketType: 'CHANGE_PASSWORD'
      }
    };

    const response: AxiosResponse = await axiosInstance.request(options);
    return response;
  } catch (error) {
    throw error;
  }
};

const verifyTicket = async (ticket: string): Promise<AxiosResponse> => {
  try {
    const options: AxiosRequestConfig = {
      method: "GET" as Method,
      url: `${path}/verify/${ticket}`,
    };

    const response: AxiosResponse = await axiosInstance.request(options);
    return response;
  } catch (error) {
    throw error;
  }
};

export { sendForgotPasswordRequest, verifyTicket };
