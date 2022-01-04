import {useState} from 'react';
import Head from 'next/head';
import {Flex, Box, Divider, useDisclosure} from '@chakra-ui/react';

import HeroSection from '@modules/LandingPage/components/Herosection/HeroSection';
import PopularCategory from '@modules/LandingPage/components/BannerSection/PopularCategory';
import DescriptionSection from '@modules/LandingPage/components/DescriptionSection';
import ImageSection from '@modules/LandingPage/components/ImageSection';
import DescriptionCardSlider from '@modules/LandingPage/components/DescriptionCard/DescriptionCardSlider';
import {useViewportScroll} from 'framer-motion';
import {MainMenu} from '@common/components/elements/Menu';
import MailerModal from '@modules/Mailer/components/MailerModal';
import Footer from '@common/components/elements/Footer';
import BackToTopButton from '@modules/LandingPage/components/BackToTopButton';
import PopularCategoryBanner from '@root/modules/LandingPage/components/BannerSection/PopularCategoryBanner';

export default function Home() {
  const [navShrink, setNavShrink] = useState<boolean>(false);
  const [heroShrink, setHeroShrink] = useState<boolean>(true);
  const {isOpen, onOpen, onClose} = useDisclosure();

  const {scrollY} = useViewportScroll();

  scrollY.onChange((y) => {
    if (y > 92) {
      setNavShrink(true);
    } else {
      setNavShrink(false);
    }

    if (y > 92 && y < 1500) {
      setHeroShrink(false);
    } else if (y > 1400) {
      setHeroShrink(true);
    } else if (y < 92) {
      setHeroShrink(true);
    }
  });

  return (
    <Box>
      <Head>
        <title>twoMatches</title>
        <meta name="description" content="TwoMatches App" />
      </Head>

      <MailerModal isOpen={isOpen} onClose={onClose} />
      <MainMenu navShrink={navShrink} onOpenNewsletter={onOpen} />

      <HeroSection heroShrink={heroShrink} onOpenNewsletter={onOpen} />

      <Box display={{base: 'block', md: 'none'}} paddingX="1.75rem">
        <Divider
          marginBottom="1.75rem"
          orientation="horizontal"
          color="#CFD2ED"
        />
      </Box>

      <DescriptionSection />

      <DescriptionCardSlider />

      <ImageSection />

      <PopularCategory />

      <Box marginBottom={{base: '5.625rem', lg: '8rem'}}>
        <PopularCategoryBanner onOpenNewsletter={onOpen} />
      </Box>

      <Flex justify="center" marginBottom={{base: '1.75rem', lg: '3.75rem'}}>
        <BackToTopButton />
      </Flex>

      <Footer onOpenNewsletter={onOpen} />
    </Box>
  );
}
