import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import EyeIcon from "../EyeIcon";

const PasswordFormField = (props: any, ref: any) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <Flex direction="column" position="relative">
      <InputGroup size="md">
        <Input
          {...props}
          ref={ref}
          borderRadius="sm"
          padding="1.4rem"
          lineHeight="1.375"
          color="grayScale.200"
          borderColor="grayScale.500"
          _placeholder={{ color: "grayScale.500" }}
          paddingRight="3rem"
          marginTop="0.9rem"
          type={show ? "text" : "password"}
        />
        <Box
          alignSelf="start"
          backgroundColor={props.labelbg ? props.labelbg : "#fff"}
          position="absolute"
          top="0rem"
          left="0.7rem"
          zIndex="2"
          padding="0.25rem 0.625rem"
        >
          <Text
            padding="0"
            margin="0"
            fontWeight="500"
            fontSize="0.875rem"
            lineHeight="1.3125rem"
            color="grayScale.300"
          >
            {props.label}
          </Text>
        </Box>
        <InputRightElement marginRight="0.5rem" marginTop="1.1rem">
          <EyeIcon
            color="grayScale.300"
            cursor="pointer"
            onClick={handleClick}
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default React.forwardRef(PasswordFormField);
