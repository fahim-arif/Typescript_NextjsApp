import {AxiosRequestConfig, AxiosResponse, Method} from 'axios';

import axiosInstance from '@common/utils/axiosInstance';
import {GetImageContent} from '@modules/LandingPage/types/ImageSection';

const STRAPI_API = `${process.env.NEXT_PUBLIC_STRAPI_HOST}/api`;
const path = '/image-sections?populate=*';

export const getImageContent = async (): Promise<GetImageContent> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET' as Method,
      url: path,
    };

    const response: AxiosResponse<GetImageContent> = await axiosInstance(
      STRAPI_API
    ).request(options);

    return response.data;
  } catch (error) {
    throw error;
  }
};
