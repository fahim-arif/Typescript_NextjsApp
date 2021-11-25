import { AxiosRequestConfig, AxiosResponse, Method } from "axios";

import axiosInstance from "@common/utils/axiosInstance";

const path = "/tickets";

const sendEmailVerificationRequest = async (email: string): Promise<AxiosResponse> => {
  try {
    const options: AxiosRequestConfig = {
      method: "POST" as Method,
      url: path,
      data: {
        email,
        ticketType: 'EMAIL_VERIFICATION'
      }
    };

    const response: AxiosResponse = await axiosInstance.request(options);
    return response;
    
  } catch (error) {
    throw error;
  }
};

export { sendEmailVerificationRequest };
