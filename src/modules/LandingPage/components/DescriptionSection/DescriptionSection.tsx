import {useState, useEffect} from 'react';
import Image from 'next/image';
import {VStack, Flex, Box, Text, Heading} from '@chakra-ui/react';

import {getDescriptionContent} from '@modules/LandingPage/services/DescriptionContent';
import {DescriptionContent} from '@modules/LandingPage/types/Description';

import earth from '@public/images/icons/earth_logo.svg';
import cart from '@public/images/icons/cart_icon.svg';
import arrowDown from '@public/images/icons/arrow_down.svg';
import Earth from '@root/common/components/elements/Earth';
import AnchorIcon from '@root/common/components/elements/AnchorIcon';
import CartIcon from '@root/common/components/elements/CartIcon';

export default function DescriptionSection() {
  const [data, setData] = useState<DescriptionContent>();

  useEffect(() => {
    const fetchImageContent = async () => {
      const {data} = await getDescriptionContent();
      setData(data[0].attributes);
    };
    fetchImageContent();
  }, []);

  return (
    <Box
      mt={{base: '3.125rem', md: 10, lg: 20}}
      // mb={{base: '-6.25rem', sm: '-6.25rem', lg: '0'}}
      mb={{base: '8rem'}}
      w="100%"
      // px={{base: '1.75rem', md: '5rem', lg: '7.25rem', xl: '13.625rem'}}
      paddingX={{base: '1.75rem', md: '3rem', xl: '7.25rem'}}
    >
      <Flex
        pt={10}
        borderTop={{base: '1px solid #dbdbdb', md: 'none'}}
        display={{base: 'block', lg: 'flex'}}
        width="full"
        justifyContent="space-between"
      >
        <VStack width={{base: 'full', lg: '30.875rem'}} paddingBottom="3.5rem">
          <Text
            // textAlign={{base: 'left', sm: 'center', xl: 'left'}}
            display="block"
            fontSize={{base: '1.1875rem', lg: '1.75rem'}}
            fontWeight={{base: '400', lg: '300'}}
          >
            {data && data.title}
          </Text>

          <Text
            // textAlign={{base: 'center', xl: 'left'}}
            fontWeight="400"
            color="gray.500"
            pt="2rem"
            fontSize="1.125rem"
            display={{base: 'none', xl: 'block'}}
          >
            {data && data.content1}
          </Text>

          <Text
            // textAlign={{base: 'center', xl: 'left'}}
            fontWeight="400"
            color="gray.500"
            pt="2rem"
            fontSize={{base: '1rem', md: '1.125rem'}}
            // display={{base: 'none', sm: 'block'}}
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
