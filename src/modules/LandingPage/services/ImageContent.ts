import {AxiosRequestConfig, AxiosResponse, Method} from 'axios';
import axiosInstance from '@root/common/utils/axiosInstance';
import {GetImageContent} from '../types/ImageSection';

const path = '/image-sections?populate=*';

export const getImageContent = async (): Promise<GetImageContent> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET' as Method,
      url: path,
    };

    const response: AxiosResponse<GetImageContent> = await axiosInstance(process.env.NEXT_PUBLIC_STRAPI_SERVER).request(
      options
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
