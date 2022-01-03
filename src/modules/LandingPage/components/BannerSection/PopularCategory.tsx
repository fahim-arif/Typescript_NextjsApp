import {Box, Text, SimpleGrid} from '@chakra-ui/react';
import Image from 'next/image';
import PopularCategoryBanner from './PopularCategoryBanner';
import Briefcase from '@public/images/icons/briefcase.svg';

export default function PopularCategory() {
  return (
    <Box h={{base: '135vh', sm: '110vh', md: '100vh'}} w="100%">
      <Box
        px={{base: '1.75rem', sm: '1.5rem', md: '2rem', lg: '7.25rem'}}
        w="100%"
        pb="10rem"
      >
        <Text textAlign="center" fontSize="2.25rem">
          Popular products categories
        </Text>
        <SimpleGrid
          margin="auto"
          maxW="1000"
          fontSize="1.5rem"
          spacing={5}
          columns={{base: 1, sm: 2, md: 4}}
          pt="3.125rem"
          fontWeight="400"
        >
          <Box
            p={{base: '0.625rem 1.25rem', sm: '0.625rem 2.8125rem'}}
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgColor="#fafafa"
            h="5.3125rem"
          >
            <Image src={Briefcase} alt="Briefcase" />
            <Text fontFamily="inter" pl={4}>
              Category
            </Text>
          </Box>
          <Box
            p={{base: '0.625rem 1.25rem', sm: '0.625rem 2.8125rem'}}
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgColor="#fafafa"
            minw="10.5rem"
            h="5.3125rem"
          >
            <Image src={Briefcase} alt="Briefcase" />
            <Text fontFamily="inter" pl={4}>
              Category
            </Text>
          </Box>
          <Box
            p={{base: '0.625rem 1.25rem', sm: '0.625rem 2.8125rem'}}
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgColor="#fafafa"
            minw="10.5rem"
            h="5.3125rem"
          >
            <Image src={Briefcase} alt="Briefcase" />
            <Text fontFamily="inter" pl={4}>
              Category
            </Text>
          </Box>
          <Box
            p={{base: '0.625rem 1.25rem', sm: '0.625rem 2.8125rem'}}
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgColor="#fafafa"
            minw="10.5rem"
            h="5.3125rem"
          >
            <Image src={Briefcase} alt="Briefcase" />
            <Text fontFamily="inter" pl={4}>
              Category
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box>
        <PopularCategoryBanner />
      </Box>
    </Box>
  );
}
