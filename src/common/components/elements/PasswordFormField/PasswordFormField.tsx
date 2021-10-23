import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormErrorMessage,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

const PasswordFormField = (props: any, ref: any) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <Flex direction="column" position="relative">
      <InputGroup size="md">
        <Input
          {...props}
          borderRadius="sm"
          p="1.4rem"
          lineHeight="1.375"
          color="grayScale.200"
          _placeholder={{ color: "grayScale.500" }}
          pr="4.5rem"
          type={show ? "text" : "password"}
        />
        <Box
          alignSelf="start"
          bg="white"
          pos="absolute"
          top="-1.0rem"
          left="0.7rem"
          zIndex="2"
          padding="0.25rem 0.625rem"
        >
          <Text
            p="0"
            m="0"
            fontWeight="500"
            fontSize="0.875rem"
            lineHeight="1.3125rem"
            color="grayScale.300"
          >
            {props.label}
          </Text>
        </Box>
        <InputRightElement width="4.5rem" h="full">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default React.forwardRef(PasswordFormField);
