import {AxiosRequestConfig, AxiosResponse, Method} from 'axios';
import axiosInstance from '@common/utils/axiosInstance';

import {TopCategoryGet} from '@modules/LandingPage/types/Category';

const path = '/top-categories';

const getTopCategories = async (): Promise<TopCategoryGet> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET' as Method,
      url: path,
    };

    const response: AxiosResponse<TopCategoryGet> = await axiosInstance(
      process.env.NEXT_PUBLIC_STRAPI_SERVER
    ).request(options);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export {getTopCategories};
