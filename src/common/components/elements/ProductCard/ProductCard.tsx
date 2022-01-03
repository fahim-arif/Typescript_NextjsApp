import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useViewportScroll, useTransform} from 'framer-motion';
import {Box, Stack, Text, Flex} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import Star from '@public/images/icons/star.svg';
import {CategoryTypes, ImageTypes} from '@modules/LandingPage/types/Product';

type props = {
  id: number;
  title: string;
  rating: number;
  sold: number;
  image: ImageTypes;
  categories: CategoryTypes;
  price: number;
  index: number;
};

const MotionBox = motion(Box);

export default function ProductCard({
  id,
  title,
  rating,
  sold,
  image,
  categories,
  price,
  index,
}: props) {
  const [open, setOpen] = useState<boolean>(false);

  const {scrollY} = useViewportScroll();
  const y1 = useTransform(scrollY, [-100, 300], [-200, 100]);
  const y2 = useTransform(scrollY, [0, -300], [0, -100]);
  const y4 = useTransform(scrollY, [100, 300], [-200, 100]);

  const handleMouseEnter = (id) => {
    setOpen(true);
  };

  const handleMouseLeave = (id) => {
    setOpen(false);
  };

  return (
    <MotionBox
      borderBottomRightRadius="4"
      borderBottomLeftRadius="10"
      cursor="pointer"
      position="relative"
      margin="auto"
      minW={{base: '18.125rem'}}
      // minH={{base: '30vh'}}
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={() => handleMouseLeave(id)}
      animate={open ? {y: 0} : {y: 10}}
    >
      <Box>
        <Box h="12.125rem">
          <MotionBox top="0" left="0" objectFit="contain">
            <Image
              width="290"
              height="194"
              objectFit="contain"
              src={
                process.env.NEXT_PUBLIC_STRAPI_HOST + image.data.attributes.url
              }
              alt="feature product"
            />
          </MotionBox>
        </Box>

        <Box
          position="relative"
          w={{base: '18.125rem'}}
          h={{base: '7.5rem'}}
          bgColor="gray.900"
        >
          <Stack
            fontFamily="Inter"
            color="#fff"
            pt={2}
            maxW="16.25rem"
            marginX="auto"
          >
            <Flex
              justifyContent="space-between"
              alignItems="start"
              color="#fff"
            >
              <Text fontWeight="400">{title}</Text>

              <Flex minW="2.8125rem" alignItems="center">
                <Image src={Star} alt="star" />
                <Text pl={2}>{rating}</Text>
              </Flex>
            </Flex>

            <Flex
              minW="16.25rem"
              bottom="1.25rem"
              pt={3}
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex alignItems="center">
                <Text fontSize="1.125rem" fontFamily="inter">
                  ${price}
                </Text>
                <Text
                  pl={2}
                  fontFamily="inter"
                  fontSize="0.8125rem"
                  color="gray.400"
                >
                  {sold} sold
                </Text>
              </Flex>

              <Text fontSize="0.8125rem" fontFamily="inter">
                {categories.data[0].attributes.name}
              </Text>
            </Flex>
          </Stack>

          {open && (
            <Link href={`/product/${title}`}>
              <a style={{border: 'none'}}>
                <Box
                  position="absolute"
                  top="0"
                  bottom="0"
                  zIndex="100"
                  bg="#fff"
                  w="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  fontWeight="500"
                >
                  View
                </Box>
              </a>
            </Link>
          )}
        </Box>
      </Box>
    </MotionBox>
  );
}
