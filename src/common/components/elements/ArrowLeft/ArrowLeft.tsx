import * as React from "react";
import { Icon } from "@chakra-ui/react";

function ArrowLeftIcon(props: any) {
  return (
    <Icon viewBox="0 0 15 8" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.319.516l.563.568L2.37 3.572l11.831.028-.002.8-11.837-.028 2.522 2.547-.568.563L.834 3.967 4.32.516z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default ArrowLeftIcon;
