import {useState, useEffect} from 'react';
import {Flex, Heading, Text, Button} from '@chakra-ui/react';

import ArrowRight from '@common/components/elements/ArrowRight';
import {BannerContent} from '@modules/LandingPage/types/Footer';
import {getFooterContent} from '@modules/LandingPage/services/FooterContent';

export default function PopularCategoryBanner({onOpenNewsletter}) {
  const [data, setData] = useState<BannerContent>();

  useEffect(() => {
    const fetchFooterContent = async () => {
      const {data} = await getFooterContent();
      setData(data[0].attributes);
    };
    fetchFooterContent();
  }, []);

  return (
    <Flex
      direction={{base: 'column', md: 'row'}}
      justify="space-between"
      height={{base: '21.375rem', md: '14.875rem'}}
      marginX={{base: '1.75rem', md: '3rem', lg: '5rem', xl: '7.25rem'}}
      paddingX={{base: '1.25rem', lg: '2.5rem'}}
      paddingY={{base: '1.25rem', lg: '2.25rem'}}
      borderRadius="1rem"
      backgroundImage="url('/images/Banner.svg')"
      backgroundSize="cover"
      backgroundPosition={{base: 'bottom center', lg: 'center center'}}
    >
      <Heading
        maxWidth="17.31rem"
        fontSize={{base: 'mh4', md: 'th4', lg: 'h4'}}
        lineHeight="2.125rem"
      >
        {data && data.title}
      </Heading>

      <Button
        display="flex"
        alignItems="center"
        alignSelf={{md: 'end'}}
        onClick={onOpenNewsletter}
      >
        <Text marginRight="0.625rem">See all products</Text>
        <ArrowRight marginTop="0.25rem" />
      </Button>
    </Flex>
  );
}
