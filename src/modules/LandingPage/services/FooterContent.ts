import {AxiosRequestConfig, AxiosResponse, Method} from 'axios';

import axiosInstance from '@common/utils/axiosInstance';
import {GetBannerContent} from '@modules/LandingPage/types/Footer';

const STRAPI_API = `${process.env.NEXT_PUBLIC_STRAPI_HOST}/api`;
const path = '/footer';

export const getFooterContent = async (): Promise<GetBannerContent> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET' as Method,
      url: path,
    };

    const response: AxiosResponse<GetBannerContent> = await axiosInstance(
      STRAPI_API
    ).request(options);

    return response.data;
  } catch (error) {
    throw error;
  }
};
