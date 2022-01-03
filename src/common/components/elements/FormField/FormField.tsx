import React from 'react';
import {Box, Flex, Input, Text} from '@chakra-ui/react';

const FormField = (props: any, ref: any) => {
  return (
    <Flex direction="column" position="relative">
      <Input
        {...props}
        color="grayScale.200"
        lineHeight="1.375"
        padding="1.4rem"
        marginTop="0.9rem"
        borderColor="grayScale.500"
        borderRadius="sm"
        _placeholder={{color: 'grayScale.500'}}
      />
      {props.label && (
        <Box
          alignSelf="start"
          backgroundColor="white"
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
      )}
    </Flex>
  );
};

export default React.forwardRef(FormField);
