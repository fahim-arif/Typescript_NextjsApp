import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Flex, HStack, Heading, Text, Button } from "@chakra-ui/react";

import { sendEmailVerificationRequest } from "@modules/EmailVerification/services/emailVerification";
import Logo from "@common/components/elements/Logo/Logo";
import CircleDesignBottom from "@common/components/elements/CircleDesignBottom";
import FormErrorSummary from "@common/components/elements/FormErrorSummary";
import EmailIcon from "@common/components/elements/EmailIcon";

export default function EmailVerification() {
  const router = useRouter();
  const [email, setEmail] = useState<string>();
  const [serverError, setServerError] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const resendEmail = async () => {
    try {
      setIsSubmitting(true);
      setServerError("");
      setMessage("");

      if (!email || email.trim().length === 0) {
        throw new Error("No email was found");
      }

      await sendEmailVerificationRequest(email);

      setMessage("The verification email has been resent to your email.");
    } catch (error) {      
      setServerError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (router.isReady) {
      let { email } = router.query;
      email = Array.isArray(email) ? email[0] : email;

      if (!email || email.trim().length === 0) {
        setServerError("No email was found");
      } else {
        setEmail(email);
      }
    }
  }, [router]);

  return (
    <Box className="app w-full h-screen">
      <Head>
        <title>twomatches - email verification</title>
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
          <Flex
            backgroundColor="white"
            flex={{ base: "1", md: "none" }}
            direction="column"
            align="center"
            width={{ base: "full", lg: "47.6rem" }}
            marginTop={{ base: "2.375rem", md: "6.875rem" }}
            marginBottom={{ base: "2.375rem", md: "6.875rem", lg: "12.625rem" }}
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
                Verify your email
              </Heading>
              <Text
                width={{ base: "20rem", md: "24.5rem" }}
                textAlign="center"
                color="grayScale.300"
                lineHeight="1.375rem"
                marginBottom="1.75rem"
              >
                You need to verify your email to complete the registration. An
                email has been sent to:
              </Text>
              <Heading
                fontSize={{ sm: "mh6", md: "th6", xl: "h6" }}
                fontWeight="400"
                color="grayScale.100"
                lineHeight="1.75rem"
                marginBottom="2.75rem"
              >
                {email}
              </Heading>
              <Text
                width={{ base: "20rem", md: "24.5rem" }}
                textAlign="center"
                color="grayScale.300"
                lineHeight="1.375rem"
                marginBottom="1.75rem"
              >
                If you did not receive an email for verification, please use the
                resend email button below or contact support.
              </Text>
            </Flex>

            <Flex direction={{ base: "column", md: "row" }}>
              <Button
                isLoading={isSubmitting}
                width={{ base: "20rem", md: "16.25rem" }}
                height="3.75rem"
                fontWeight="400"
                marginRight={{ base: "0", md: "0.375rem" }}
                marginBottom={{ base: "0.75rem", md: "0" }}
                onClick={() => resendEmail()}
              >
                Resend Email
              </Button>
              <Button
                width={{ base: "20rem", md: "16.25rem" }}
                height="3.75rem"
                color="grayScale.100"
                backgroundColor="transparent"
                borderWidth="1px"
                borderColor={{ md: "grayScale.500" }}
                fontWeight="400"
                marginLeft={{ base: "0", md: "0.375rem" }}
                _hover={{}}
              >
                Contact Support
              </Button>
            </Flex>
          </Flex>
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
              <EmailIcon
                color="grayScale.100"
                marginY={{ base: "0.75rem", sm: 0 }}
                marginRight="1rem"
              />
              <Text
                data-testid="form-error-summary"
                color="grayScale.100"
                fontSize="0.9375rem"
                lineHeight="1.375rem"
                marginBottom={4}
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
