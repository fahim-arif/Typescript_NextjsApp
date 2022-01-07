import React from 'react';
import {Box, Heading, Text} from '@chakra-ui/react';

export default function Section({title, subtitle, body}) {
  return (
    <Box
      marginBottom="5.5rem"
      paddingX={{base: '1.75rem', md: '4rem', lg: '8rem', xl: '13.625rem'}}
    >
      <Heading
        width={{base: 'full', md: '40rem'}}
        fontSize={{base: 'mh2', md: 'th2', lg: 'h2'}}
        color="grayScale.100"
        marginTop={{base: '3.125rem', md: '5rem'}}
        marginBottom={{base: '1.75rem', md: '1.75rem'}}
      >
        {title}
      </Heading>

      <Heading
        width={{base: 'full', md: '40rem'}}
        fontSize={{base: 'mh5', md: 'th5', lg: 'h5'}}
        fontWeight="400"
        color="grayScale.200"
        marginBottom={{base: '2.5rem', md: '3.75rem'}}
      >
        {subtitle}
      </Heading>

      <Text
        as="pre"
        wordBreak="break-word"
        whiteSpace="pre-wrap"
        width={{base: 'full', lg: '48rem', xl: '50rem'}}
        fontSize={{base: 'mbody', md: 'th6', lg: 'h6'}}
        fontWeight="400"
        color="grayScale.300"
      >
        {body}
      </Text>
    </Box>
  );
}
