import {useState, useEffect} from 'react';
import {Box, Flex, Button, useMediaQuery} from '@chakra-ui/react';
import {motion, useViewportScroll, useTransform} from 'framer-motion';

import {getHeroContent} from '@modules/LandingPage/services/HeroContent';
import {HeroContent} from '@modules/LandingPage/types/Hero';
import FeatureProducts from '@modules/LandingPage/components/FeaturedProduct/FeatureProducts';

const MotionBox = motion(Box);

export default function HeroSection({heroShrink, onOpenNewsletter}) {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');
  const {scrollY} = useViewportScroll();

  const [data, setData] = useState<HeroContent>();

  useEffect(() => {
    const fetchHeroContent = async () => {
      const {data} = await getHeroContent();
      setData(data.attributes);
    };
    fetchHeroContent();
  }, []);

  const y1 = useTransform(scrollY, [0, 150], [0, -200]);
  const y2 = useTransform(scrollY, [0, 120], [0, -150]);
  const y3 = useTransform(scrollY, [0, 110], [0, -160]);

  return (
    <Box
      position="relative"
      marginBottom={{base: '4rem', md: '8rem', lg: '12rem'}}
      minHeight="100vh"
      paddingTop={{base: '2.25rem', md: '5.75rem'}}
    >
      <MotionBox
        width="full"
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
          mt={{base: '1.125rem', md: 0}}
          position="relative"
          bgImage="url('/images/mask.jpg')"
          backgroundAttachment="fixed"
          backgroundSize="cover"
          borderRadius="16px"
          w="100%"
          minH={{base: '42.5rem', md: '170vh'}}
        >
          <Box margin="auto" maxW="800">
            <MotionBox
              animate={{y: 0, opacity: [0, 0.3, 0.6, 1]}}
              transition={{
                type: 'spring',
                mass: 1,
                stiffness: 100,
                duration: 1.6,
                delay: 1,
              }}
              pt={{base: '8.75rem', sm: '11.25rem'}}
              px={{base: 7, sm: 10, md: 10, lg: 0}}
              fontFamily="inter"
              fontSize={{
                base: '1.75rem',
                sm: '1.875rem',
                md: '3rem',
                lg: '3.5rem',
                xl: '3.5rem',
              }}
              color="greyScale.100"
              fontWeight="300"
              lineHeight={{base: '2.6875rem', lg: '4.25rem'}}
              textAlign="center"
              maxW="50rem"
              zIndex="1"
              top={{base: '-3.125rem', lg: '0'}}
              style={{y: y1, x: 0}}
            >
              {data && data.title}
            </MotionBox>
          </Box>
          <Box
            pt="2.5rem"
            zIndex="1"
            margin="auto"
            w="100%"
            display="flex"
            justifyContent="center"
          >
            <MotionBox
              animate={{opacity: [0, 0.3, 1]}}
              maxW="36.75rem"
              transition={{type: 'spring', mass: 1, duration: 1, delay: 1.5}}
              textAlign="center"
              px={{base: 7, sm: 10, md: 10, lg: 0}}
              fontSize={{base: '0.9375rem', md: '1rem  '}}
              fontWeight="400"
              style={{y: y2, x: 0}}
            >
              {data && data.subtitle}
            </MotionBox>
          </Box>
          <Flex pt="70px" justifyContent="center">
            <MotionBox
              style={{y: y3, x: 0}}
              animate={{opacity: [0, 0.2, 1]}}
              transition={{type: 'spring', mass: 3, duration: 1, delay: 1.5}}
            >
              <Button
                fontFamily="inter"
                fontWeight="400"
                fontSize={{base: '1rem', md: '1.5rem'}}
                px={{base: '2.75rem', md: '3rem'}}
                py={{base: '1.375rem', md: '1.625rem'}}
                height={{base: '2.25rem', md: '5.3125rem'}}
                onClick={onOpenNewsletter}
              >
                Sell products
              </Button>
            </MotionBox>
          </Flex>
          <MotionBox>
            <FeatureProducts onOpenNewsletter={onOpenNewsletter} />
          </MotionBox>
        </Box>
      </MotionBox>
    </Box>
  );
}
