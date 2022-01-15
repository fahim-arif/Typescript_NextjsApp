import {useCallback, useEffect, useRef, useState} from 'react';
import {motion, useViewportScroll, useTransform} from 'framer-motion';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';

import FeatureProducts from '@modules/LandingPage/components/FeaturedProduct/FeatureProducts';

const MotionBox = motion(Box);

export default function HeroSection({data, productList, onOpenNewsletter}) {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const heroRef = useRef<any>();
  const [mounted, setMounted] = useState(false);
  const [heroTop, setHeroTop] = useState(0);
  const [heroBottom, setHeroBottom] = useState(0);
  const {scrollY} = useViewportScroll();

  const titleY = useTransform(scrollY, [0, 200], [0, -100]);
  const heroScaleX = useTransform(
    scrollY,
    [0, heroTop + 200, heroBottom - 600, heroBottom - 400],
    [
      isLargerThan768 ? '2.75rem' : '0.625rem',
      '0rem',
      '0rem',
      isLargerThan768 ? '2.75rem' : '0.625rem',
    ]
  );

  const setHeroOffset = useCallback(() => {
    setHeroTop(heroRef.current.offsetTop);
    setHeroBottom(heroRef.current.offsetTop + heroRef.current.offsetHeight);
  }, []);

  useEffect(() => {
    if (!heroRef.current || !data || productList.length === 0) return;

    setHeroOffset();

    document.addEventListener('load', setHeroOffset);
    window.addEventListener('resize', setHeroOffset);

    return () => {
      document.removeEventListener('load', setHeroOffset);
      window.removeEventListener('resize', setHeroOffset);
    };
  }, [heroRef, data, productList, setHeroOffset]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <MotionBox
      ref={heroRef}
      width="full"
      marginTop={{base: '4.6rem', md: '6.4rem'}}
      marginBottom={{base: '4rem', md: '8rem', lg: '12rem'}}
      paddingLeft={{base: '0.625rem', md: '2rem'}}
      paddingRight={{base: '0.625rem', md: '2rem'}}
      style={
        mounted && {
          paddingLeft: heroScaleX,
          paddingRight: heroScaleX,
        }
      }
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
        <MotionBox
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
          marginBottom={{base: '1.75rem', md: '2.5rem'}}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
            duration: 1,
            delay: 1,
          }}
          style={{y: titleY, x: 0}}
        >
          <Heading
            width={{base: '18rem', sm: '30rem', md: '40rem', lg: '50rem'}}
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
          transition={{duration: 1, delay: 1.2}}
        >
          <Text>{data && data.subtitle}</Text>
        </MotionBox>

        <Flex
          justify="center"
          marginBottom={{base: '6.625rem', md: '12.125rem'}}
        >
          <MotionBox
            marginTop={{base: '2.25rem', md: '4.375rem'}}
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
    </MotionBox>
  );
}
