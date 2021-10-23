import { AxiosResponse } from "axios";
import http from "@common/utils/http";
import { UserCreate } from "@modules/Register/types/SignUp";

const endpoint = "/register";

const signUpUser = async (userCreate: UserCreate): Promise<AxiosResponse> => {
  return http
    .post(`${endpoint}/`, {
      data: userCreate,
    })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
};

export { signUpUser };
