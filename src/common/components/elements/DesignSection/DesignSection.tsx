import React from "react";
import Link from "next/link";
import { HStack, Box, Heading, Circle } from "@chakra-ui/react";

import { Logo } from "@common/components/elements/Logo";
import ArrowLeft from "../ArrowLeft";
import ArrowRight from "../ArrowRight";
import { BigCircles } from "../Circles";

interface DesignSectionProps {
  title: string;
  hide?: () => void;
  display: any;
}

export default function DesignSection({
  title,
  hide,
  ...props
}: DesignSectionProps) {
  return (
    <Box
      position="relative"
      overflow="hidden"
      width={{ base: "full", lg: "20rem", xl: "32.75rem" }}
      paddingTop={{ base: "1.75rem", lg: "11" }}
      paddingBottom={{ base: "20rem" }}
      background="radial-gradient(37.11% 37.11% at 100% 1.28%, rgba(191, 195, 231, 0.2) 0%, rgba(207, 210, 237, 0) 100%), radial-gradient(76.35% 25.03% at 0% 59.45%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(107.59% 39.88% at 88.75% 60.12%, rgba(255, 235, 225, 0.4) 0%, rgba(255, 235, 225, 0.4) 100%), linear-gradient(357.01deg, rgba(249, 101, 7, 0.6) 2.91%, rgba(249, 106, 7, 0) 52.54%);"
      {...props}
    >
      <Box
        marginLeft={{ base: "1.75rem", xl: "12.5" }}
        marginBottom={{ base: "0rem", sm: "8rem", md: "20rem" }}
      >
        <HStack
          spacing="1.875rem"
          marginBottom={{ base: "3.1875rem", lg: "7.1875rem" }}
        >
          <Link href="/">
            <a>
              <Circle
                display={{ base: "flex", lg: "none" }}
                size="2.125em"
                borderWidth="1px"
                borderColor="grayScale.500"
                bg="transparent"
                color="white"
                cursor="pointer"
              >
                <ArrowLeft color="grayScale.100" />
              </Circle>
            </a>
          </Link>

          <Link href="/">
            <a>
              <Logo prefixId="designLogo" />
            </a>
          </Link>
        </HStack>

        <Heading
          color="grayScale.100"
          fontSize={{ base: "mh2", lg: "h2" }}
          maxWidth="23.1875rem"
          marginRight={{ base: "1.75rem", md: "1rem" }}
          marginBottom="1.75rem"
          lineHeight={{
            base: "2.75rem",
            lg: "3.75rem",
          }}
        >
          {title}
        </Heading>

        <Circle
          display={{ base: "flex", lg: "none" }}
          size="3.375em"
          bg="grayScale.100"
          color="white"
          cursor="pointer"
          onClick={() => hide()}
        >
          <ArrowRight />
        </Circle>
      </Box>

      <Box width="full" position="absolute" bottom="0">
        <BigCircles width="100%" height="100%" />
      </Box>
    </Box>
  );
}
