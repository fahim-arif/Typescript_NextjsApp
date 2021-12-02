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
    if (error.response && error.response.status !== 500) {
      throw new Error(error.response.data.detail);
    } else {
      throw new Error("We’re having trouble sending email verification request email. Please try again later.");
    }
  }
};

export { sendEmailVerificationRequest };
