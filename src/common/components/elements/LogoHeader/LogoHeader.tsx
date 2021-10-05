import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
import logo from "@public/logo.png";

export default function LogoHeader() {
  return (
    <Flex justify="center" align="center" direction="column" pt={8}>
      <Box position="relative" w={28} h={28}>
        <Image src={logo} alt="twoMatches logo" layout="fill" />
      </Box>
      <Flex align="center" mt={4} fontSize="4xl" color="gray.700">
        <Text>two</Text>
        <Text fontWeight="semibold">matches</Text>
      </Flex>
    </Flex>
  );
}
