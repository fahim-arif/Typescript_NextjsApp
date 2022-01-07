import {Flex, Heading, Text, Button} from '@chakra-ui/react';

import ArrowRight from '@common/components/elements/ArrowRight';

export default function PopularCategoryBanner({data, onOpenNewsletter}) {
  return (
    <Flex
      direction={{base: 'column', md: 'row'}}
      justify="space-between"
      height={{base: '21.375rem', md: '14.875rem'}}
      marginX={{base: '1.75rem', md: '3rem', lg: '5rem', xl: '7.25rem'}}
      paddingX={{base: '1.25rem', lg: '2.5rem'}}
      paddingY={{base: '1.25rem', lg: '2.25rem'}}
      borderRadius="1rem"
      backgroundImage={{
        base: "url('/images/banner-mobile.svg')",
        md: "url('/images/banner.svg')",
      }}
      backgroundSize="cover"
      backgroundPosition="center center"
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
        paddingX="1.5rem"
        onClick={onOpenNewsletter}
      >
        <Text marginRight="0.625rem">Sell Now</Text>
        <ArrowRight marginTop="0.25rem" />
      </Button>
    </Flex>
  );
}
