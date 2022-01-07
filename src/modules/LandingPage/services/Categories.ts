import {AxiosRequestConfig, AxiosResponse, Method} from 'axios';

import axiosInstance from '@common/utils/axiosInstance';
import {TopCategoryGet} from '@modules/LandingPage/types/Category';

const STRAPI_API = `${process.env.NEXT_PUBLIC_STRAPI_HOST}/api`;
const path = '/top-categories';

const getTopCategories = async (): Promise<TopCategoryGet> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET' as Method,
      url: path,
    };

    const response: AxiosResponse<TopCategoryGet> = await axiosInstance(
      STRAPI_API
    ).request(options);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export {getTopCategories};
