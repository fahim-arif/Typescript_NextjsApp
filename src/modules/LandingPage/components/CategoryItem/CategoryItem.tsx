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
    >
      <Briefcase color="orange.300" />
      <Heading fontSize={{base: 'mh5', md: 'th5', lg: 'h5'}} fontWeight="400">
        {name}
      </Heading>
    </HStack>
  );
}
