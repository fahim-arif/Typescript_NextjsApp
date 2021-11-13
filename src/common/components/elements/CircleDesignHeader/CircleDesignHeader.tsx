import React from "react";
import Link from "next/link";
import { Flex, HStack, Box, Heading, Circle } from "@chakra-ui/react";

import { Logo } from "@common/components/elements/Logo";
import ArrowLeft from "../ArrowLeft";
import {
  LaptopCircles,
  TabletCircles,
  MobileCircles,
} from "@common/components/elements/Circles";

export default function CircleDesignHeader({ title, headingWidth, ...props }) {
  return (
    <Flex
      direction="column"
      paddingTop={{ base: "7", xl: "12.9375rem" }}
      overflow="hidden"
      position="relative"
      width={{ base: "full" }}
      height={{ base: "16.125rem", md: "23.875rem", lg: "16.187rem" }}
      marginBottom={{ base: "1.75rem", md: "8.75rem", lg: "3.47rem" }}
      bg="radial-gradient(32.74% 31.33% at 97.48% 23.24%, rgba(191, 195, 231, 0.2) 0%, rgba(207, 210, 237, 0) 100%), radial-gradient(76.35% 25.03% at 0% 59.45%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(107.59% 39.88% at 88.75% 60.12%, rgba(255, 235, 225, 0.4) 0%, rgba(255, 235, 225, 0.4) 100%), linear-gradient(357.01deg, rgba(249, 101, 7, 0.6) 2.91%, rgba(249, 106, 7, 0) 52.54%);"
      {...props}
    >
      <Box
        display={{ base: "block", md: "none" }}
        width="full"
        height="full"
        position="absolute"
        bottom="-80px"
      >
        <MobileCircles prefixId="mob" width="100%" height="100%" />
      </Box>

      <Box
        display={{ base: "none", md: "block", lg: "none" }}
        width="full"
        height="full"
        position="absolute"
        bottom="-150px"
      >
        <TabletCircles width="100%" height="100%" />
      </Box>

      <Box
        display={{ base: "none", lg: "block", xl: "none" }}
        width="full"
        height="full"
        position="absolute"
        bottom="-100px"
      >
        <LaptopCircles width="100%" height="100%" />
      </Box>

      <HStack
        spacing="1.875rem"
        align="start"
        marginLeft={{ base: "1.75rem", md: "2.56rem" }}
      >
        <Link href="/">
          <a>
            <Circle
              display={{ base: "flex" }}
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
            <Logo prefixId="logo" display={{ base: "flex", xl: "none" }} />
          </a>
        </Link>
      </HStack>

      <Heading
        color="grayScale.100"
        fontSize={{ base: "mh2", md: "th2", xl: "h2" }}
        maxWidth={headingWidth}
        marginLeft={{ base: "1.75rem", md: "2.56rem" }}
        marginRight={{ base: "1.75rem", md: "1rem" }}
        marginTop={{ base: "1.5rem", md: "3.75rem", lg: "2rem" }}
        marginBottom="1.75rem"
        lineHeight={{
          base: "2.75rem",
          md: "3.125rem",
          xl: "3.75rem",
        }}
      >
        {title}
      </Heading>
    </Flex>
  );
}
