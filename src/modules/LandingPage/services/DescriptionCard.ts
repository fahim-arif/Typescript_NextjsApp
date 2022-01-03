import {AxiosRequestConfig, AxiosResponse, Method} from 'axios';
import axiosInstance from '@root/common/utils/axiosInstance';
import {GetDescriptionCard} from '../types/DescriptionCard';

const path = '/description-cards?populate=*';

export const getDescriptionCard = async (): Promise<GetDescriptionCard> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET' as Method,
      url: path,
    };

    const response: AxiosResponse<GetDescriptionCard> =
      await axiosInstance(process.env.NEXT_PUBLIC_STRAPI_SERVER).request(options);

    return response.data;
  } catch (error) {
    throw error;
  }
};
