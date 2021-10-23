import { useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormErrorMessage,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

export default function PasswordInput({ errors, register, ...rest }) {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <FormControl isInvalid={errors.password} mb={4}>
      <FormLabel htmlFor="password">Password</FormLabel>
      <InputGroup size="md" {...rest}>
        <Input
          id="password"
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          {...register("password")}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>
        {errors.password && errors.password.message}
      </FormErrorMessage>
    </FormControl>
  );
}
