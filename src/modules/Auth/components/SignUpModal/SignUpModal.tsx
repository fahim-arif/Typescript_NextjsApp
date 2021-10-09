import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMergeRefs } from "@chakra-ui/hooks";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Checkbox,
  FormErrorMessage,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

import PasswordInput from "@common/components/elements/PasswordInput";
import FormErrorSummary from "@common/components/elements/FormErrorSummary";
import SignUpSchema from "@modules/Auth/schema/SignUpSchema";
import { SignUpModalProps, UserCreate } from "@modules/Auth/types/SignUp";
import { signUpUser } from "../../services/signup";

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  const initialRef = useRef();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<UserCreate>({
    resolver: yupResolver(SignUpSchema),
  });

  const [serverError, setServerError] = useState("");

  const onSubmit = async (values: UserCreate) => {
    console.log("Info:", values);
    try {
      await signUpUser(values);
      router.push("/email_verification");
    } catch (error) {
      setServerError("Something went wrong. Try again later.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialRef}
      isCentered
    >
      <ModalOverlay />
      <ModalContent data-testid="sign-up-modal">
        <ModalHeader>Sign Up</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <ModalBody>
            <FormErrorSummary errors={errors} serverError={serverError} />

            <FormControl isInvalid={errors.name && true} mb={4}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                type="text"
                placeholder="Enter name"
                {...register("name")}
                ref={useMergeRefs(initialRef, register("name").ref)}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.company_name && true} mb={4}>
              <FormLabel htmlFor="company_name">Company Name</FormLabel>
              <Input
                id="company_name"
                type="text"
                placeholder="Enter company name"
                {...register("company_name")}
              />
              <FormErrorMessage>
                {errors.company_name && errors.company_name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email && true} mb={4}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Enter email address"
                {...register("email")}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <PasswordInput errors={errors} register={register} />

            <Checkbox
              id="notify"
              defaultIsChecked
              color="gray.600"
              {...register("notify")}
            >
              I want to receive notifications from twoMatches.
            </Checkbox>
          </ModalBody>

          <ModalFooter>
            <Button
              data-testid="sign-up-btn"
              isLoading={isSubmitting}
              type="submit"
              bg="red.400"
              color="white"
              _hover={{ bg: "red.300" }}
              mr={3}
            >
              Sign Up
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
