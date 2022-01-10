import React from 'react';
import Image from 'next/image';
import {Box} from '@chakra-ui/react';

import {ImageTypes} from '@modules/LandingPage/types/Product';

type props = {
  image: ImageTypes;
};

export default function ImageCard({image}: props) {
  return (
    <Box
      position="relative"
      height={{base: '13.875rem', sm: '21.875rem', md: '34.375rem'}}
      width={{
        base: '18.125rem',
        sm: '25.6875rem',
        md: '37.5rem',
        lg: '32.125rem',
        xl: '48rem',
      }}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}${image.data.attributes.url}`}
        layout="fill"
        priority={true}
        objectFit="cover"
        alt="small businesses"
      />
    </Box>
  );
}
