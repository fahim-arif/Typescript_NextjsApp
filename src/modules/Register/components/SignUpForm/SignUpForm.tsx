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

import FormField from "@common/components/elements/FormField";
import CheckboxIcon from "@common/components/elements/CheckboxIcon";
import FormErrorSummary from "@common/components/elements/FormErrorSummary";
import { UserCreate } from "@modules/Register/types/SignUp";
import SignUpSchema from "@modules/Register/schema/SignUpSchema";
import { signUpUser } from "@modules/Register/services/signup";

export default function SignUpForm() {
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
      router.push("/email_verification");
    } catch (error) {
      setServerError("Something went wrong. Try again later.");
    }
  };

  return (
    <Flex
      flex="1"
      justify="center"
      // align="center"
      pb="5.875rem"
    >
      <Box w={["w-full", null, "30.875rem"]} mx={{ sm: "1rem", lg: "0" }}>
        <Text
          id="signup-form-title "
          lineHeight="1.375rem"
          color="grayScale.100"
          mb="2.25rem"
          mt={{
            base: "12",
            xl: "52",
          }}
        >
          Please enter your information
        </Text>

        <form
          data-testid="sign-up-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <FormControl isInvalid={errors.name && true} height="5.1rem">
            <FormField
              type="text"
              id="name"
              label="Name"
              placeholder="Enter name"
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

          <FormControl isInvalid={errors.company_name && true} height="5.1rem">
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

          <FormControl isInvalid={errors.email && true} height="5.1rem">
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

          <FormControl isInvalid={errors.password && true} height="5.1rem">
            <FormField
              type="password"
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
            fontSize="0.8125"
            borderColor="grayScale.400"
            colorScheme="white"
            _checked={{
              borderColor: "orange.600",
            }}
            icon={<CheckboxIcon />}
            mb={5}
            {...register("receive_notifications")}
          >
            I want to receive notifications from twoMatches.
          </Checkbox>

          <Box
            position="relative"
            height="28"
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

        <Divider borderColor="grayScale.500" mb={9} />

        <Flex>
          <Text color="grayScale.100" mr={1}>
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
    </Flex>
  );
}
