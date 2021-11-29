import React from "react";
import Link from "next/link";
import { HStack } from "@chakra-ui/react";

import { LogoIcon, LogoText } from ".";

export default function Logo({
  linkTo = "/",
  prefixId = "logo",
  logoIconWidth = 25,
  logoIconHeight = 33,
  ...props
}) {
  return (
    <Link href={linkTo}>
      <a>
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
      </a>
    </Link>
  );
}
