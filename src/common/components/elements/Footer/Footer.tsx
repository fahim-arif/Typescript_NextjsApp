import SocialIcons from '../SocialIcons';
import {Box, Stack, HStack, Flex, Text} from '@chakra-ui/react';
import Logo from '../Logo/LogoIcon';

export default function Footer() {
  return (
    <Box
      mt={{base: 80, sm: 60, md: 60, xl: 40}}
      bg="grayScale.100"
      color="grayScale.900"
      borderTopRadius={15}
    >
      <Box
        as={Stack}
        px={{base: '1.75rem', sm: '1.875rem', md: '5rem', lg: '7.25rem'}}
        py={{base: 8, lg: 30}}
        mx="auto"
        mt={{base: 10, lg: 30}}
      >
        <Flex
          display={{base: 'block', lg: 'flex'}}
          justifyContent="space-between"
        >
          <HStack
            spacing={{base: 0, lg: 20}}
            display={{base: 'block', lg: 'flex'}}
            justifyContent="space-between"
          >
            <Stack>
              <Box>
                <Logo prefixId="footer-logo" />
              </Box>
            </Stack>
            <Stack pt={{base: 8, lg: 0}} align={'flex-start'}>
              <Text as="h6">About</Text>
            </Stack>
            <Stack pt={{base: 8, lg: 0}} align={'flex-start'}>
              <Text as="h6">Contact</Text>
            </Stack>
            <Stack pt={{base: 8, lg: 0}} align={'flex-start'}>
              <Text as="h6">Privacy policy</Text>
            </Stack>
            <Stack pt={{base: 8, lg: 0}} align={'flex-start'}>
              <Text as="h6">Legal</Text>
            </Stack>
          </HStack>
          <Box>
            <Stack pt={{base: 8, lg: 0}} align={'flex-start'}>
              <Flex>
                <SocialIcons />
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </Box>
      <Box
        py={4}
        px={{base: '1.75rem', sm: '1.875rem', md: '5rem', lg: '7.25rem'}}
        borderTop="1px solid #3A3D53"
      >
        <Text color="#9D9EA9">© twoMatches 2021.</Text>
      </Box>
    </Box>
  );
}
