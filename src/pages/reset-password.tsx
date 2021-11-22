import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Box,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import Logo from "@common/components/elements/Logo/Logo";
import CircleDesignBottom from "@common/components/elements/CircleDesignBottom";
import FormErrorSummary from "@common/components/elements/FormErrorSummary";
import { TicketWithUser } from "@root/modules/ResetPassword/types/ResetPassword";
import { verifyTicket } from "@root/modules/ResetPassword/services/resetPassword";
import ResetPasswordForm from "@root/modules/ResetPassword/components/ResetPasswordForm";

export default function ResetPassword() {

  const router = useRouter();
  const [serverError, setServerError] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [ticket, setTicket] = useState<string>();
  const [user, setUser] = useState<any>();
  const [isProcessingTicket, setIsProcessingTicket] = useState<boolean>(true);

  const processTicket = async (ticket: string) => {
    try {
      const ticketWithUser: TicketWithUser = await verifyTicket(ticket);
      console.log("Ticket with user:", ticketWithUser);
      setTicket(ticketWithUser.id);
      setUser(ticketWithUser.user);
    } catch (error) {
      console.log(error);
      const errorMessage = "Ticket is invalid"
      router.replace(`/error?error=${errorMessage}`)
    } finally {
      setIsProcessingTicket(false);
    }
  }

  useEffect(() => {
    if (router.isReady) {
      let {ticket} = router.query;
      if (!ticket) {
        console.log("Error no ticket");
        setIsProcessingTicket(false);
        return;
      }
      ticket = Array.isArray(ticket) ? ticket[0] : ticket;
      processTicket(ticket);  
    }
  }, [router])

  if (isProcessingTicket) {
    return <p>Loading...</p>
  }

  return (
    <Box className="app w-full h-screen">
      <Head>
        <title>twoMatches - forgot password</title>
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

        { user && ticket && <ResetPasswordForm user={user} ticket={ticket} setServerError={setServerError} setMessage={setMessage} />}

        <CircleDesignBottom />

        <Flex
          justify="center"
          zIndex="1"
          position="absolute"
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
