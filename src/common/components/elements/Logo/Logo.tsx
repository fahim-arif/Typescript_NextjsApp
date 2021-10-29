import React from "react";
import { HStack } from "@chakra-ui/react";

import { LogoIcon, LogoText } from ".";

export default function Logo({ prefixId, ...props }) {
  return (
    <HStack
      display="flex"
      spacing={{ base: "0.6875rem", lg: "0.9375rem" }}
      {...props}
    >
      <LogoIcon prefixId={prefixId} />
      <LogoText />
    </HStack>
  );
}
