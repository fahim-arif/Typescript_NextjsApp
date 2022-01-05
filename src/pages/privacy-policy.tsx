import Head from 'next/head';
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  useDisclosure,
} from '@chakra-ui/react';

import {MainMenuStatic} from '@common/components/elements/Menu';
import Footer from '@common/components/elements/Footer';
import MailerModal from '@modules/Mailer/components/MailerModal';

function PrivacyPolicy() {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Box>
      <Head>
        <title>twoMatches - Privacy Policy</title>
        <meta name="description" content="twoMatches Privacy Policy" />
      </Head>

      <MailerModal isOpen={isOpen} onClose={onClose} />
      <MainMenuStatic onOpenNewsletter={onOpen} />

      <Box
        paddingTop={{base: '2rem', md: '8rem'}}
        paddingBottom={{base: '4rem', md: '7.375rem'}}
        paddingX={{base: '1.75rem', md: '4rem', lg: '8rem', xl: '13.625rem'}}
      >
        <Box width={{base: 'full', lg: '48rem', xl: '50rem'}}>
          <Heading
            fontSize={{base: 'mh2', md: 'th2', lg: 'h2'}}
            marginTop={{base: '3.125rem', md: '5rem'}}
            marginBottom="3.8125rem"
          >
            Privacy Policy
          </Heading>

          <Text
            fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
            fontWeight="400"
            color="grayScale.300"
            marginBottom="3.75rem"
          >
            Protecting your private information is our priority. This Statement
            of Privacy applies to twoMatches&apos; Cooperative Commerce, and
            twoMatches Corporation and governs data collection and usage. For
            the purposes of this Privacy Policy, unless otherwise noted, all
            references to twoMatches Corporation include www.twomatches.xyz and
            twoMatches. The twoMatches application is a multi-tenant SaaS
            application. By using the twoMatches application, you consent to the
            data practices described in this statement.
          </Text>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Collection of your Personal Information
            </Heading>

            <Text>
              In order to better provide you with products and services offered,
              twoMatches may collect personally identifiable information, such
              as your:
            </Text>

            <br />

            <UnorderedList spacing="0.25rem">
              <ListItem>First and Last Name</ListItem>
              <ListItem>Mailing Address</ListItem>
              <ListItem>E-mail Address</ListItem>
              <ListItem>Phone Number</ListItem>
              <ListItem>Employer</ListItem>
              <ListItem>Job Title</ListItem>
            </UnorderedList>

            <br />

            <Text>
              If you purchase twoMatches&apos;s products and services, we
              collect billing and credit card information. This information is
              used to complete the purchase transaction.
              <br />
              <br />
              twoMatches may also collect anonymous demographic information,
              which is not unique to you, such as your:
            </Text>

            <UnorderedList spacing="0.25rem">
              <ListItem>Age</ListItem>
              <ListItem>Gender</ListItem>
              <ListItem>Race</ListItem>
            </UnorderedList>

            <br />

            <Text>
              We do not collect any personal information about you unless you
              voluntarily provide it to us. However, you may be required to
              provide certain personal information to us when you elect to use
              certain products or services. These may include: (a) registering
              for an account; (b) entering a sweepstakes or contest sponsored by
              us or one of our partners; (c) signing up for special offers from
              selected third parties; (d) sending us an email message; (e)
              submitting your credit card or other payment information when
              ordering and purchasing products and services. To wit, we will use
              your information for, but not limited to, communicating with you
              in relation to services and/or products you have requested from
              us. We also may gather additional personal or non-personal
              information in the future.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Use of your Personal Information
            </Heading>

            <Text>
              twoMatches collects and uses your personal information to operate
              and deliver the services you have requested.
              <br />
              <br />
              twoMatches may also use your personally identifiable information
              to inform you of other products or services available from
              twoMatches and its affiliates.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Sharing Information with Third Parties
            </Heading>

            <Text>
              twoMatches does not sell, rent or lease its customer lists to
              third parties.
              <br />
              <br /> twoMatches may share data with trusted partners to help
              perform statistical analysis, send you email or postal mail,
              provide customer support, or arrange for deliveries. All such
              third parties are prohibited from using your personal information
              except to provide these services to twoMatches, and they are
              required to maintain the confidentiality of your information.
              <br />
              <br />
              twoMatches may disclose your personal information, without notice,
              if required to do so by law or in the good faith belief that such
              action is necessary to: (a) conform to the edicts of the law or
              comply with legal process served on twoMatches or the site; (b)
              protect and defend the rights or property of twoMatches; and/or
              (c) act under exigent circumstances to protect the personal safety
              of users of twoMatches, or the public.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Right to Deletion
            </Heading>

            <Text>
              Subject to certain exceptions set out below, on receipt of a
              verifiable request from you, we will: Please note that we may not
              be able to comply with requests to delete your personal
              information if it is necessary to:
            </Text>

            <UnorderedList spacing="0.25rem">
              <ListItem>
                Delete your personal information from our records; and{' '}
              </ListItem>
              <ListItem>
                Direct any service providers to delete your personal information
                from their records.
              </ListItem>
              <ListItem>
                Complete the transaction for which the personal information was
                collected, fulfill the terms of a written warranty or product
                recall conducted in accordance with federal law, provide a good
                or service requested by you, or reasonably anticipated within
                the context of our ongoing business relationship with you, or
                otherwise perform a contract between you and us;
              </ListItem>
              <ListItem>
                Detect security incidents, protect against malicious, deceptive,
                fraudulent, or illegal activity; or prosecute those responsible
                for that activity;
              </ListItem>
              <ListItem>
                Debug to identify and repair errors that impair existing
                intended functionality;
              </ListItem>
              <ListItem>
                Exercise free speech, ensure the right of another consumer to
                exercise his or her right of free speech, or exercise another
                right provided for by law;
              </ListItem>
              <ListItem>
                Comply with the California Electronic Communications Privacy
                Act;
              </ListItem>
              <ListItem>
                Engage in public or peer-reviewed scientific, historical, or
                statistical research in the public interest that adheres to all
                other applicable ethics and privacy laws, when our deletion of
                the information is likely to render impossible or seriously
                impair the achievement of such research, provided we have
                obtained your informed consent;
              </ListItem>
              <ListItem>
                Enable solely internal uses that are reasonably aligned with
                your expectations based on your relationship with us;
              </ListItem>
              <ListItem>Comply with an existing legal obligation; or</ListItem>
              <ListItem>
                Otherwise use your personal information, internally, in a lawful
                manner that is compatible with the context in which you provided
                the information.
              </ListItem>
            </UnorderedList>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Children Under Thirteen
            </Heading>

            <Text>
              twoMatches does not knowingly collect personally identifiable
              information from children under the age of thirteen. If you are
              under the age of thirteen, you must ask your parent or guardian
              for permission to use this application.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Disconnecting your twoMatches Account from Third Party Websites
            </Heading>

            <Text>
              You will be able to connect your twoMatches account to third party
              accounts. BY CONNECTING YOUR TWOMATCHES ACCOUNT TO YOUR THIRD
              PARTY ACCOUNT, YOU ACKNOWLEDGE AND AGREE THAT YOU ARE CONSENTING
              TO THE CONTINUOUS RELEASE OF INFORMATION ABOUT YOU TO OTHERS (IN
              ACCORDANCE WITH YOUR PRIVACY SETTINGS ON THOSE THIRD PARTY SITES).
              IF YOU DO NOT WANT INFORMATION ABOUT YOU, INCLUDING PERSONALLY
              IDENTIFYING INFORMATION, TO BE SHARED IN THIS MANNER, DO NOT USE
              THIS FEATURE. You may disconnect your account from a third party
              account at any time. Users may learn to disconnect their accounts
              from third-party websites by visiting their &quot;My Account&quot;
              page. Users may also contact us via email or telephone.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              E-mail Communications
            </Heading>

            <Text>
              From time to time, twoMatches may contact you via email for the
              purpose of providing announcements, promotional offers, alerts,
              confirmations, surveys, and/or other general communication. In
              order to improve our Services, we may receive a notification when
              you open an email from twoMatches or click on a link therein. If
              you would like to stop receiving marketing or promotional
              communications via email from twoMatches, you may opt out of such
              communications by sending an email to privacy@twomatches.xyz or
              clicking on the unsubscribe link or button on the promotional or
              marketing email.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Changes to this Statement
            </Heading>

            <Text>
              twoMatches reserves the right to change this Privacy Policy from
              time to time. We will notify you about significant changes in the
              way we treat personal information by sending a notice to the
              primary email address specified in your account, by placing a
              prominent notice on our application, and/or by updating any
              privacy information. Your continued use of the application and/or
              Services available after such modifications will constitute your:
              (a) acknowledgment of the modified Privacy Policy; and (b)
              agreement to abide and be bound by that Policy.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Contact Information
            </Heading>

            <Text>
              twoMatches welcomes your questions or comments regarding this
              Statement of Privacy. If you believe that twoMatches has not
              adhered to this Statement, please contact twoMatches at:
              <br />
              <br />
              twoMatches Corporation
              <br />
              1432 Da Vinci Trail
              <br />
              Leander, Texas 78641
              <br />
              <br />
              <Text as="span" fontWeight="600">
                Email Address:
              </Text>
              <br />
              legal@twomatches.xyz
              <br />
              <br />
              <Text as="span" fontWeight="600">
                Telephone number:
              </Text>
              <br />
              (888) 326-2824 Effective as of January 07, 2022
            </Text>
          </Box>
        </Box>
      </Box>

      <Footer onOpenNewsletter={onOpen} />
    </Box>
  );
}

export default PrivacyPolicy;
