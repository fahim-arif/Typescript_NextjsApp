import Link from "next/link";
import { Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react";

import useAuth from "@common/hooks/useAuth";

export default function Navbar() {
  const { isLoading, isAuthenticated, user, logout } = useAuth();

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
          {!isLoading &&
            (isAuthenticated ? (
              <Button
                size="sm"
                data-testid="logout"
                mr="4"
                onClick={() => logout()}
              >
                Logout
              </Button>
            ) : (
              <>
                <Link href="/signup">
                  <a>
                    <Button size="sm" data-testid="signup" mr="4">
                      Sign Up
                    </Button>
                  </a>
                </Link>

                <Link href="/login">
                  <a>
                    <Button
                      data-testid="login"
                      size="sm"
                      bg="red.400"
                      color="white"
                      _hover={{ bg: "red.300" }}
                    >
                      Login
                    </Button>
                  </a>
                </Link>
              </>
            ))}
        </Box>
      </Flex>
    </>
  );
}
