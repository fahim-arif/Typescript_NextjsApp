import {useState} from 'react';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import {Logo} from '@common/components/elements/Logo';
import {motion} from 'framer-motion';
import {Variants} from 'framer-motion';
import {Box, HStack, Text} from '@chakra-ui/react';

const MotionBox = motion(Box);

export default function MainMenu({onOpenNewsletter, navShrink}) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggle = () => setIsOpen(!isOpen);

  const navVariants: Variants = {
    offscreen: {
      y: 0,
      maxHeight: '4.5rem',
    },
    onscreen: {
      y: -10,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
      maxHeight: '4.875rem',
    },
  };

  return (
    <MotionBox
      bg="white"
      fontFamily="Barlow"
      fontWeight="500"
      position="fixed"
      maxH={{base: '3.4375rem', sm: '3.75rem', md: `${navShrink ? '4.5rem' : '5.75rem'}`}}
      w="100%"
      backgroundSize="cover"
      zIndex="100"
      animate={navShrink ? 'onscreen' : 'offscreen'}
      variants={navVariants}
      initial="offscreen"
      whileinview="onscreen"
      viewport={{once: true, amount: 0.8}}
    >
      <MotionBox
        as="nav"
        minH={{base: '3.875rem', sm: '4.5rem'}}
        px={{base: '1.25rem', sm: '1.875rem', md: '5rem', lg: '7.25rem'}}
        marginX="auto"
        display={['flex', 'flex', 'flex', 'flex', 'flex']}
        alignItems="center"
        justifyContent="space-between"
        borderBottom={navShrink ? `1px solid #dbdbdb` : 'none'}
      >
        <Box display="flex" alignItems="center">
          <MotionBox
            animate={{y: [-100, 0]}}
            transition={{
              type: 'spring',
              duration: 3,
            }}
          >
            <Logo prefixId="main-menu-logo" display={{base: 'flex'}}></Logo>
          </MotionBox>
        </Box>
        {/* Mobile & Tablet Hambergur Menu */}
        <Box display={{base: 'block', md: 'none'}} onClick={toggle}>
          <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onOpenNewsletter={onOpenNewsletter}
          />
        </Box>
        <HStack
          spacing={{base: '0.625rem', lg: '3.75rem'}}
          display={['none', 'none', 'flex', 'flex', 'flex']}
          alignItems="center"
        >
          <HStack spacing={{base: '0.625rem', lg: '3.75rem'}}>
            <MotionBox
              animate={{y: [-100, 0]}}
              transition={{
                type: 'spring',
                duration: 2.5,
              }}
            >
              <Link href="/about">
                <a>About</a>
              </Link>
            </MotionBox>
            <MotionBox
              animate={{y: [-100, 0]}}
              transition={{
                type: 'spring',
                duration: 2,
              }}
            >
              <Text
                cursor="pointer"
                fontFamily="Barlow"
                onClick={onOpenNewsletter}
              >
                Newsletter
              </Text>
              {/* <Link href="/newsletter">
                <a>Newsletter</a>
              </Link> */}
            </MotionBox>
          </HStack>
          <HStack spacing="0.75rem">
            <MotionBox
              animate={{y: [-200, 0]}}
              transition={{
                type: 'spring',
                duration: 1.2,
              }}
            >
              <MotionBox
                variant="outline"
                fontFamily="Barlow"
                onClick={onOpenNewsletter}
                animate={
                 navShrink 
                    ? {
                        padding: '0.3125rem',
                        paddingLeft: '1.25rem',
                        paddingRight: '1.25rem',
                        border: '1px solid #ffffff',
                      }
                    : {
                        padding: '0.875rem',
                        paddingLeft: '2.25rem',
                        paddingRight: '2.25rem',
                        border: '1px solid #dbdbdb',
                      }
                }
                _hover={{
                  bg: '#dbdbdb',
                }}
                transition={{
                  type: 'spring',
                  duration: 2,
                }}
                cursor="pointer"
              >
                Login
              </MotionBox>
            </MotionBox>
            <MotionBox animate={{y: [-300, 0]}}>
              <MotionBox
                variant="outline"
                fontFamily="Barlow"
                bgColor="#000"
                onClick={onOpenNewsletter}
                color="#ffffff"
                cursor="pointer"
                animate={
                 navShrink 
                    ? {
                        padding: '0.3125rem',
                        paddingLeft: '1.25rem',
                        paddingRight: '1.25rem',
                      }
                    : {
                        padding: '0.875rem',
                        paddingLeft: '2.25rem',
                        paddingRight: '2.25rem',
                        border: '1px solid #dbdbdb',
                      }
                }
                _hover={{
                  backgroundColor: 'greyScale.200',
                }}
                transition={{
                  type: 'spring',
                  duration: 2,
                }}
              >
                Sell now
              </MotionBox>
            </MotionBox>
          </HStack>
        </HStack>
      </MotionBox>
    </MotionBox>
  );
}
