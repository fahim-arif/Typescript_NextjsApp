import {Box, Heading, SimpleGrid} from '@chakra-ui/react';

import CategoryItem from '@modules/LandingPage/components/CategoryItem';

export default function PopularCategory({data}) {
  return (
    <Box
      marginX={{base: '1.75rem', md: '4rem', xl: '8rem'}}
      marginBottom={{base: '5.9375rem', lg: '14.56rem'}}
    >
      <Heading
        textAlign="center"
        fontSize={{base: 'mh3', md: 'th3', lg: 'h3'}}
        marginBottom={{base: '3.1875rem'}}
      >
        Popular product categories
      </Heading>

      <SimpleGrid spacing="1rem" columns={{base: 1, md: 2, lg: 4}}>
        {data &&
          data.map((categoryName: string, index: number) => (
            <CategoryItem key={index} name={categoryName} />
          ))}
      </SimpleGrid>
    </Box>
  );
}
