import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Flex,
  Box,
  Text,
  FormControl,
  FormErrorMessage,
  Checkbox,
  Button,
  Divider,
} from "@chakra-ui/react";

import useAuth from "@common/hooks/useAuth";

import auth0LoginErrors from "@common/utils/auth0LoginErrors.json";
import LoginSchema from "@modules/Login/schema/LoginSchema";
import { LoginCreate } from "@modules/Login/types/Login";
import FormField from "@common/components/elements/FormField";
import PasswordFormField from "@common/components/elements/PasswordFormField";
import FormErrorSummary from "@common/components/elements/FormErrorSummary";

export default function LoginForm({ ...props }) {
  const auth0 = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginCreate>({
    resolver: yupResolver(LoginSchema),
  });

  const [serverError, setServerError] = useState<string>();

  const onSubmit = async (values: LoginCreate) => {
    try {
      const { email, password } = values;
      await auth0.login(email, password);
    } catch (error) {
      console.log(error);
      if (auth0LoginErrors.hasOwnProperty(error.code))
        setServerError(auth0LoginErrors[error.code]);
      else {
        setServerError("Something went wrong. Please Contact administrator.");
      }
    }
  };

  return (
    <Box {...props} width={{ base: "full", md: "30.875rem" }}>
      <Text
        id="login-form-title "
        lineHeight="1.375rem"
        color="grayScale.100"
        marginBottom={{ base: "1.5rem", lg: "2.25rem" }}
      >
        Please log in
      </Text>

      <form
        data-testid="login-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <FormControl
          isInvalid={errors.email && true}
          minHeight={{ base: "4.3rem", md: "5.0625rem" }}
        >
          <FormField
            type="email"
            id="email"
            label="Email"
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

        <FormControl
          isInvalid={errors.password && true}
          minHeight={{ base: "4.3rem", md: "5.0625rem" }}
          height={{ lg: "5.0625rem" }}
        >
          <PasswordFormField
            id="password"
            label="Password"
            placeholder="Enter password"
            {...register("password")}
            ref={register("password").ref}
          />

          <FormErrorMessage
            m={0}
            color="orange.200"
            fontSize="0.8125rem"
            lineHeight="1.125rem"
          >
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <Box
          marginTop={{ base: "1.25rem", md: "3.75rem", lg: "1.25rem" }}
          marginBottom="1.25rem"
        >
          <Link href="/forgot-password">
            <a>
              <Text fontWeight="500" color="grayScale.100">
                Forgot email or password?
              </Text>
            </a>
          </Link>
        </Box>

        <Box
          position="relative"
          minHeight={{ base: "5rem", sm: "5.5rem", md: "28" }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Button
            data-testid="sign-up-btn"
            isLoading={isSubmitting}
            type="submit"
            width="full"
          >
            Log in
          </Button>

          <FormErrorSummary errors={errors} serverError={serverError} />

          {/* 3rd element for space-between */}
          <Box></Box>
        </Box>
      </form>

      <Divider
        borderColor="grayScale.500"
        marginBottom={{ base: "1.25rem", md: 9 }}
      />

      <Flex>
        <Text color="grayScale.100" mr={1} fontSize="0.93rem">
          New on twoMatches?
        </Text>
        <Link href="/signup">
          <a>
            <Text fontWeight="500" color="orange.200">
              Create an account
            </Text>
          </a>
        </Link>
      </Flex>
    </Box>
  );
}
