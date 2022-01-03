import {AxiosRequestConfig, AxiosResponse, Method} from 'axios';
import axiosInstance from '@root/common/utils/axiosInstance';
import {GetBannerContent} from '../types/Footer';

const path = '/footers';

export const getFooterContent = async (): Promise<GetBannerContent> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET' as Method,
      url: path,
    };

    const response: AxiosResponse<GetBannerContent> = await axiosInstance(process.env.NEXT_PUBLIC_STRAPI_SERVER).request(
      options
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
