import Link from 'next/link';
import {motion, useTransform, useViewportScroll} from 'framer-motion';
import {
  Box,
  Flex,
  HStack,
  Stack,
  Text,
  Button,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';

import {Logo} from '@common/components/elements/Logo';
import Menubar from '@common/components/elements/Menubar';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHStack = motion(HStack);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: 'beforeChildren',
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: {opacity: 0, y: -25},
  show: {
    opacity: 1,
    y: 0,
    transition: {type: 'tween', ease: 'easeOut', duration: 0.4},
  },
};

export default function AnimatedMainMenu({onOpenNewsletter}) {
  const {isOpen, onToggle} = useDisclosure();
  const {scrollY} = useViewportScroll();

  const buttonScaleX = useTransform(scrollY, [0, 100], ['2.25rem', '1.125rem']);
  const buttonScaleY = useTransform(
    scrollY,
    [0, 100],
    ['1.85rem', '0.5625rem']
  );

  return (
    <MotionBox position="fixed" width="full" zIndex="100">
      <MotionFlex
        backgroundColor="white"
        minHeight="3.75rem"
        paddingY={{base: '1.125rem'}}
        paddingX={{base: '1.75rem', md: '3.5rem', lg: '7.25rem'}}
        align="center"
        justify="start"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <MotionFlex
          flex={{base: 1}}
          justify={{base: 'start', md: 'start'}}
          variants={item}
        >
          <Logo prefixId="navbar-logo" />
        </MotionFlex>

        <MotionFlex
          flex={{base: 1, md: 'auto'}}
          display={{base: 'flex', md: 'none'}}
          justify="flex-end"
        >
          <Menubar color="grayScale.100" boxSize={5} onClick={onToggle} />
        </MotionFlex>

        <MotionHStack
          display={{base: 'none', md: 'inline-flex'}}
          flex={{base: 1, md: 0}}
          justify={'flex-start'}
          spacing={{base: '2rem', lg: '3.75rem'}}
        >
          <Link href="/about">
            <a>
              <MotionText
                color="grayScale.100"
                fontWeight="500"
                variants={item}
              >
                About
              </MotionText>
            </a>
          </Link>

          <MotionText
            color="grayScale.100"
            fontWeight="500"
            cursor="pointer"
            onClick={onOpenNewsletter}
            variants={item}
          >
            Newsletter
          </MotionText>
        </MotionHStack>

        <MotionHStack
          marginLeft={{base: '2rem', lg: '3.75rem'}}
          display={{base: 'none', md: 'inline-flex'}}
          flex={{base: 1, md: 0}}
          spacing={{base: '1rem', lg: '1.5rem'}}
        >
          <MotionButton
            variant="outline"
            onClick={onOpenNewsletter}
            style={{
              paddingLeft: buttonScaleX,
              paddingRight: buttonScaleX,
              paddingTop: buttonScaleY,
              paddingBottom: buttonScaleY,
            }}
            variants={item}
          >
            Login
          </MotionButton>
          <MotionButton
            onClick={onOpenNewsletter}
            style={{
              paddingLeft: buttonScaleX,
              paddingRight: buttonScaleX,
              paddingTop: buttonScaleY,
              paddingBottom: buttonScaleY,
            }}
            variants={item}
          >
            <Text>Sell now</Text>
          </MotionButton>
        </MotionHStack>
      </MotionFlex>

      <Collapse in={isOpen}>
        <Stack
          height="full"
          backgroundColor="white"
          spacing="2rem"
          padding="1rem"
          display={{md: 'none'}}
          color="grayScale.100"
          fontWeight="500"
          paddingLeft="1.75rem"
          paddingBottom="2rem"
          borderBottomWidth="1px"
          borderBottomColor="grayScale.700"
        >
          <Link href="/about">
            <a>
              <Text>About</Text>
            </a>
          </Link>

          <Text onClick={onOpenNewsletter}>Newsletter</Text>

          <Text onClick={onOpenNewsletter}>Login</Text>

          <Text onClick={onOpenNewsletter}>Sell now</Text>
        </Stack>
      </Collapse>
    </MotionBox>
  );
}
