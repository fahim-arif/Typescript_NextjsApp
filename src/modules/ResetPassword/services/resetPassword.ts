import { AxiosRequestConfig, AxiosResponse, Method } from "axios";

import { TicketWithUser } from "@modules/ResetPassword/types/ResetPassword";
import axiosInstance from "@common/utils/axiosInstance";
import auth0UpdateErrors from "@common/resources/auth0UpdateErrors.json";

const path = "/tickets";

const sendForgotPasswordRequest = async (email: string): Promise<AxiosResponse> => {
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
    if (error.response && error.response.status !== 500) {
      throw new Error(error.response.data.detail);
    } else {
      throw new Error("We’re having trouble sending password reset email. Please try again later.");
    }
  }
};

const verifyTicket = async (ticket: string): Promise<TicketWithUser> => {
  try {
    const options: AxiosRequestConfig = {
      method: "GET" as Method,
      url: `${path}/${ticket}`,
    };

    const response: AxiosResponse = await axiosInstance.request(options);
    const data = response.data;
    return data;

  } catch (error) {
    if (error.response && error.response.status !== 500) {
      throw new Error(error.response.data.detail);
    } else {
      throw new Error("Something went wrong. Please try again later");
    }
  }
};

const resetPassword = async (ticket: string, password: string): Promise<AxiosResponse> => {
  try {
    const options: AxiosRequestConfig = {
      method: "POST" as Method,
      url: `${path}/reset-password`,
      data: {
        id: ticket,
        password
      }
    };

    const response: AxiosResponse = await axiosInstance.request(options);
    return response;

  } catch (error) {
    if (error.response.status === 400) {
      // extract auth0 error code from response message and map to custom error message
      const errorCode = error.response.data.detail.split(':')[0];
      if (errorCode && auth0UpdateErrors.hasOwnProperty(errorCode)) {
        throw new Error(auth0UpdateErrors[errorCode]);
      }
      throw new Error(error.response.data.detail);
    } else if (error.response && error.response.status !== 500) {
        throw new Error(error.response.data.detail);
    } else {
      throw new Error("We’re having trouble resetting your password. Please try again later.");
    }
  }
}

export { sendForgotPasswordRequest, verifyTicket, resetPassword };
