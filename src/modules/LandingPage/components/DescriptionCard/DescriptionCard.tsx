import {Box, Text} from '@chakra-ui/react';
import Image from 'next/image';
import {motion} from 'framer-motion';

import {ImageTypes} from '@modules/LandingPage/types/Product';

type props = {
  title: string;
  content: string;
  image: ImageTypes;
};

const MotionBox = motion(Box);

export default function DescriptionCards({title, content, image}: props) {
  return (
    <MotionBox animate={{opacity: [0, 0, 1]}}>
      <Box
        marginRight="1.25rem"
        width={{base: '20rem', lg: '24.5rem'}}
        bg="#fff"
        color="grayScale.100"
        boxShadow={{xl: '0px 50px 100px 0px rgba(151,156,203,0.4)'}}
      >
        <Box
          borderTopEndRadius="16px"
          overflow="hidden"
          maxH="18.3125rem"
          maxW="24.5rem"
        >
          <Image
            src={
              process.env.NEXT_PUBLIC_STRAPI_HOST + image.data[0].attributes.url
            }
            height={293}
            width={392}
            priority={true}
            alt="img"
            objectFit="cover"
          />
        </Box>
        <Box
          mt="-0.3125rem"
          minH={{base: '14.5625rem', lg: '12.40625rem'}}
          boxShadow={'0 2px 4px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.08)'}
          px="1rem"
        >
          <Text
            fontFamily="inter"
            fontWeight="300"
            color="grayScale.200"
            fontSize={{base: '1.375rem', lg: '1.75rem'}}
            pt="1.875rem"
          >
            {title}
          </Text>
          <Text
            color="grayScale.300"
            fontSize={{base: '0.9375rem', lg: '1rem'}}
            pt={{base: '0.625rem', lg: '1.375rem'}}
          >
            {content}
          </Text>
        </Box>
      </Box>
    </MotionBox>
  );
}
