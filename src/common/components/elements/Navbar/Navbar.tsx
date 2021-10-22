import Link from "next/link";
import { Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Flex
        align="center"
        p="2"
        px={[2, 4]}
        borderBottom="1px"
        borderColor="gray.100"
      >
        <Box>
          <Link href="/">
            <a>
              <Heading size="md" cursor="pointer">
                TwoMatches
              </Heading>
            </a>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Link href="/signup">
            <a>
              <Button size="sm" data-testid="signup" mr="4">
                Sign Up
              </Button>
            </a>
          </Link>

          <Button
            data-testid="login"
            size="sm"
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
