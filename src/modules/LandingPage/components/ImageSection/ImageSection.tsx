import {useEffect, useState} from 'react';
import {Box, Text} from '@chakra-ui/react';
import Image from 'next/image';
import {getImageContent} from '@modules/LandingPage/services/ImageContent'
import ChangingGameSlider from '@common/components/elements/Slider';

export default function ImageSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchImageContent = async () => {
      const {data} = await getImageContent();
      setData(data);
    };
    fetchImageContent();
  }, []);

  return (
    <Box
      mb={{base: 0, sm: '6.25rem', lg: '9.375rem'}}
      px={{base: '1.75rem', sm: '1.5rem', md: '2rem', lg: '2.75rem'}}
      h="70vh"
      position="relative"
    >
      <Box
        bgImage="url('/images/Rectangle1209.svg')"
        backgroundSize="cover"
        backgroundPosition="center center"
        borderRadius="4px"
        w="100%"
        minH={{base: '20rem', sm: '28.875rem'}}
        display="flex"
        justifyContent="space-between"
      >
        <Box zIndex="1" left="0" top="0" position="absolute">
          <Image
            src="/images/MaskImageBg.svg"
            layout="responsive"
            width="440"
            height="230"
            alt=""
          />
        </Box>
          <Box
            minH={{base: '15.625rem', md: '16.875rem'}}
            opacity=".92"
            borderTop="1px solid linear-gradient(118.9deg, #FDAC33 17.79%, #FE9A6B 34.23%, #F42B03 82.21%);"
            borderBottomRightRadius="16"
            px={{base: '2.25rem', xl: '4.5rem'}}
            pt={{base: '5.625rem', sm: '12.5rem', lg: '3.5rem'}}
            minW={{base: '100%', lg: '100%', xl: '45%'}}
          >
            <Box maxW={{base: '100%', lg: '25rem', xl: '27.5rem'}}>
              <Text
                lineHeight="2.75rem"
                textAlign={{base: 'center', md: 'inherit'}}
                fontSize={{base: '1.375rem', sm: '1.75rem', lg: '2.25rem'}}
              >
                {data[0] && data[0].attributes.title}
              </Text>
              <Text
                textAlign={{base: 'center', md: 'inherit'}}
                pt={{base: 5, sm: 10}}
                fontSize="1.125rem"
                color="grayScale.300"
              >
                {data[0] && data[0].attributes.subtitle}
              </Text>
            </Box>
          </Box>
          <ChangingGameSlider data={data} />
      </Box>
    </Box>
  );
}
