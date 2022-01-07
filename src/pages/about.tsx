import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import {GetStaticProps} from 'next';
import {Box, Flex, Button, Text, useDisclosure} from '@chakra-ui/react';

import Footer from '@common/components/elements/Footer';
import {MainMenuStatic} from '@common/components/elements/Menu';
import {AboutContent, AboutContentGet} from '@modules/About/types/AboutContent';
import {getAboutContent} from '@modules/About/services/about';
import AboutForm from '@modules/About/components/AboutForm';
import MailerModal from '@modules/Mailer/components/MailerModal';
import Section from '@modules/About/components/Section';

function About({data}) {
  const {isOpen, onOpen, onClose} = useDisclosure();

  if (!data) {
    return (
      <>
        <MailerModal isOpen={isOpen} onClose={onClose} />
        <MainMenuStatic onOpenNewsletter={onOpen} />
      </>
    );
  }

  return (
    <Flex direction="column" align={{xl: 'center'}}>
      <Head>
        <title>twoMatches - About</title>
        <meta name="description" content="twoMatches About" />
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
      <MainMenuStatic onOpenNewsletter={onOpen} />

      <Box width={{xl: 'full', '2xl': '90rem'}} position="relative">
        {data.sections && data.sections.length > 0 && (
          <Box paddingTop={{base: '2rem', md: '8rem'}}>
            {data.sections.map(({title, subtitle, body}, index) => (
              <Section
                key={index}
                title={title}
                subtitle={subtitle}
                body={body}
              />
            ))}
          </Box>
        )}

        <Box
          paddingX={{base: '1.75rem', md: '4rem', lg: '8rem', xl: '13.625rem'}}
        >
          <Text
            as="pre"
            wordBreak="break-word"
            whiteSpace="pre-wrap"
            width={{base: 'full', lg: '48rem', xl: '50rem'}}
            fontSize={{base: 'mbody', md: 'th6', lg: 'h6'}}
            color="grayScale.300"
            marginBottom="3.75rem"
          >
            {data.additional_information}
          </Text>

          <Button onClick={onOpen}>Sign up for newsletter</Button>
        </Box>

        <Box
          position="absolute"
          bottom="0"
          width="full"
          height={{base: '50rem', md: '50rem', lg: '65.75rem'}}
          marginTop={{base: '5rem', md: '10rem', lg: '20rem'}}
          backgroundImage="url('/images/about-bg.png')"
          backgroundSize="cover"
        ></Box>

        <Flex
          direction="column"
          alignItems={{base: 'center', xl: 'start'}}
          position="relative"
          marginX={{xl: '13.625rem'}}
          marginTop={{base: '5rem', md: '10rem', lg: '20rem'}}
          marginBottom={{
            base: '-16rem',
            md: '-16rem',
            lg: '-10rem',
            xl: '8.75rem',
          }}
          paddingBottom={{
            base: '16rem',
            md: '16rem',
            lg: '10rem',
            xl: '8.75rem',
          }}
        >
          <Box
            position="relative"
            width={{base: 'full', xl: '50rem'}}
            height={{
              base: '15.625rem',
              sm: '25rem',
              md: '43.75rem',
              xl: '33.5rem',
            }}
            borderRadius="0.25rem"
            overflow="hidden"
          >
            {data.Image?.data?.attributes?.url && (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}${data.Image.data.attributes.url}`}
                layout="fill"
                priority={true}
                objectFit="cover"
                alt="about-image"
              />
            )}
          </Box>

          <Flex
            direction="column"
            alignItems={{base: 'center', xl: 'start'}}
            width="full"
            paddingX="1rem"
            marginTop={{base: data ? '0rem' : '10rem', lg: '0rem'}}
          >
            <Box
              id="contact-us"
              position={{base: 'relative', xl: 'absolute'}}
              top={{base: '-3.125rem', md: '-8.75rem', xl: '-10.5rem'}}
              left={{xl: '25.625rem'}}
              backgroundColor="#fff"
              width={{base: 'full', md: '43.56rem'}}
              paddingX={{base: '1rem', md: '6.375rem'}}
              paddingY={{base: '1.875rem', md: '3.75rem'}}
              boxShadow="md"
            >
              <AboutForm />
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Footer />
    </Flex>
  );
}

export default About;

export const getStaticProps: GetStaticProps = async () => {
  let data: AboutContent | null = null;

  try {
    const aboutContent: AboutContentGet = await getAboutContent();
    if (aboutContent && aboutContent.data) {
      data = aboutContent.data.attributes;
    }
  } catch (error) {
    // console.log(error);
  }

  return {
    props: {data},
    revalidate: 60,
  };
};
