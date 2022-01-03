import { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

import allowRoute from "@common/components/elements/allowRoute";
import publicRoute from "@common/components/elements/publicRoute";
import { sendForgotPasswordRequest } from "@modules/ResetPassword/services/resetPassword";
import { ForgotPasswordType } from "@modules/ResetPassword/types/ResetPassword";
import EmailSchema from "@modules/ResetPassword/schema/EmailSchema";
import Logo from "@common/components/elements/Logo/Logo";
import CircleDesignBottom from "@common/components/elements/CircleDesignBottom";
import FormErrorSummary from "@common/components/elements/FormErrorSummary";
import EmailIcon from "@common/components/elements/EmailIcon";
import FormField from "@common/components/elements/FormField";

function ForgotPassword() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordType>({
    resolver: yupResolver(EmailSchema),
  });

  const [serverError, setServerError] = useState<string>();
  const [message, setMessage] = useState<string>();

  const onSubmit = async (values: ForgotPasswordType) => {
    try {
      setServerError("");
      setMessage("");

      const { email } = values;
      await sendForgotPasswordRequest(email);

      setMessage(`A password recovery instruction has been sent to ${email}.`);
    } catch (error) {
      setServerError(error.message);
    }
  };

  return (
    <Box className="app w-full h-screen">
      <Head>
        <title>twoMatches - forgot password</title>
        <meta name="description" content="twomatches next app" />
      </Head>

      <Flex
        position="relative"
        direction="column"
        // paddingBottom="250px"
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
            marginTop={{ base: "2.375rem", lg: "6.875rem" }}
            marginBottom={{ base: "2.375rem", md: "6.875rem", lg: "14.68rem" }}
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
                Forgot your password?
              </Heading>
              <Text
                width={{ base: "20rem", md: "24.5rem" }}
                textAlign="center"
                color="grayScale.300"
                lineHeight="1.375rem"
                marginBottom={{ base: "1.5rem", md: "3rem" }}
              >
                Please enter your email address and {"we'll"} send you a link to
                reset your password.
              </Text>

              <form
                id="password-reset-form"
                data-testid="login-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <FormControl
                  isInvalid={errors.email && true}
                  minHeight={{ base: "4.3rem", md: "5.0625rem" }}
                  marginBottom={{ base: "3rem", lg: "2.5rem" }}
                >
                  <FormField
                    type="email"
                    id="email"
                    label="Email"
                    width={{ base: "20rem", md: "30.875rem" }}
                    placeholder="Enter email address"
                    {...register("email")}
                    ref={register("email").ref}
                  />

                  <FormErrorMessage
                    m={0}
                    color="orange.200"
                    fontSize="0.8125rem"
                    lineHeight="1.125rem"
                  >
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
              </form>
            </Flex>

            <Flex direction={{ base: "column", md: "row" }}>
              <Button
                form="password-reset-form"
                type="submit"
                isLoading={isSubmitting}
                width={{ base: "20rem", md: "16.25rem" }}
                height="3.75rem"
                fontWeight="400"
              >
                Send
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

export default allowRoute(publicRoute(ForgotPassword));