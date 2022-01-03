import {AxiosRequestConfig, AxiosResponse, Method} from 'axios';

import axiosInstance from '@common/utils/axiosInstance';
import {SubscriberCreate, SubscriberGet} from '../types/Mailer';

const path = '/subscribers';

const getSubscribers = async (): Promise<SubscriberGet[]> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET' as Method,
      url: path,
    };

    const response: AxiosResponse<SubscriberGet[]> =
      await axiosInstance(process.env.NEXT_PUBLIC_API_SERVER_HOST).request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getSubscriberById = async (id: string): Promise<SubscriberGet> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET' as Method,
      url: `${path}/${id}`,
    };

    const response: AxiosResponse<SubscriberGet> = await axiosInstance(process.env.NEXT_PUBLIC_API_SERVER_HOST).request(
      options
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createSubscriber = async (
  subscriberCreate: SubscriberCreate
): Promise<SubscriberGet> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'POST' as Method,
      url: path,
      data: subscriberCreate,
    };

    const response: AxiosResponse<SubscriberGet> = await axiosInstance(process.env.NEXT_PUBLIC_API_SERVER_HOST).request(
      options
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {createSubscriber, getSubscribers, getSubscriberById};
