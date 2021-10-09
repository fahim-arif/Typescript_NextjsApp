import { AxiosResponse } from "axios";
import http from "@common/utils/http";
import { UserCreate } from "@modules/Auth/types/SignUp";

const endpoint = "/auth";

const signUpUser = async (userCreate: UserCreate): Promise<AxiosResponse> => {
  return http
    .post(endpoint, {
      data: userCreate,
    })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
};

export { signUpUser };
