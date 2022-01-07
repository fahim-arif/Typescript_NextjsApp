import React from 'react';
import {Box, Heading} from '@chakra-ui/react';

import ProductCarousel from '@modules/LandingPage/components/FeaturedProduct/ProductCarousel';

const FeatureProducts = ({productList, onOpenNewsletter}) => {
  return (
    <Box>
      <Heading
        fontSize={{base: 'mh2', md: 'th2', lg: 'h2'}}
        textAlign="center"
        marginBottom={{base: '1.75rem', lg: '4.375rem'}}
      >
        Featured products
      </Heading>

      <ProductCarousel data={productList} onOpenNewsletter={onOpenNewsletter} />
    </Box>
  );
};

export default FeatureProducts;
