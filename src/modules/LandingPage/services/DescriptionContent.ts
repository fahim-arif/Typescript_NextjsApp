import {AxiosRequestConfig, AxiosResponse, Method} from 'axios';
import axiosInstance from '@root/common/utils/axiosInstance';
import {GetDescription} from '../types/Description';

const path = '/description-sections';

export const getDescriptionContent = async (): Promise<GetDescription> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET' as Method,
      url: path,
    };

    const response: AxiosResponse<GetDescription> =
      await axiosInstance(process.env.NEXT_PUBLIC_STRAPI_SERVER).request(options);

    return response.data;
  } catch (error) {
    throw error;
  }
};
