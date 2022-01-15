import {useEffect, useState} from 'react';
import {Box, Heading, Flex} from '@chakra-ui/react';

import CategoryItem from '@modules/LandingPage/components/CategoryItem';

export default function PopularCategory({data}) {
  const [marginOffset, setMarginOffset] = useState([]);

  useEffect(() => {
    if (data) {
      const tempOffset = [];

      for (let i = 0; i < data.length; i++) {
        if (i % 2 === 0) {
          tempOffset.push('-3.125rem');
        } else {
          tempOffset.push('3.125rem');
        }
      }

      setMarginOffset(tempOffset);
    }
  }, [data]);

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

      <Flex
        direction={{base: 'column', lg: 'row'}}
        justify="center"
        flexWrap={{lg: 'wrap'}}
      >
        {data &&
          data.map((categoryName: string, index: number) => (
            <Flex
              key={index}
              justify="center"
              marginLeft={{base: marginOffset[index], lg: '0rem'}}
            >
              <CategoryItem name={categoryName} />
            </Flex>
          ))}
      </Flex>
    </Box>
  );
}
