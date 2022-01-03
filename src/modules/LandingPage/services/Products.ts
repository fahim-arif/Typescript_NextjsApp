import {AxiosRequestConfig, AxiosResponse, Method} from 'axios';
import axiosInstance from '@root/common/utils/axiosInstance';
import {ProductCreate, ProductGet} from '../types/Product';


const path = '/products?populate=*';

const getProducts = async (): Promise<ProductGet> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET' as Method,
      url: path,
    };

    const response: AxiosResponse<ProductGet> = await axiosInstance(process.env.NEXT_PUBLIC_STRAPI_SERVER).request(
      options
    );   
    
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (id: string): Promise<ProductGet> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET' as Method,
      url: `${path}/${id}`,
    };

    const response: AxiosResponse<ProductGet> = await axiosInstance(process.env.NEXT_PUBLIC_STRAPI_SERVER).request(
      options
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createProduct = async (
  productCreate: ProductCreate
): Promise<ProductGet> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'POST' as Method,
      url: path,
      data: productCreate,
    };

    const response: AxiosResponse<ProductGet> =
      await axiosInstance(process.env.NEXT_PUBLIC_STRAPI_SERVER).request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {createProduct, getProducts, getProductById};