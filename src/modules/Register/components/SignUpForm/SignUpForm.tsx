import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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

import { UserCreate } from "@modules/Register/types/SignUp";
import SignUpSchema from "@modules/Register/schema/SignUpSchema";
import { signUpUser } from "@modules/Register/services/signup";
import FormField from "@common/components/elements/FormField";
import CheckboxIcon from "@common/components/elements/CheckboxIcon";
import FormErrorSummary from "@common/components/elements/FormErrorSummary";
import PasswordFormField from "@common/components/elements/PasswordFormField";

export default function SignUpForm({ ...props }) {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<UserCreate>({
    resolver: yupResolver(SignUpSchema),
  });

  const [serverError, setServerError] = useState<string>("");

  const onSubmit = async (values: UserCreate) => {
    try {
      await signUpUser(values);
      router.push("/email-verification?email=" + values.email);
    } catch (error) {
      setServerError("Something went wrong. Try again later.");
    }
  };

  return (
    <Box {...props} width={{ base: "full", md: "30.875rem" }}>
      <Text
        id="signup-form-title "
        lineHeight="1.375rem"
        color="grayScale.100"
        marginBottom={{ base: "1.75rem", lg: "2.25rem" }}
      >
        Please enter your information
      </Text>

      <form
        data-testid="sign-up-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <FormControl
          isInvalid={errors.name && true}
          minHeight={{ base: "4.3rem", lg: "5.0625rem" }}
        >
          <FormField
            type="text"
            id="name"
            label="Name"
            placeholder="Enter first and last name"
            {...register("name")}
            ref={register("name").ref}
          />
          <FormErrorMessage
            m={0}
            color="orange.200"
            fontSize="0.8125rem"
            lineHeight="1.125rem"
          >
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={errors.company_name && true}
          minHeight={{ base: "4.3rem", lg: "5.0625rem" }}
        >
          <FormField
            type="text"
            id="company_name"
            label="Company Name"
            placeholder="Enter company name"
            {...register("company_name")}
            ref={register("company_name").ref}
          />

          <FormErrorMessage
            m={0}
            color="orange.200"
            fontSize="0.8125rem"
            lineHeight="1.125rem"
          >
            {errors.company_name && errors.company_name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={errors.email && true}
          minHeight={{ base: "4.3rem", lg: "5.0625rem" }}
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
          minHeight={{ base: "4.3rem", lg: "5.0625rem" }}
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

        <Checkbox
          id="receive_notifications"
          defaultIsChecked
          color="grayScale.100"
          borderColor="grayScale.400"
          colorScheme="white"
          marginTop={{ base: "2rem", lg: "1.25rem" }}
          marginBottom={{ base: "1.5rem", lg: "1.25rem" }}
          icon={<CheckboxIcon />}
          _checked={{
            borderColor: "orange.600",
          }}
          {...register("receive_notifications")}
        >
          <Text fontSize="0.8125rem">
            I want to receive notifications from twoMatches.
          </Text>
        </Checkbox>

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
            Create an account
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
          Already have an account?
        </Text>
        <Link href="/login">
          <a>
            <Text fontWeight="500" color="orange.200">
              Log in
            </Text>
          </a>
        </Link>
      </Flex>
    </Box>
  );
}
