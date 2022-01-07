import Link from 'next/link';
import {Box, Flex, Stack, Text} from '@chakra-ui/react';

import Logo from '@common/components/elements/Logo/LogoIcon';
import SocialIcons from '@common/components/elements/SocialIcons';

export default function Footer() {
  return (
    <Box
      width="full"
      color="grayScale.900"
      backgroundColor="grayScale.100"
      borderTopRadius="1rem"
    >
      <Flex
        direction={{base: 'column', lg: 'row'}}
        justifyContent="space-between"
        paddingX={{
          base: '1.75rem',
          sm: '1.875rem',
          md: '5rem',
          lg: '7.25rem',
        }}
        paddingY={{base: '2rem', lg: '1.875rem'}}
      >
        <Flex
          width={{lg: '36rem'}}
          direction={{base: 'column', lg: 'row'}}
          justify="space-between"
          align={{lg: 'center'}}
        >
          <Logo prefixId="footer-logo" />

          <Box alignSelf={{base: 'start', lg: 'center'}}>
            <Link href="/about">
              <a>
                <Text
                  color="grayScale.500"
                  fontWeight="500"
                  marginTop={{base: '2rem', lg: '0rem'}}
                >
                  About
                </Text>
              </a>
            </Link>
          </Box>

          <Box alignSelf={{base: 'start', lg: 'center'}}>
            <Link href="/about#contact-us">
              <a>
                <Text
                  color="grayScale.500"
                  fontWeight="500"
                  marginTop={{base: '2rem', lg: '0rem'}}
                >
                  Contact
                </Text>
              </a>
            </Link>
          </Box>

          <Box alignSelf={{base: 'start', lg: 'center'}}>
            <Link href="/privacy-policy">
              <a>
                <Text
                  color="grayScale.500"
                  fontWeight="500"
                  marginTop={{base: '2rem', lg: '0rem'}}
                >
                  Privacy policy
                </Text>
              </a>
            </Link>
          </Box>

          <Box alignSelf={{base: 'start', lg: 'center'}}>
            <Link href="/terms-and-conditions">
              <a>
                <Text
                  color="grayScale.500"
                  fontWeight="500"
                  marginTop={{base: '2rem', lg: '0rem'}}
                >
                  Legal
                </Text>
              </a>
            </Link>
          </Box>
        </Flex>

        <Box>
          <Stack paddingTop={{base: '2rem', lg: '0rem'}} align={'flex-start'}>
            <Flex>
              <SocialIcons />
            </Flex>
          </Stack>
        </Box>
      </Flex>

      <Box
        paddingX={{base: '1.75rem', sm: '1.875rem', md: '5rem', lg: '7.25rem'}}
        paddingY="1rem"
        borderTopWidth="1px"
        borderTopColor="grayScale.200"
      >
        <Text color="grayScale.400">&copy; twoMatches 2022.</Text>
      </Box>
    </Box>
  );
}
