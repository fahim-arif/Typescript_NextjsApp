import { useContext } from "react";
import { Auth0Context } from "@common/context/Auth0Context";

const useAuth = () => {
  return useContext(Auth0Context);
};

export default useAuth;
