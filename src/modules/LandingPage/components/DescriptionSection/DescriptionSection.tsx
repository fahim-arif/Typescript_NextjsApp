import {Box, Flex, VStack, Text, Heading} from '@chakra-ui/react';

import Earth from '@common/components/elements/Earth';
import AnchorIcon from '@common/components/elements/AnchorIcon';
import CartIcon from '@common/components/elements/CartIcon';

export default function DescriptionSection({data}) {
  return (
    <Box
      width="full"
      marginBottom={{base: '6rem', md: '8rem', lg: '12rem'}}
      paddingX={{base: '1.75rem', md: '3rem', xl: '7.25rem'}}
    >
      <Flex
        display={{base: 'block', lg: 'flex'}}
        width="full"
        justifyContent="space-between"
      >
        <VStack width={{base: 'full', lg: '30.875rem'}} paddingBottom="3.5rem">
          <Text
            display="block"
            fontSize={{base: '1.1875rem', lg: '1.75rem'}}
            fontWeight={{base: '400', lg: '300'}}
          >
            {data && data.title}
          </Text>

          <Text
            fontWeight="400"
            color="gray.500"
            pt="2rem"
            fontSize="1.125rem"
            display={{base: 'none', xl: 'block'}}
          >
            {data && data.content1}
          </Text>

          <Text
            fontWeight="400"
            color="gray.500"
            pt="2rem"
            fontSize={{base: '1rem', md: '1.125rem'}}
          >
            {data && data.content2}
          </Text>
        </VStack>

        <VStack
          spacing={{base: '2.75rem', lg: '3rem'}}
          width={{base: 'full', lg: '22rem'}}
        >
          <Flex
            width="full"
            direction={{base: 'column', lg: 'row'}}
            align="start"
          >
            <Earth
              marginTop="0.25rem"
              marginBottom={{base: '1.25rem', lg: '0rem'}}
              color="orange.300"
            />

            <Box marginLeft={{base: '0rem', lg: '1.5rem'}}>
              <Heading
                fontSize="h6"
                fontWeight="400"
                color="grayScale.100"
                marginBottom="1.5rem"
              >
                {data && data.subtitle1}
              </Heading>

              <Text color="grayScale.300">{data && data.content3}</Text>
            </Box>
          </Flex>

          <Flex
            width="full"
            direction={{base: 'column', lg: 'row'}}
            align="start"
          >
            <AnchorIcon
              marginTop="0.25rem"
              marginBottom={{base: '1.25rem', lg: '0rem'}}
              color="orange.300"
            />
            <Box marginLeft={{base: '0rem', lg: '1.5rem'}}>
              <Heading
                fontSize="h6"
                fontWeight="400"
                color="grayScale.100"
                marginBottom="1.5rem"
              >
                {data && data.subtitle2}
              </Heading>
              <Text color="grayScale.300">{data && data.content4}</Text>
            </Box>
          </Flex>

          <Flex
            width="full"
            direction={{base: 'column', lg: 'row'}}
            align="start"
          >
            <CartIcon
              marginTop="0.25rem"
              marginBottom={{base: '1.25rem', lg: '0rem'}}
              color="orange.300"
            />
            <Box marginLeft={{base: '0rem', lg: '1.5rem'}}>
              <Heading
                fontSize="h6"
                fontWeight="400"
                color="grayScale.100"
                marginBottom="1.5rem"
              >
                {data && data.subtitle3}
              </Heading>
              <Text color="grayScale.300">{data && data.content5}</Text>
            </Box>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
}
