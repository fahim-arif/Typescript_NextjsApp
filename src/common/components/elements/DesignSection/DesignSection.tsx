import React from "react";
import { Box, HStack, Heading, Circle } from "@chakra-ui/react";

import { Logo, LogoText } from "../Logo";

export default function DesignSection() {
  return (
    <Box
      position="relative"
      overflow="hidden"
      width={["0rem", null, null, null, "32.75rem"]}
      background="radial-gradient(37.11% 37.11% at 100% 1.28%, rgba(191, 195, 231, 0.2) 0%, rgba(207, 210, 237, 0) 100%), radial-gradient(76.35% 25.03% at 0% 59.45%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(107.59% 39.88% at 88.75% 60.12%, rgba(255, 235, 225, 0.4) 0%, rgba(255, 235, 225, 0.4) 100%), linear-gradient(357.01deg, rgba(249, 101, 7, 0.6) 2.91%, rgba(249, 106, 7, 0) 52.54%);"
    >
      <HStack spacing="1rem" marginTop="11" marginLeft="12.5">
        <Logo />
        <LogoText />
      </HStack>

      <Heading
        color="grayScale.100"
        fontSize="h2"
        width="23.1875rem"
        marginTop="7.6875rem"
        marginLeft="12.5"
      >
        Create an account to start your free trial
      </Heading>

      <Circle
        size="27rem"
        position="absolute"
        bottom="-4.375rem"
        left="10"
        border="1px"
        borderColor="#FEC2A6"
      />

      <Circle
        size="33.56rem"
        position="absolute"
        bottom="-16.25rem"
        left="-18.75rem"
        background="radial-gradient(31.8% 31.8% at 50.11% 36.29%, rgba(210, 6, 6, 0.6) 0%, rgba(210, 6, 6, 0) 100%), linear-gradient(193.05deg, #FFBE0B -22.4%, #F42B03 90.91%)"
      />

      <Circle
        size="27.8125rem"
        position="absolute"
        bottom="-10rem"
        left="17.1875rem"
        transform="rotate(-64.18deg)"
        background="linear-gradient(55.65deg, rgba(58, 61, 83, 0.4) 40.22%, rgba(58, 61, 83, 0) 66.38%), radial-gradient(54.44% 54.44% at 72.42% 11.19%, rgba(207, 210, 237, 0.6) 0%, rgba(207, 210, 237, 0) 100%), radial-gradient(31.8% 31.8% at 50.11% 36.29%, rgba(210, 6, 6, 0.6) 0%, rgba(210, 6, 6, 0) 100%), linear-gradient(193.05deg, #FFBE0B -22.4%, #F42B03 90.91%)"
      />

      <Circle
        size="33.56rem"
        position="absolute"
        bottom="-20rem"
        left="-3.125rem"
        transform="rotate(-41.61deg)"
        background="radial-gradient(61.64% 61.64% at -8.29% 32.35%, rgba(210, 6, 6, 0.2) 0%, rgba(210, 6, 6, 0) 100%), radial-gradient(91.7% 91.7% at 38.1% 8.3%, rgba(254, 213, 204, 0.4) 0%, rgba(254, 213, 204, 0) 100%), radial-gradient(70.05% 44.35% at 75.88% 9.22%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 46.54%), linear-gradient(205.49deg, #FFEBE1 6.12%, #AFB4E1 67.36%)"
      />
    </Box>
  );
}
