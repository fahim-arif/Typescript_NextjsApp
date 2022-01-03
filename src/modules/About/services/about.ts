import {AxiosRequestConfig, AxiosResponse, Method} from 'axios';

import axiosInstance from '@common/utils/axiosInstance';
import {ContactUsType} from '@modules/About/types/ContactUs';
import {AboutContentGet} from '@modules/About/types/AboutContent';

const getAboutContent = async (): Promise<AboutContentGet> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET' as Method,
      url: '/about-page/?populate=*',
    };

    const response: AxiosResponse<AboutContentGet> =
      await axiosInstance(process.env.NEXT_PUBLIC_STRAPI_SERVER).request(options);

    return response.data;
  } catch (error) {
    throw error;
  }
};

const sendQuestion = async (data: ContactUsType): Promise<AxiosResponse> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'POST' as Method,
      url: '/contact-us',
      data,
    };

    const response: AxiosResponse = await axiosInstance(process.env.NEXT_PUBLIC_API_SERVER_HOST).request(options);
    return response;
  } catch (error) {
    throw error;
  }
};

export {sendQuestion, getAboutContent};
