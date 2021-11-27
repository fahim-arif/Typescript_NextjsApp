import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Flex, HStack, Heading, Text, Button } from "@chakra-ui/react";

import { TicketWithUser } from "@modules/ResetPassword/types/ResetPassword";
import { verifyTicket } from "@modules/ResetPassword/services/resetPassword";
import ResetPasswordForm from "@modules/ResetPassword/components/ResetPasswordForm";
import Logo from "@common/components/elements/Logo/Logo";
import CircleDesignBottom from "@common/components/elements/CircleDesignBottom";
import FormErrorSummary from "@common/components/elements/FormErrorSummary";

export default function ResetPassword() {
  const router = useRouter();
  const [error, setError] = useState<string>();
  const [serverError, setServerError] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [ticket, setTicket] = useState<string>();
  const [user, setUser] = useState<any>();
  const [isProcessingTicket, setIsProcessingTicket] = useState<boolean>(true);

  const processTicket = useCallback(
    async (ticket: string) => {
      try {
        const ticketWithUser: TicketWithUser = await verifyTicket(ticket);
        setTicket(ticketWithUser.id);
        setUser(ticketWithUser.user);
      } catch (error) {     
        setError(error.message);
      }
    },
    []
  );

  useEffect(() => {
    if ((user && ticket) || error) {
      setIsProcessingTicket(false);
    }
  }, [user, ticket, error]);

  useEffect(() => {
    if (router.isReady) {
      let { ticket } = router.query;
      if (!ticket) {
        setError("Invalid Ticket");
      } else {
        ticket = Array.isArray(ticket) ? ticket[0] : ticket;
        processTicket(ticket);
      }
    }
  }, [router, processTicket]);

  if (isProcessingTicket) {
    return <p>Loading...</p>;
  }

  return (
    <Box className="app w-full h-screen">
      <Head>
        <title>twoMatches - reset password</title>
        <meta name="description" content="twomatches next app" />
      </Head>

      <Flex
        position="relative"
        direction="column"
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
          width="full"
          justify="center"
          paddingX={{ base: "0.625rem", md: "2rem", lg: "0rem" }}
        >
          {error && (
            <Flex
              backgroundColor="white"
              flex={{ base: "1", md: "none" }}
              direction="column"
              align="center"
              width={{ base: "full", lg: "47.6rem" }}
              marginTop={{ base: "2.375rem", md: "6.875rem" }}
              marginBottom={{ base: "2.375rem", md: "6.875rem", lg: "10.625rem" }}
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
                  Error
                </Heading>
                <Text
                  width={{ base: "20rem", md: "24rem" }}
                  textAlign="center"
                  color="grayScale.300"
                  lineHeight="1.375rem"
                  marginBottom="3.75rem"
                >
                  {error}<br />
                  Please try again later or contact support below.
                </Text>

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
              </Flex>
            </Flex>
          )}

          {!error && (
            <ResetPasswordForm
              user={user}
              ticket={ticket}
              setServerError={setServerError}
              setMessage={setMessage}
            />
          )}
        </Flex>

        <CircleDesignBottom />

        <Flex
          justify="center"
          zIndex="1"
          position="fixed"
          bottom="0rem"
          width="full"
          backgroundColor="white"
          paddingX="1.5rem"
        >
          {serverError && (
            <FormErrorSummary errors={{}} serverError={serverError} />
          )}
          {message && (
            <HStack alignItems={{ base: "center", sm: "center" }}>
              <Text
                data-testid="form-error-summary"
                color="grayScale.100"
                fontSize="0.9375rem"
                lineHeight="1.375rem"
                paddingY={2}
              >
                {message}
              </Text>
            </HStack>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
