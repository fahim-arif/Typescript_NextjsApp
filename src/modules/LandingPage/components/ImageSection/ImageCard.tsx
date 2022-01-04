import React from 'react';
import {Box} from '@chakra-ui/react';

import {ImageTypes} from '@modules/LandingPage/types/Product';

type props = {
  image: ImageTypes;
};

export default function ImageCard({image}: props) {
  return (
    <Box
      minWidth={{base: '18.125rem', sm: '30.625rem', lg: '47.5rem'}}
      height={{base: '13.875rem', sm: '21.875rem', md: '34.375rem'}}
      bgImage={`url(${
        process.env.NEXT_PUBLIC_STRAPI_HOST + image.data.attributes.url
      })`}
      backgroundSize="contain"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      borderRadius="0.5rem"
    ></Box>
  );
}
