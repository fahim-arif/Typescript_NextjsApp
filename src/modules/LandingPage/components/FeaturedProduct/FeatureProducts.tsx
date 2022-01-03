import React from 'react';
import {Box} from '@chakra-ui/react';
import ProductCarousel from './ProductCarousel';
import {motion} from 'framer-motion';

const MotionBox = motion(Box);

const FeatureProducts = () => {
  return (
    <Box
      backgroundSize="cover"
      w="100%"
      mt={{base: '4.375rem'}}
      minH={{base: '700', sm: '800', md: '900'}}
      position="relative"
    >
      <MotionBox animate={{y: 0, opacity: [0, 0, 0, 1]}}>
        <MotionBox
          pt={{base: '6.25rem', sm: '9.375rem'}}
          pb={{base: '1.75rem', lg: '4.0625rem'}}
          fontSize={{base: '2rem', lg: '2.875rem'}}
          textAlign="center"
        >
          Featured products
        </MotionBox>
      </MotionBox>
      <Box>
        <ProductCarousel />
      </Box>
    </Box>
  );
};

export default FeatureProducts;
