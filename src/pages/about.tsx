import {useEffect, useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {Box, Flex, Button, Text, useDisclosure} from '@chakra-ui/react';

import Footer from '@common/components/elements/Footer';
import {MainMenuStatic} from '@common/components/elements/Menu';
import {AboutContent, AboutContentGet} from '@modules/About/types/AboutContent';
import {getAboutContent} from '@modules/About/services/about';
import AboutForm from '@modules/About/components/AboutForm';
import MailerModal from '@modules/Mailer/components/MailerModal';
import Section from '@modules/Mailer/components/Section';

function About() {
  const [data, setData] = useState<AboutContent>();
  const {isOpen, onOpen, onClose} = useDisclosure();

  const fetchAboutContent = async () => {
    try {
      const aboutContent: AboutContentGet = await getAboutContent();
      if (!aboutContent || !aboutContent.data) {
        throw new Error('No about page content found.');
      } else {
        setData(aboutContent.data.attributes);
      }
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    fetchAboutContent();
  }, []);

  return (
    <Box>
      <Head>
        <title>twoMatches - About</title>
        <meta name="description" content="twoMatches About" />
      </Head>

      <MailerModal isOpen={isOpen} onClose={onClose} />
      <MainMenuStatic onOpenNewsletter={onOpen} />

      {data && data.sections && data.sections.length > 0 && (
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

      {data && (
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
      )}

      <Flex
        direction="column"
        alignItems={{base: 'center', xl: 'start'}}
        position="relative"
        marginX={{xl: '13.625rem'}}
        marginTop={{base: '5rem', md: '10rem', lg: '20rem'}}
        marginBottom={{base: '-16rem', md: '-16rem', xl: '8.75rem'}}
      >
        {data && (
          <Box
            position="relative"
            width={{base: 'full', xl: '50rem'}}
            height={{
              base: '15.625rem',
              sm: '25rem',
              md: '43.75rem',
              xl: '33.5rem',
            }}
          >
            {data && (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}${data?.Image.data.attributes.url}`}
                layout="fill"
                objectFit="cover"
                alt="about-image"
              />
            )}
          </Box>
        )}

        <Flex
          direction="column"
          alignItems={{base: 'center', xl: 'start'}}
          width="full"
          paddingX="1rem"
          marginTop={{base: data ? '0rem' : '10rem', lg: '0rem'}}
        >
          <Box
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

      <Footer />
    </Box>
  );
}

export default About;
