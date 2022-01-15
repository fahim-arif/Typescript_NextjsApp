import {Box, Heading, Text} from '@chakra-ui/react';
import Image from 'next/image';

import {ImageTypes} from '@modules/LandingPage/types/Product';

type props = {
  title: string;
  content: string;
  image: ImageTypes;
};

export default function DescriptionCards({title, content, image}: props) {
  return (
    <Box
      width={{base: '20rem', lg: '24.5rem'}}
      marginRight="1.25rem"
      backgroundColor="#fff"
      color="grayScale.100"
      borderRadius="0.125rem"
      borderTopEndRadius="1rem"
      boxShadow={{
        base: '0px 0px 8px 0px rgba(151,156,203,0.14)',
        xl: '0px 50px 100px 0px rgba(151,156,203,0.3)',
      }}
    >
      <Box
        maxHeight="18.3125rem"
        maxWidth="24.5rem"
        overflow="hidden"
        marginBottom="1.25rem"
        borderTopRadius="0.125rem"
        borderTopEndRadius="1rem"
      >
        <Image
          src={
            process.env.NEXT_PUBLIC_STRAPI_HOST + image.data[0].attributes.url
          }
          height={293}
          width={392}
          objectFit="cover"
          priority={true}
          alt="img"
        />
      </Box>

      <Box
        minHeight={{base: '14.5625rem', lg: '12.40625rem'}}
        paddingX="1rem"
        borderBottomRadius="0.125rem"
      >
        <Heading
          fontSize={{base: 'mh4', md: 'th4', lg: 'h4'}}
          color="grayScale.200"
          marginBottom={{base: '0.75rem', lg: '1.9375rem'}}
        >
          {title}
        </Heading>

        <Text
          color="grayScale.300"
          fontSize={{base: '0.9375rem', lg: '1rem'}}
          marginTop={{base: '0.625rem', lg: '1.375rem'}}
        >
          {content}
        </Text>
      </Box>
    </Box>
  );
}
