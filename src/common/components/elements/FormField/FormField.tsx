import React from "react";
import { Box, Flex, Input, Text } from "@chakra-ui/react";

const FormField = (props: any, ref: any) => {
  return (
    <Flex direction="column" position="relative">
      <Input
        {...props}
        borderRadius="sm"
        p="1.4rem"
        lineHeight="1.375"
        color="grayScale.200"
        _placeholder={{ color: "grayScale.500" }}
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
    </Flex>
  );
};

export default React.forwardRef(FormField);
