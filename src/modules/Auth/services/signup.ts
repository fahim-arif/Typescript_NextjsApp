import http from "@common/utils/http";
import { UserCreate, UserGet } from "@modules/Auth/types/SignUp";

const endpoint = "/auth";

const signUpUser = async (userCreate: UserCreate): Promise<UserGet> => {
  const { email, password, store_name } = userCreate;

  return http
    .post(endpoint, {
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        email: email,
        password: password,
        store_name: store_name,
      }),
    })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
};

export { signUpUser };
