import {useEffect, useState} from 'react';
import {Box, Heading, SimpleGrid} from '@chakra-ui/react';

import {getTopCategories} from '@modules/LandingPage/services/Categories';
import CategoryItem from '@modules/LandingPage/components/CategoryItem';

export default function PopularCategory() {
  const [data, setData] = useState<string[]>();

  useEffect(() => {
    const fetchCategories = async () => {
      const {data} = await getTopCategories();

      const categories = data.map((ele) => {
        return ele.attributes.title;
      });

      setData(categories);
    };
    fetchCategories();
  }, []);

  return (
    <Box
      marginX={{base: '1.75rem', md: '4rem', xl: '13.75rem'}}
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
          data.map((categoryName, index) => (
            <CategoryItem key={index} name={categoryName} />
          ))}
      </SimpleGrid>
    </Box>
  );
}
