import {Box, Heading} from '@chakra-ui/react';

import ChangingGameSlider from '@common/components/elements/Slider';

export default function ImageSection({data}) {
  return (
    <Box
      position="relative"
      marginBottom={{base: '5.5rem', lg: '15.125rem'}}
      paddingX={{base: '0.625rem', sm: '1.5rem', md: '2rem', lg: '2.75rem'}}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        height={{base: '18.25rem', md: '28.875rem'}}
        backgroundImage="url('/images/changing-game.svg')"
        backgroundPosition={{base: '-100px -510px', md: 'left bottom'}}
        borderRadius="0.25rem"
      >
        <Box
          width={{base: 'full', lg: '27.5rem'}}
          height={{base: '15.625rem', md: '16.875rem'}}
          marginX={{base: '1.125rem', md: '3rem', xl: '4.5rem'}}
          paddingTop={{base: '6rem', sm: '8rem', lg: '3.5rem'}}
        >
          <Heading
            fontSize={{base: 'mh3', md: 'th3', lg: 'h3'}}
            lineHeight={{base: '2.125rem', md: '2.75rem'}}
            marginBottom={{base: '0.5rem', sm: '1rem', lg: '1.625rem'}}
          >
            {data.length > 0 && data[0] && data[0].attributes.title}
          </Heading>

          <Heading
            fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
            color="grayScale.300"
          >
            {data.length > 0 && data[0] && data[0].attributes.subtitle}
          </Heading>
        </Box>

        <ChangingGameSlider data={data} />
      </Box>
    </Box>
  );
}
