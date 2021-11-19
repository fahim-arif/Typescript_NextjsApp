import React from "react";
import { Box } from "@chakra-ui/react";

import LaptopFooterCircles from "@common/components/elements/Circles/LaptopFooterCircles";
import MobileFooterCircles from "@common/components/elements/Circles/MobileFooterCircles";

export default function CircleDesignBottom({ ...props }) {
  return (
    <>
      <Box
        display={{ base: "none", md: "block" }}
        position="absolute"
        width="full"
        bottom="0rem"
      >
        <LaptopFooterCircles width="100%" />
      </Box>

      <Box
        display={{ base: "block", md: "none" }}
        position="absolute"
        width="full"
        bottom="0rem"
      >
        <MobileFooterCircles width="100%" />
      </Box>
    </>
  );
}
