import {useEffect, useState} from 'react';
import Head from 'next/head';
import Script from 'next/script';
import {GetStaticProps} from 'next';
import {Flex, Box, Divider, useDisclosure} from '@chakra-ui/react';
import {useViewportScroll} from 'framer-motion';

import {MainMenu} from '@common/components/elements/Menu';
import Footer from '@common/components/elements/Footer';
import MailerModal from '@modules/Mailer/components/MailerModal';
import HeroSection from '@modules/LandingPage/components/Herosection/HeroSection';
import DescriptionSection from '@modules/LandingPage/components/DescriptionSection';
import DescriptionCardSlider from '@modules/LandingPage/components/DescriptionCard/DescriptionCardSlider';
import ImageSection from '@modules/LandingPage/components/ImageSection';
import PopularCategory from '@modules/LandingPage/components/BannerSection/PopularCategory';
import PopularCategoryBanner from '@modules/LandingPage/components/BannerSection/PopularCategoryBanner';
import BackToTopButton from '@modules/LandingPage/components/BackToTopButton';
import {getHeroContent} from '@modules/LandingPage/services/HeroContent';
import {HeroContent} from '@modules/LandingPage/types/Hero';
import {DescriptionContent} from '@modules/LandingPage/types/Description';
import {getDescriptionContent} from '@modules/LandingPage/services/DescriptionContent';
import {getDescriptionCard} from '@modules/LandingPage/services/DescriptionCard';
import {getImageContent} from '@modules/LandingPage/services/ImageContent';
import {getTopCategories} from '@modules/LandingPage/services/Categories';
import {getFooterContent} from '@modules/LandingPage/services/FooterContent';
import {BannerContent} from '@modules/LandingPage/types/Footer';
import {getProducts} from '@modules/LandingPage/services/Products';

export default function Home({
  heroContent,
  productList,
  descriptionContent,
  descriptionCardContent,
  imageContent,
  categories,
  categoryBannerContent,
}) {
  const [navShrink, setNavShrink] = useState<boolean>(false);
  const [heroShrink, setHeroShrink] = useState<boolean>(true);
  const {isOpen, onOpen, onClose} = useDisclosure();

  const {scrollY} = useViewportScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((y) => {
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

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <Flex direction="column" align={{'2xl': 'center'}}>
      <Head>
        <title>twoMatches</title>
        <meta name="description" content="TwoMatches App" />
      </Head>

      {process.env.NEXT_PUBLIC_NODE_ENV === 'production' && (
        <>
          {/* Hotjar Tracking Code */}
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          />
          {/* VWO Async SmartCode */}
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window._vwo_code = window._vwo_code || (function(){
              var account_id=${process.env.NEXT_PUBLIC_VWO_ID},
              settings_tolerance=2000,
              library_tolerance=2500,
              use_existing_jquery=false,
              is_spa=1,
              hide_element='body',

              /* DO NOT EDIT BELOW THIS LINE */
              f=false,d=document,code={use_existing_jquery:function(){return use_existing_jquery;},library_tolerance:function(){return library_tolerance;},finish:function(){if(!f){f=true;var a=d.getElementById('_vis_opt_path_hides');if(a)a.parentNode.removeChild(a);}},finished:function(){return f;},load:function(a){var b=d.createElement('script');b.src=a;b.type='text/javascript';b.innerText;b.onerror=function(){_vwo_code.finish();};d.getElementsByTagName('head')[0].appendChild(b);},init:function(){
              window.settings_timer=setTimeout(function () {_vwo_code.finish() },settings_tolerance);var a=d.createElement('style'),b=hide_element?hide_element+'{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}':'',h=d.getElementsByTagName('head')[0];a.setAttribute('id','_vis_opt_path_hides');a.setAttribute('type','text/css');if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(d.createTextNode(b));h.appendChild(a);this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&f='+(+is_spa)+'&r='+Math.random());return settings_timer; }};window._vwo_settings_timer = code.init(); return code; }());`,
            }}
          />
        </>
      )}

      <MailerModal isOpen={isOpen} onClose={onClose} />
      <MainMenu navShrink={navShrink} onOpenNewsletter={onOpen} />

      <HeroSection
        productList={productList}
        data={heroContent}
        heroShrink={heroShrink}
        onOpenNewsletter={onOpen}
      />

      <Box maxWidth="90rem">
        <Box display={{base: 'block', md: 'none'}} paddingX="1.75rem">
          <Divider
            marginBottom="1.75rem"
            orientation="horizontal"
            color="#CFD2ED"
          />
        </Box>

        <DescriptionSection data={descriptionContent} />

        <DescriptionCardSlider data={descriptionCardContent} />

        <ImageSection data={imageContent} />

        <PopularCategory data={categories} />

        <Box marginBottom={{base: '5.625rem', lg: '8rem'}}>
          <PopularCategoryBanner
            data={categoryBannerContent}
            onOpenNewsletter={onOpen}
          />
        </Box>

        <Flex justify="center" marginBottom={{base: '1.75rem', lg: '3.75rem'}}>
          <BackToTopButton />
        </Flex>
      </Box>

      <Footer />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let content = null;
  let heroContent: HeroContent | null = null;
  let productList = [];
  let descriptionContent: DescriptionContent | null = null;
  let descriptionCardContent = [];
  let imageContent = [];
  let categories: string[] = [];
  let categoryBannerContent: BannerContent | null = null;

  try {
    content = await getHeroContent();
    heroContent = content.data.attributes;

    content = await getDescriptionContent();
    descriptionContent = content.data.attributes;

    content = await getDescriptionCard();
    descriptionCardContent = content.data;

    content = await getImageContent();
    imageContent = content.data;

    content = await getTopCategories();

    categories = content.data.map((ele) => {
      return ele.attributes.title;
    });

    content = await getFooterContent();
    categoryBannerContent = content.data.attributes;

    content = await getProducts();
    productList = content.data;
  } catch (error) {
    // console.log(error);
  }

  return {
    props: {
      heroContent,
      productList,
      descriptionContent,
      descriptionCardContent,
      imageContent,
      categories,
      categoryBannerContent,
    },
    revalidate: 60,
  };
};
