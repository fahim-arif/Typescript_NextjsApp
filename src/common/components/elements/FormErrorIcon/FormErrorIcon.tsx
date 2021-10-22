import * as React from "react";
import { Icon } from "@chakra-ui/react";

function FormErrorIcon(props: any) {
  return (
    <Icon viewBox="0 0 16 16" {...props}>
      <path
        d="M7.6 9.2v-4h.8v4h-.8zM8 12.4a.8.8 0 110-1.6.8.8 0 010 1.6z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.663 1.67C7.27.51 8.731.51 9.337 1.67l5.638 10.813C15.6 13.68 14.85 15.2 13.64 15.2H2.36c-1.211 0-1.96-1.521-1.336-2.716L6.663 1.67zm.71.37c.173-.332.426-.44.627-.44s.454.108.627.44l5.64 10.813c.184.355.167.765.01 1.084-.156.318-.401.463-.638.463H2.36c-.237 0-.482-.145-.638-.463a1.209 1.209 0 01.01-1.084l5.64-10.812z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default FormErrorIcon;
