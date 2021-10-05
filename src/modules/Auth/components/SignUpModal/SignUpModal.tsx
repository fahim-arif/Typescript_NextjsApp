import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
  FormErrorMessage,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

import PasswordInput from "@common/components/elements/PasswordInput";
import FormErrorSummary from "@common/components/elements/FormErrorSummary";
import SignUpSchema from "@modules/Auth/schema/SignUpSchema";
import {
  SignUpModalProps,
  UserCreate,
  UserGet,
} from "@modules/Auth/types/SignUp";
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
    try {
      const user: UserGet = await signUpUser(values);
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
      <ModalContent>
        <ModalHeader>Sign Up</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormErrorSummary errors={errors} serverError={serverError} />
            <FormControl isInvalid={errors.email && true} mb={4}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                ref={initialRef}
                type="email"
                placeholder="Enter email address"
                {...register("email")}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <PasswordInput errors={errors} register={register} />

            <FormControl isInvalid={errors.store_name && true} mb={4}>
              <FormLabel htmlFor="store_name">Store Name</FormLabel>
              <Input
                id="store_name"
                type="text"
                placeholder="Enter store name"
                {...register("store_name")}
              />
              <FormErrorMessage>
                {errors.store_name && errors.store_name.message}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
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
