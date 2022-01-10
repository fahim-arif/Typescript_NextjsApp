import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import {motion, useViewportScroll, useTransform} from 'framer-motion';

import FeatureProducts from '@modules/LandingPage/components/FeaturedProduct/FeatureProducts';

const MotionBox = motion(Box);

export default function HeroSection({
  productList,
  data,
  heroShrink,
  onOpenNewsletter,
}) {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');
  const {scrollY} = useViewportScroll();

  const y1 = useTransform(scrollY, [0, 150], [0, -200]);
  const y2 = useTransform(scrollY, [0, 120], [0, -150]);
  const y3 = useTransform(scrollY, [0, 110], [0, -160]);

  return (
    <MotionBox
      width="full"
      marginTop={{base: '4rem', md: '5rem'}}
      marginBottom={{base: '4rem', md: '8rem', lg: '12rem'}}
      animate={
        // false is full width
        heroShrink
          ? isLargerThan1280
            ? {
                paddingLeft: '2.75rem',
                paddingRight: '2.75rem',
              }
            : isLargerThan480
            ? {
                paddingLeft: '1.25rem',
                paddingRight: '1.25rem',
              }
            : {
                paddingLeft: '0.625rem',
                paddingRight: '0.625rem',
              }
          : {
              paddingLeft: '0.0625rem',
              paddingRight: '0.0625rem',
            }
      }
      transition={{
        type: 'spring',
        duration: 2,
      }}
    >
      <Box
        position="relative"
        width="full"
        paddingBottom={{base: '2.5rem', md: '8rem'}}
        backgroundImage="url('/images/mask.jpg')"
        backgroundAttachment="fixed"
        backgroundSize="cover"
        border="1px solid #fff"
        borderRadius="1rem"
      >
        <Box>
          <MotionBox
            display="flex"
            direction="column"
            justifyContent="center"
            alignItems="center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
              duration: 1.6,
              delay: 1,
            }}
            style={{y: y1, x: 0}}
            marginBottom={{base: '1.75rem', md: '2.5rem'}}
          >
            <Heading
              width={{base: '18rem', sm: '30rem', md: '50rem'}}
              marginTop={{base: '8.75rem', sm: '11.25rem'}}
              marginX={{base: 'auto', md: '2.5rem', lg: 'auto'}}
              fontFamily="inter"
              fontSize={{
                base: 'mh1',
                md: 'th1',
                lg: 'h1',
              }}
              lineHeight={{base: '2.6875rem', md: '4.25rem'}}
              textAlign="center"
              top={{base: '-3.125rem', lg: '0'}}
            >
              {data && data.title}
            </Heading>
          </MotionBox>

          <MotionBox
            textAlign="center"
            maxWidth={{base: '18.625rem', md: '37rem'}}
            marginX="auto"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: 1.5}}
            style={{y: y2, x: 0}}
          >
            <Text>{data && data.subtitle}</Text>
          </MotionBox>

          <Flex
            justify="center"
            marginBottom={{base: '6.625rem', md: '12.125rem'}}
          >
            <MotionBox
              marginTop={{base: '2.25rem', md: '4.375rem'}}
              style={{y: y3, x: 0}}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{type: 'spring', mass: 3, duration: 1, delay: 1.5}}
            >
              <Button
                height={{base: '3.75rem', md: '5.3125rem'}}
                paddingX={{base: '2.625rem', md: '3rem'}}
                paddingY={{base: '1.375rem', md: '1.75rem'}}
                onClick={onOpenNewsletter}
              >
                <Heading
                  color="grayScale.900"
                  fontSize={{base: 'body', md: 'th5', lg: 'h5'}}
                  fontWeight="400"
                >
                  Sell products
                </Heading>
              </Button>
            </MotionBox>
          </Flex>

          <FeatureProducts
            productList={productList}
            onOpenNewsletter={onOpenNewsletter}
          />
        </Box>
      </Box>
    </MotionBox>
  );
}
