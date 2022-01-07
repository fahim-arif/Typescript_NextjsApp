import {AxiosRequestConfig, AxiosResponse, Method} from 'axios';

import axiosInstance from '@common/utils/axiosInstance';
import {GetHeroContent} from '@modules/LandingPage/types/Hero';

const STRAPI_API = `${process.env.NEXT_PUBLIC_STRAPI_HOST}/api`;
const path = '/hero-section';

export const getHeroContent = async (): Promise<GetHeroContent> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET' as Method,
      url: path,
    };

    const response: AxiosResponse<GetHeroContent> = await axiosInstance(
      STRAPI_API
    ).request(options);

    return response.data;
  } catch (error) {
    throw error;
  }
};
