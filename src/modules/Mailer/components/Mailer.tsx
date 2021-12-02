import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Text,
  Heading,
  Flex,
  Input,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";

import { SubscriberCreate } from "../types/Mailer";
import MailerSchema from "../schema/Mailer";
import { createSubscriber } from "../services/mailer";
import removeEmptyFields from "@common/utils/removeEmptyFields";
import Message from "@common/components/elements/Message";
import FormErrorSummary from "@common/components/elements/FormErrorSummary";

export default function Mailer() {
  const initialRef = useRef();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SubscriberCreate>({
    resolver: yupResolver(MailerSchema),
  });

  const [message, setMessage] = useState<string>("");
  const [serverError, setServerError] = useState<string>("");

  const onSubmit = async (values: SubscriberCreate) => {
    try {
      removeEmptyFields(values);
      await createSubscriber(values);
      setMessage("You've subscribed to the newsletter successfully");
    } catch (error) {
      // console.log(error);
      setServerError("Something went wrong. Try again later.");
    }
  };

  return (
    <Flex
      width={["full", "full", 2 / 3]}
      maxWidth="md"
      direction="column"
      border="1px"
      borderColor="gray.300"
      px={4}
      py={6}
      mx={4}
    >
      <Heading fontSize="xl" fontWeight="medium" color="gray.700">
        Subscribe to the Newsletter
      </Heading>
      <Text color="gray.700" mt={4} mb={6}>
        Get emails about updates and articles relating to the product.
      </Text>
      <form
        data-testid="mailer-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <FormErrorSummary errors={errors} serverError={serverError} />

        <FormControl isInvalid={errors.first_name && true} mb={4}>
          <Input
            id="first_name"
            type="text"
            placeholder="Enter First Name"
            {...register("first_name")}
            maxWidth="sm"
          />
          <FormErrorMessage>
            {errors.first_name && errors.first_name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.last_name && true} mb={4}>
          <Input
            id="last_name"
            type="text"
            placeholder="Enter Last Name"
            {...register("last_name")}
            maxWidth="sm"
          />
          <FormErrorMessage>
            {errors.last_name && errors.last_name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.contact_no && true} mb={4}>
          <Input
            id="contact_no"
            type="text"
            placeholder="Enter Contact No."
            {...register("contact_no")}
            maxWidth="sm"
          />
          <FormErrorMessage>
            {errors.contact_no && errors.contact_no.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.email && true} mb={4}>
          <Input
            id="subscriber_email"
            ref={initialRef}
            type="email"
            placeholder="Enter email address"
            {...register("email")}
            maxWidth="sm"
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          data-testid="subscribe-btn"
          isLoading={isSubmitting}
          type="submit"
          bg="red.400"
          color="white"
          _hover={{ bg: "red.300" }}
          mr={3}
        >
          Subscribe
        </Button>
      </form>

      {message && (
        <Message
          data-testid="success-msg"
          className="ml-1 mt-4"
          type="success"
          message={message}
        />
      )}
    </Flex>
  );
}
