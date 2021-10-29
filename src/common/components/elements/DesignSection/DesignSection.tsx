import React from "react";
import { Box, Heading, Circle, HStack } from "@chakra-ui/react";

import { Logo } from "@common/components/elements/Logo";
import ArrowRight from "../ArrowRight";

export default function DesignSection({ hide, ...props }) {
  return (
    <Box
      position="relative"
      overflow="hidden"
      width={{ base: "full", lg: "20rem", xl: "32.75rem" }}
      paddingTop={{ base: "1.75rem", lg: "11" }}
      paddingLeft={{ base: "1.75rem", xl: "12.5" }}
      background="radial-gradient(37.11% 37.11% at 100% 1.28%, rgba(191, 195, 231, 0.2) 0%, rgba(207, 210, 237, 0) 100%), radial-gradient(76.35% 25.03% at 0% 59.45%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(107.59% 39.88% at 88.75% 60.12%, rgba(255, 235, 225, 0.4) 0%, rgba(255, 235, 225, 0.4) 100%), linear-gradient(357.01deg, rgba(249, 101, 7, 0.6) 2.91%, rgba(249, 106, 7, 0) 52.54%);"
      {...props}
    >
      <Logo
        marginBottom={{ base: "3.1875rem", lg: "7.1875rem" }}
        prefixId="designLogo"
      />

      <Heading
        color="grayScale.100"
        fontSize={{ base: "mh2", lg: "h2" }}
        maxWidth="23.1875rem"
        marginRight={{ base: "6rem", lg: "1rem" }}
        marginBottom="1.75rem"
        // marginBottom="33.0625rem"
        lineHeight={{
          base: "2.75rem",
          lg: "3.75rem",
        }}
      >
        Create an account to start your free trial
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

      <Box fontSize={{ base: "0.7rem", md: "1rem" }}>
        <Circle
          size="27em"
          position="absolute"
          bottom="-4.375em"
          left="2.5em"
          border="1px"
          borderColor="#FEC2A6"
        />

        <Circle
          size="33.56em"
          position="absolute"
          bottom="-16.25em"
          left="-18.75em"
          background="radial-gradient(31.8% 31.8% at 50.11% 36.29%, rgba(210, 6, 6, 0.6) 0%, rgba(210, 6, 6, 0) 100%), linear-gradient(193.05deg, #FFBE0B -22.4%, #F42B03 90.91%)"
        />

        <Circle
          size="27.8125em"
          position="absolute"
          bottom="-10em"
          left="17.1875em"
          transform="rotate(-64.18deg)"
          background="linear-gradient(55.65deg, rgba(58, 61, 83, 0.4) 40.22%, rgba(58, 61, 83, 0) 66.38%), radial-gradient(54.44% 54.44% at 72.42% 11.19%, rgba(207, 210, 237, 0.6) 0%, rgba(207, 210, 237, 0) 100%), radial-gradient(31.8% 31.8% at 50.11% 36.29%, rgba(210, 6, 6, 0.6) 0%, rgba(210, 6, 6, 0) 100%), linear-gradient(193.05deg, #FFBE0B -22.4%, #F42B03 90.91%)"
        />

        <Circle
          size="33.56em"
          position="absolute"
          bottom="-20em"
          left="-3.125em"
          transform="rotate(-41.61deg)"
          background="radial-gradient(61.64% 61.64% at -8.29% 32.35%, rgba(210, 6, 6, 0.2) 0%, rgba(210, 6, 6, 0) 100%), radial-gradient(91.7% 91.7% at 38.1% 8.3%, rgba(254, 213, 204, 0.4) 0%, rgba(254, 213, 204, 0) 100%), radial-gradient(70.05% 44.35% at 75.88% 9.22%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 46.54%), linear-gradient(205.49deg, #FFEBE1 6.12%, #AFB4E1 67.36%)"
        />
      </Box>
    </Box>
  );
}
