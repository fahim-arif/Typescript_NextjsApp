import {useState, useEffect} from 'react';
import Image from 'next/image';
import {Box, Text, Button} from '@chakra-ui/react';
import ArrowRight from '@public/images/icons/small_arrow.svg';
import ArrowUp from '@public/images/icons/arrow_up_small.svg';
import {getFooterContent} from '@modules/LandingPage/services/FooterContent';
import {BannerContent} from '@modules/LandingPage/types/Footer';

export default function PopularCategoryBanner() {
  const [data, setData] = useState<BannerContent>();

  useEffect(() => {
    const fetchFooterContent = async () => {
      const {data} = await getFooterContent();
      setData(data[0].attributes);
    };
    fetchFooterContent();
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      px={{base: '1.6875rem', sm: '1.5rem', md: '2rem', lg: '7.25rem'}}
      w="100%"
    >
      <Box
        px={{base: '1.6875rem', sm: '1.5rem', md: '2rem', lg: '2.75rem'}}
        py={{base: '1.25rem', sm: '1.5rem', md: '2rem', lg: '2.25rem'}}
        backgroundSize="cover"
        borderRadius="16px"
        w="100%"
        minH="340px"
        backgroundPosition={{base: 'bottom center', lg: 'center center'}}
        backgroundRepeat="no-repeat"
        bgImage="url('/images/Banner.svg')"
      >
        <Text h="12.5rem" maxW="16.875rem" fontSize="1.75rem">
          {data && data.title}
        </Text>
        <Box
          mt={{base: '1.875rem', sm: '0'}}
          display="flex"
          justifyContent="end"
          alignItems="end"
        >
          <Button w={{base: '100%', sm: 'inherit'}}>
            See all products
            <Box pl={3}>
              <Image alt="right arrow" src={ArrowRight} />
            </Box>
          </Button>
        </Box>
      </Box>
      <Box
        pt="7.5rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="100%"
      >
        <Button onClick={scrollTop} borderRadius="100%">
          <Box display="flex" justifyContent="center" alignItems="center" p={2}>
            <Image alt="right arrow" src={ArrowUp} />
          </Box>
        </Button>
      </Box>
    </Box>
  );
}
