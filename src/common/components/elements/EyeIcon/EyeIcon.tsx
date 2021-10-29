import * as React from "react";
import { Icon } from "@chakra-ui/react";

function PasswordIcon(props: any) {
  return (
    <Icon viewBox="0 0 16 10" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1c-2.016 0-3.963.86-5.435 2.431L1.096 5l1.47 1.569C4.037 8.141 5.901 9 8 9c2.098 0 3.962-.859 5.435-2.431L14.904 5l-1.47-1.569C11.965 1.861 10.017 1 8 1zm8 4l-1.982-2.116C12.404 1.161 10.248.2 8 .2c-2.249 0-4.404.96-6.018 2.684L0 5l1.982 2.116C3.593 8.836 5.664 9.8 8 9.8s4.407-.963 6.018-2.684L16 5z"
        fill="currentColor"
      />
      <path
        d="M8 3.8a1.2 1.2 0 01-1.599 1.132L6.4 5a1.6 1.6 0 101.532-1.599c.044.125.068.26.068.399z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default PasswordIcon;
