import React from 'react';
import {Box} from '@chakra-ui/react';

import ArrowLeft from '@common/components/elements/ArrowLeft';
import ArrowRight from '@common/components/elements/ArrowRight';

interface props {
  previous: () => void;
  next: () => void;
}

export default function CarouselSlideControls({previous, next}: props) {
  return (
    <Box
      display={{base: 'none', md: 'flex'}}
      borderWidth="1px"
      borderColor="grayScale.500"
      justifyContent="center"
      width="full"
      paddingY="1.2rem"
      paddingX="1.875rem"
      borderRadius="3.75rem"
    >
      <ArrowLeft boxSize="1rem" cursor="pointer" onClick={previous} />
      <ArrowRight
        boxSize="1rem"
        marginLeft="1.125rem"
        cursor="pointer"
        onClick={next}
      />
    </Box>
  );
}
