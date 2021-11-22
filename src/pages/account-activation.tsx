import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Box, Flex, HStack, Heading, Text, Button } from "@chakra-ui/react";

import Logo from "@common/components/elements/Logo/Logo";
import CircleDesignBottom from "@common/components/elements/CircleDesignBottom";
import FormErrorSummary from "@common/components/elements/FormErrorSummary";
import EmailIcon from "@common/components/elements/EmailIcon";

export default function AccountActivation() {
  return (
    <Box className="app w-full h-screen">
      <Head>
        <title>twomatches</title>
        <meta name="description" content="twomatches next app" />
      </Head>

      <Flex
        position="relative"
        direction="column"
        paddingBottom="250px"
        align="start"
        minHeight="100%"
        background="radial-gradient(37.11% 37.11% at 100% 1.28%, rgba(191, 195, 231, 0.2) 0%, rgba(207, 210, 237, 0) 100%), radial-gradient(76.35% 25.03% at 0% 59.45%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(107.59% 39.88% at 88.75% 60.12%, rgba(255, 235, 225, 0.4) 0%, rgba(255, 235, 225, 0.4) 100%), linear-gradient(357.01deg, rgba(249, 101, 7, 0.6) 2.91%, rgba(249, 106, 7, 0) 52.54%)"
      >
        <Link href="/">
          <a>
            <Logo
              prefixId="email-verify-logo"
              marginX={{ base: "1.75rem", md: "3.125rem" }}
              marginTop={{ base: "1.75rem", md: "2.75rem" }}
            />
          </a>
        </Link>

        <Flex
          flex={{ base: "1", md: "none" }}
          direction="column"
          align="center"
          width="full"
          marginTop={{ base: "4.25rem", md: "8.875rem" }}
          paddingX="1rem"
          paddingBottom="2.75rem"
          zIndex="1"
        >
          <Flex flex="1" direction="column" align="center" width="full">
            <Heading
              textAlign="center"
              fontSize={{ base: "mh3", md: "th3", xl: "h3" }}
              color="grayScale.100"
              marginBottom="1.75rem"
            >
              Account Activated
            </Heading>
            <Text
              width={{ base: "20rem", md: "18rem" }}
              textAlign="center"
              color="grayScale.300"
              lineHeight="1.375rem"
              marginBottom="3.75rem"
            >
              Thank you, your email has been verified. Your account is now
              active.
            </Text>
          </Flex>

          <Flex direction={{ base: "column", md: "row" }}>
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
          </Flex>
        </Flex>

        <CircleDesignBottom />
      </Flex>
    </Box>
  );
}
