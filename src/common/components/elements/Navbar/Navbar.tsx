import Link from "next/link";
import { useDisclosure } from "@chakra-ui/hooks";
import { Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react";

import SignUpModal from "@modules/Auth/components/SignUpModal";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SignUpModal isOpen={isOpen} onClose={onClose} />

      <Flex
        align="center"
        p="2"
        px={[2, 4]}
        borderBottom="1px"
        borderColor="gray.100"
      >
        <Box>
          <Link href="/">
            <Heading size="md" cursor="pointer">
              TwoMatches
            </Heading>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Button data-testid="signup" mr="4" onClick={onOpen}>
            Sign Up
          </Button>

          <Button
            data-testid="login"
            bg="red.400"
            color="white"
            _hover={{ bg: "red.300" }}
          >
            Log in
          </Button>
        </Box>
      </Flex>
    </>
  );
}
