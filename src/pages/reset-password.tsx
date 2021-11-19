import { useEffect, useState } from "react";
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

import Logo from "@common/components/elements/Logo/Logo";
import CircleDesignBottom from "@common/components/elements/CircleDesignBottom";
import FormErrorSummary from "@common/components/elements/FormErrorSummary";
import { ResetPasswordCreate } from "@root/modules/ResetPassword/types/ResetPassword";
import ResetPasswordSchema from "@root/modules/ResetPassword/schema/ResetPasswordSchema";
import PasswordFormField from "@root/common/components/elements/PasswordFormField";
import { useRouter } from "next/router";
import { verifyTicket } from "@root/modules/ResetPassword/services/resetPassword";

export default function ResetPassword() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordCreate>({
    resolver: yupResolver(ResetPasswordSchema),
  });

  const router = useRouter();
  const [serverError, setServerError] = useState<string>();
  const [message, setMessage] = useState<string>();

  const processTicket = async (ticket: string) => {
    try {
      const ticketWithUser = await verifyTicket(ticket);
      console.log("Ticket with user:", ticketWithUser);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (router.isReady) {
      let {ticket} = router.query;
      if (!ticket) {
        console.log("Error no ticket");
        return;
      }
      ticket = Array.isArray(ticket) ? ticket[0] : ticket;
      processTicket(ticket);  
    }
  }, [router])

  const onSubmit = async (values: ResetPasswordCreate) => {
    try {
      setServerError("");
      setMessage("");

      const { newPassword, repeatPassword } = values;
      // call api with email to request reset password email

      setMessage(`Password reset successfull.`);
    } catch (error) {
      console.log(error);
      setServerError(
        "We’re having trouble resetting your password. Please try again later."
      );
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
        align="start"
        minHeight="100%"
        background="radial-gradient(37.11% 37.11% at 100% 1.28%, rgba(191, 195, 231, 0.2) 0%, rgba(207, 210, 237, 0) 100%), radial-gradient(76.35% 25.03% at 0% 59.45%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(107.59% 39.88% at 88.75% 60.12%, rgba(255, 235, 225, 0.4) 0%, rgba(255, 235, 225, 0.4) 100%), linear-gradient(357.01deg, rgba(249, 101, 7, 0.6) 2.91%, rgba(249, 106, 7, 0) 52.54%)"
      >
        <Logo
          prefixId="email-verify-logo"
          marginX={{ base: "1.75rem", md: "3.125rem" }}
          marginTop={{ base: "1.75rem", md: "2.75rem" }}
        />

        <Flex
          flex={{ base: "1", md: "none" }}
          direction="column"
          align="center"
          width="full"
          marginTop={{ base: "4.25rem", md: "8.875rem" }}
          paddingX="1rem"
          paddingBottom="1.75rem"
          zIndex="1"
        >
          <Flex flex="1" direction="column" align="center" width="full">
            <Heading
              textAlign="center"
              fontSize={{ base: "mh3", md: "th3", xl: "h3" }}
              color="grayScale.100"
              marginBottom="1.75rem"
            >
              Reset Password
            </Heading>
            <Text
              width={{ base: "20rem", md: "24.5rem" }}
              textAlign="center"
              color="grayScale.300"
              lineHeight="1.375rem"
              marginBottom={{ base: "3rem", md: "3rem" }}
            >
              Your new password must be different from the previously used
              passwords.
            </Text>

            <form
              id="password-reset-form"
              data-testid="login-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <FormControl
                isInvalid={errors.newPassword && true}
                minHeight={{ base: "4.3rem", md: "5.0625rem" }}
              >
                <PasswordFormField
                  id="password"
                  label="New password"
                  labelbg={{ base: "#FFF7F3", md: "#FEF9F7" }}
                  width={{ base: "20rem", md: "24.5rem" }}
                  placeholder="New password"
                  {...register("newPassword")}
                  ref={register("newPassword").ref}
                />

                <FormErrorMessage
                  m={0}
                  width={{ base: "20rem", md: "24.5rem" }}
                  color="orange.200"
                  fontSize="0.8125rem"
                  lineHeight="1.125rem"
                >
                  {errors.newPassword && errors.newPassword.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={errors.repeatPassword && true}
                minHeight={{ base: "4.3rem", md: "5.0625rem" }}
                marginBottom="3.75rem"
              >
                <PasswordFormField
                  id="repeatPassword"
                  label="Repeat password"
                  labelbg={{ base: "#FFF7F3", md: "#FEF6F1" }}
                  width={{ base: "20rem", md: "24.5rem" }}
                  placeholder="Repeat password"
                  {...register("repeatPassword")}
                  ref={register("repeatPassword").ref}
                />

                <FormErrorMessage
                  m={0}
                  width={{ base: "20rem", md: "24.5rem" }}
                  color="orange.200"
                  fontSize="0.8125rem"
                  lineHeight="1.125rem"
                >
                  {errors.repeatPassword && errors.repeatPassword.message}
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
              marginRight={{ base: "0", md: "0.375rem" }}
              marginBottom={{ base: "0.75rem", md: "0" }}
            >
              Create
            </Button>
          </Flex>
        </Flex>

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
              {/* <EmailIcon
                color="grayScale.100"
                marginY={{ base: "0.75rem", sm: 0 }}
                marginRight="1rem"
              /> */}
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
