import * as React from "react";
import { Icon } from "@chakra-ui/react";

function EmailIcon(props: any) {
  return (
    <Icon viewBox="0 0 16 12" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.6v8a1.6 1.6 0 001.6 1.6h12.8A1.6 1.6 0 0016 9.6v-8A1.6 1.6 0 0014.4 0H1.6A1.6 1.6 0 000 1.6zm15.2.014V1.6a.8.8 0 00-.8-.8H1.6a.8.8 0 00-.8.8v.014l6.583 3.95a1.2 1.2 0 001.234 0l6.583-3.95zM.8 2.546V9.6a.8.8 0 00.8.8h12.8a.8.8 0 00.8-.8V2.546L9.029 6.25a2 2 0 01-2.058 0L.8 2.546z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default EmailIcon;
