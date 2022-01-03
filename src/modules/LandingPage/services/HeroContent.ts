import {AxiosRequestConfig, AxiosResponse, Method} from 'axios';
import axiosInstance from '@root/common/utils/axiosInstance';
import {GetHeroContent} from '../types/Hero';

const path = '/hero-sections';

export const getHeroContent = async (): Promise<GetHeroContent> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET' as Method,
      url: path,
    };

    const response: AxiosResponse<GetHeroContent> = await axiosInstance(process.env.NEXT_PUBLIC_STRAPI_SERVER).request(
      options
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
