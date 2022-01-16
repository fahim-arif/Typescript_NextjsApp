import Link from 'next/link';
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

export default function MainMenu({onOpenNewsletter}) {
  const {isOpen, onToggle} = useDisclosure();

  return (
    <Box position="fixed" width="full" zIndex="100">
      <Flex
        backgroundColor="white"
        minHeight="3.75rem"
        paddingY={{base: '1.125rem'}}
        paddingX={{base: '1.75rem', md: '3.5rem', lg: '7.25rem'}}
        align="center"
        justify="start"
        initial="hidden"
        animate="show"
      >
        <Flex flex={{base: 1}} justify={{base: 'start', md: 'start'}}>
          <Logo prefixId="navbar-logo" />
        </Flex>

        <Flex
          flex={{base: 1, md: 'auto'}}
          display={{base: 'flex', md: 'none'}}
          justify="flex-end"
        >
          <Menubar color="grayScale.100" boxSize={5} onClick={onToggle} />
        </Flex>

        <HStack
          display={{base: 'none', md: 'inline-flex'}}
          flex={{base: 1, md: 0}}
          justify={'flex-start'}
          spacing={{base: '2rem', lg: '3.75rem'}}
        >
          <Link href="/about">
            <a>
              <Text color="grayScale.100" fontWeight="500">
                About
              </Text>
            </a>
          </Link>

          <Text
            color="grayScale.100"
            fontWeight="500"
            cursor="pointer"
            onClick={onOpenNewsletter}
          >
            Newsletter
          </Text>
        </HStack>

        <HStack
          marginLeft={{base: '2rem', lg: '3.75rem'}}
          display={{base: 'none', md: 'inline-flex'}}
          flex={{base: 1, md: 0}}
          spacing={{base: '1rem', lg: '1.5rem'}}
        >
          <Button
            variant="outline"
            paddingX="2.25rem"
            paddingY="1.85rem"
            onClick={onOpenNewsletter}
          >
            Login
          </Button>
          <Button
            paddingX="2.25rem"
            paddingY="1.85rem"
            onClick={onOpenNewsletter}
          >
            <Text>Sell now</Text>
          </Button>
        </HStack>
      </Flex>

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
    </Box>
  );
}
