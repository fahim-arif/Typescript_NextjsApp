import {useState} from 'react';
import Head from 'next/head';
import HeroSection from '@root/modules/LandingPage/components/Herosection/HeroSection';
import PopularCategory from '@root/modules/LandingPage/components/BannerSection/PopularCategory';
import DescriptionSection from '@root/modules/LandingPage/components/DescriptionSection';
import ImageSection from '@root/modules/LandingPage/components/ImageSection';
import DescriptionCardSlider from '@root/modules/LandingPage/components/DescriptionCard/DescriptionCardSlider';
import {useDisclosure} from '@chakra-ui/react';
import {useViewportScroll} from 'framer-motion';
import {MainMenu} from '@root/common/components/elements/Menu';
import MailerModal from '@modules/Mailer/components/MailerModal';
import Footer from '@root/common/components/elements/Footer';

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
    <div className="app">
      <Head>
        <title>twoMatches</title>
        <meta name="description" content="TwoMatches Next App" />
      </Head>

      <MailerModal isOpen={isOpen} onClose={onClose} />
      <MainMenu navShrink={navShrink} onOpenNewsletter={onOpen} />
      <HeroSection heroShrink={heroShrink} />
      <DescriptionSection />
      <DescriptionCardSlider />
      <ImageSection />
      <PopularCategory />
      <Footer />
    </div>
  );
}
