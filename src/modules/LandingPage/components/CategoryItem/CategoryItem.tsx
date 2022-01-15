import {Heading, HStack} from '@chakra-ui/react';

import Briefcase from '@common/components/elements/Briefcase';

export default function CategoryItem({name}) {
  return (
    <HStack
      spacing="1.25rem"
      justify="center"
      paddingX={{base: '3rem'}}
      paddingY={{base: '1.625rem'}}
      backgroundColor="grayScale.800"
      marginX={{lg: '0.5rem'}}
      marginY={{base: '0.375rem', lg: '0.5rem'}}
      alignSelf="center"
      boxShadow={{
        base: '0px 0px 100px 20px rgba(151,156,203,0.14)',
        lg: 'none',
      }}
      borderRadius="0.125rem"
    >
      <Briefcase color="orange.300" />
      <Heading
        fontFamily={{base: 'barlow', lg: 'inter'}}
        fontSize={{base: 'body', lg: 'h5'}}
        fontWeight={{base: '500', lg: '400'}}
        lineHeight={{base: '1rem', lg: '2rem'}}
      >
        {name}
      </Heading>
    </HStack>
  );
}
