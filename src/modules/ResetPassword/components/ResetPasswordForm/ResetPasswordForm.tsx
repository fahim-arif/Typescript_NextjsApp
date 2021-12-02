import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Flex,
  Heading,
  Text,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

import { ResetPasswordCreate } from "@modules/ResetPassword/types/ResetPassword";
import ResetPasswordSchema from "@modules/ResetPassword/schema/ResetPasswordSchema";
import { resetPassword } from "@modules/ResetPassword/services/resetPassword";
import PasswordFormField from "@common/components/elements/PasswordFormField";


export default function ResetPasswordForm({ user, ticket, setServerError,setMessage }) {

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordCreate>({
    resolver: yupResolver(ResetPasswordSchema), context: { name: user.name, email: user.email }
  });

  const onSubmit = async (values: ResetPasswordCreate) => {
    try {
      setServerError("");
      setMessage("");

      const { newPassword } = values;
      await resetPassword(ticket, newPassword);

      setMessage(`Password reset successfully.`);
    } catch (error) {
      setServerError(error.message);
    }
  };

  return (
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
            marginBottom="2.25rem"
          >
            <PasswordFormField
              id="repeatPassword"
              label="Repeat password"
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
        >
          Create
        </Button>
      </Flex>
    </Flex>
  );
}
