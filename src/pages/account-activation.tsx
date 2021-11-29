import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

import Logo from "@common/components/elements/Logo/Logo";
import CircleDesignBottom from "@common/components/elements/CircleDesignBottom";

export default function AccountActivation() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (router.isReady) {
      let { success, message } = router.query;
      success = Array.isArray(success) ? success[0] : success;
      message = Array.isArray(message) ? message[0] : message;

      if (success === "false") {
        setServerError(message);
      }

      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Box className="app w-full h-screen">
      <Head>
        <title>twomatches</title>
        <meta name="description" content="twomatches next app" />
      </Head>

      <Flex
        position="relative"
        direction="column"
        align="start"
        minHeight="100%"
        background="radial-gradient(37.11% 37.11% at 100% 1.28%, rgba(191, 195, 231, 0.2) 0%, rgba(207, 210, 237, 0) 100%), radial-gradient(76.35% 25.03% at 0% 59.45%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(107.59% 39.88% at 88.75% 60.12%, rgba(255, 235, 225, 0.4) 0%, rgba(255, 235, 225, 0.4) 100%), linear-gradient(357.01deg, rgba(249, 101, 7, 0.6) 2.91%, rgba(249, 106, 7, 0) 52.54%)"
      >

        <Logo
          marginX={{ base: "1.75rem", md: "3.125rem" }}
          marginTop={{ base: "1.75rem", md: "2.75rem" }}
        />

        <Flex
          width="full"
          justify="center"
          paddingX={{ base: "0.625rem", md: "2rem", lg: "0rem" }}
        >
          <Flex
            backgroundColor="white"
            flex={{ base: "1", md: "none" }}
            direction="column"
            align="center"
            width={{ base: "full", lg: "47.6rem" }}
            marginTop={{ base: "2.375rem", md: "6.875rem", lg: "12.125rem" }}
            marginBottom={{ base: "2.375rem", md: "6.875rem", lg: "18.43rem" }}
            paddingX="1rem"
            paddingTop={{ base: "1.875rem", lg: "5rem" }}
            paddingBottom="3.75rem"
            zIndex="1"
          >
            <Flex flex="1" direction="column" align="center" width="full">
              <Heading
                textAlign="center"
                fontSize={{ base: "mh3", md: "th3", xl: "h3" }}
                color="grayScale.100"
                marginBottom="1.75rem"
              >
                {serverError
                  ? "Sorry, email verification has failed."
                  : "Account Activated"}
              </Heading>
              <Text
                width={{ base: "20rem", md: "24rem" }}
                textAlign="center"
                color="grayScale.300"
                lineHeight="1.375rem"
                marginBottom="3.75rem"
              >
                {serverError ? (
                  <span>
                    The verification link is either invalid or has expired.<br />
                    Please try again later or contact support below.
                  </span>
                ) : (
                  <>
                    <span>
                        Thank you, your email has been verified.<br />
                        Your account is now active.
                    </span>
                  </>
                )}
              </Text>
            </Flex>

            <Flex direction={{ base: "column", md: "row" }}>
              {serverError ? (
                <Link href="/contact-support">
                  <a>
                    <Button
                      width={{ base: "20rem", md: "16.25rem" }}
                      height="3.75rem"
                      fontWeight="400"
                    >
                      Contact support
                    </Button>
                  </a>
                </Link>
              ) : (
                <Link href="/login">
                  <a>
                    <Button
                      width={{ base: "20rem", md: "16.25rem" }}
                      height="3.75rem"
                      fontWeight="400"
                    >
                      Log into your account
                    </Button>
                  </a>
                </Link>
              )}
            </Flex>
          </Flex>
        </Flex>

        <CircleDesignBottom />
      </Flex>
    </Box>
  );
}
