import {useState} from 'react';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import {Logo} from '@common/components/elements/Logo';
import {Box, Flex, Button, HStack, Text} from '@chakra-ui/react';

export default function MainMenuStatic({onOpenNewsletter}) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Box
      position="fixed"
      top="0"
      w="100%"
      bg="#ffffff"
      backgroundSize="cover"
      zIndex="100"
    >
      <Flex
        as="nav"
        minH={{base: '62', sm: '76', md: '92'}}
        px={{base: '1.25rem', sm: '1.875rem', md: '5rem', lg: '7.25rem'}}
        marginX="auto"
        display="flex"
        wrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <Box>
            <Logo prefixId="main-menu-logo" display={{base: 'flex'}}></Logo>
          </Box>
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
          spacing={{base: '10px', lg: '60px'}}
          display={['none', 'none', 'flex', 'flex', 'flex']}
          alignItems="center"
        >
          <HStack spacing={{base: '10px', lg: '60px'}}>
            <Link href="/about">
              <a>About</a>
            </Link>

            <Text as="button" onClick={onOpenNewsletter}>
              Newsletter
            </Text>
          </HStack>

          <HStack spacing="12px">
            <Button
              variant="outline"
              px="2.25rem"
              py="1.1875rem"
              onClick={onOpenNewsletter}
            >
              Login
            </Button>

            <Button px="2.25rem" py="1.1875rem" onClick={onOpenNewsletter}>
              Sell now
            </Button>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}
