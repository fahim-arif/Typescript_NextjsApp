import {AxiosRequestConfig, AxiosResponse, Method} from 'axios';

import axiosInstance from '@common/utils/axiosInstance';
import {GetDescriptionCard} from '@modules/LandingPage/types/DescriptionCard';

const STRAPI_API = `${process.env.NEXT_PUBLIC_STRAPI_HOST}/api`;
const path = '/description-cards?populate=*';

export const getDescriptionCard = async (): Promise<GetDescriptionCard> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET' as Method,
      url: path,
    };

    const response: AxiosResponse<GetDescriptionCard> = await axiosInstance(
      STRAPI_API
    ).request(options);

    return response.data;
  } catch (error) {
    throw error;
  }
};
