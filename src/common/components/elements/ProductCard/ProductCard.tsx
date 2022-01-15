import {useState} from 'react';
import Image from 'next/image';
import {Box, Flex, Center, HStack, Heading, Text} from '@chakra-ui/react';

import Star from '@common/components/elements/Star';
import {CategoryTypes, ImageTypes} from '@modules/LandingPage/types/Product';

type props = {
  title: string;
  rating: number;
  sold: number;
  image: ImageTypes;
  categories: CategoryTypes;
  price: number;
  onOpenNewsletter: () => void;
};

export default function ProductCard({
  title,
  rating,
  sold,
  image,
  categories,
  price,
  onOpenNewsletter,
}: props) {
  const [open, setOpen] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <Box
      position="relative"
      width={{base: '18.125rem'}}
      cursor="pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      borderRadius="0.25rem"
      borderTopRightRadius="1rem"
      borderBottomLeftRadius="1rem"
    >
      <Box
        backgroundColor="white"
        position="relative"
        width="full"
        height="12.125rem"
        borderTopLeftRadius="0.25rem"
        borderTopRightRadius="1rem"
        overflow="hidden"
      >
        <Image
          src={process.env.NEXT_PUBLIC_STRAPI_HOST + image.data.attributes.url}
          layout="fill"
          objectFit="contain"
          priority={true}
          alt="feature product"
        />
      </Box>

      <Flex
        position="relative"
        direction="column"
        justify="space-between"
        width="full"
        height={{base: '7.5rem'}}
        backgroundColor="gray.900"
        paddingX="1rem"
        paddingTop="0.5rem"
        paddingBottom="0.8125rem"
        borderBottomLeftRadius="1rem"
        borderBottomRightRadius="0.25rem"
      >
        <Flex justify="space-between" align="start" color="#fff">
          <Text noOfLines={2} marginRight="0.5rem">
            {title}
          </Text>

          <HStack spacing="0.55rem">
            <Star color="#fff" />
            <Text>{rating}</Text>
          </HStack>
        </Flex>

        <Flex justify="space-between">
          <HStack spacing="0.5rem" alignItems="baseline">
            <Heading
              color="white"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
            >
              ${price}
            </Heading>
            <Text color="gray.400" fontSize="cap">
              {sold} sold
            </Text>
          </HStack>

          <Text fontSize="cap" color="grayScale.600">
            {categories.data &&
              categories.data.length > 0 &&
              categories.data[0].attributes.name}
          </Text>
        </Flex>

        {open && (
          <Center
            position="absolute"
            left="0"
            right="0"
            top="0"
            bottom="0"
            zIndex="10"
            backgroundColor="white"
            fontWeight="500"
            borderBottomLeftRadius="1rem"
            borderBottomRightRadius="0.25rem"
            onClick={onOpenNewsletter}
          >
            View
          </Center>
        )}
      </Flex>
    </Box>
  );
}
