import React from 'react';
import Image from 'next/image';
import {Box} from '@chakra-ui/react';
import ArrowLeft from '../ArrowLeft';
import ArrowRight from '../ArrowRight';

interface props {
  previous: () => void;
  next: () => void;
}

export default function CarouselBtn({previous, next}: props) {
  return (
    <Box
      display={{base: 'none', lg: 'flex'}}
      borderWidth="2px"
      borderColor="grayScale.500"
      justifyContent="center"
      width="6.5rem"
      paddingY="1.2rem"
      paddingX="1.875rem"
      borderRadius="60px"
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
