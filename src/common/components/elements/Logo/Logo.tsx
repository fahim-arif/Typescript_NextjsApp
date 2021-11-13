import React from "react";
import { HStack } from "@chakra-ui/react";

import { LogoIcon, LogoText } from ".";

export default function Logo({
  prefixId,
  logoIconWidth = 25,
  logoIconHeight = 33,
  ...props
}) {
  return (
    <HStack
      display="flex"
      spacing={{ base: "0.6875rem", lg: "0.9375rem" }}
      {...props}
    >
      <LogoIcon
        prefixId={prefixId}
        width={logoIconWidth}
        height={logoIconHeight}
      />
      <LogoText />
    </HStack>
  );
}
