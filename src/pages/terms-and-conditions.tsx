import Head from 'next/head';
import {Box, Flex, Heading, Text, useDisclosure} from '@chakra-ui/react';

import {MainMenu} from '@common/components/elements/Menu';
import Footer from '@common/components/elements/Footer';
import MailerModal from '@modules/Mailer/components/MailerModal';

function TermsAndConditions() {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Flex direction="column" align={{'2xl': 'center'}}>
      <Head>
        <title>twoMatches - Terms and Conditions</title>
        <meta name="description" content="twoMatches Terms and Conditions" />
      </Head>

      <MailerModal isOpen={isOpen} onClose={onClose} />
      <MainMenu onOpenNewsletter={onOpen} />

      <Box
        maxWidth="90rem"
        paddingTop={{base: '2rem', md: '8rem'}}
        paddingBottom={{base: '4rem', md: '7.375rem'}}
        paddingX={{base: '1.75rem', md: '4rem', lg: '8rem', xl: '13.625rem'}}
      >
        <Box width={{base: 'full', lg: '48rem', xl: '50rem'}}>
          <Heading
            fontSize={{base: 'mh2', md: 'th2', lg: 'h2'}}
            marginTop={{base: '3.125rem', md: '5rem'}}
            marginBottom="2.5rem"
          >
            Terms and Conditions
          </Heading>

          <Heading
            fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
            fontWeight="400"
            marginBottom="1.75rem"
          >
            Agreement between User and www.twomatches.xyz
          </Heading>

          <Text color="grayScale.300" marginBottom="3.75rem">
            Welcome to www.twomatches.xyz. The www.twomatches.xyz website (the
            &quot;Site&quot;) is comprised of various web pages operated by
            twoMatches Corporation (&quot;twoMatches&quot;). www.twomatches.xyz
            is offered to you conditioned on your acceptance without
            modification of the terms, conditions, and notices contained herein
            (the &quot;Terms&quot;). Your use of www.twomatches.xyz constitutes
            your agreement to all such Terms. Please read these terms carefully,
            and keep a copy of them for your reference.
            <br />
            <br />
            www.twomatches.xyz is a Business Networking and E-Commerce (selling
            products or services) Site.
            <br />
            <br />
            We allow sellers to network with other independent sellers to boost
            their store sales.
          </Text>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Privacy
            </Heading>

            <Text>
              Your use of www.twomatches.xyz is subject to twoMatches&apos;s
              Privacy Policy. Please review our Privacy Policy, which also
              governs the Site and informs users of our data collection
              practices.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Electronic Communications
            </Heading>

            <Text>
              Visiting www.twomatches.xyz or sending emails to twoMatches
              constitutes electronic communications. You consent to receive
              electronic communications and you agree that all agreements,
              notices, disclosures and other communications that we provide to
              you electronically, via email and on the Site, satisfy any legal
              requirement that such communications be in writing.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Your Account
            </Heading>

            <Text>
              If you use this site, you are responsible for maintaining the
              confidentiality of your account and password and for restricting
              access to your computer, and you agree to accept responsibility
              for all activities that occur under your account or password. You
              may not assign or otherwise transfer your account to any other
              person or entity. You acknowledge that twoMatches is not
              responsible for third party access to your account that results
              from theft or misappropriation of your account. twoMatches and its
              associates reserve the right to refuse or cancel service,
              terminate accounts, or remove or edit content in our sole
              discretion.
            </Text>
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
              twoMatches does not knowingly collect, either online or offline,
              personal information from persons under the age of thirteen. If
              you are under 18, you may use www.twomatches.xyz only with
              permission of a parent or guardian.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Cancellation/Refund Policy
            </Heading>

            <Text>
              You may cancel your subscription at any time. Any cancellations
              made after 30 days of service will not qualify for a refund.
              Please get in touch with us at billing@twomatches.xyz with any
              questions.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Links to Third Party Sites/Third Party Services
            </Heading>

            <Text>
              www.twomatches.xyz may contain links to other websites
              (&quot;Linked Sites&quot;). The Linked Sites are not under the
              control of twoMatches and twoMatches is not responsible for the
              contents of any Linked Site, including without limitation any link
              contained in a Linked Site, or any changes or updates to a Linked
              Site. twoMatches is providing these links to you only as a
              convenience, and the inclusion of any link does not imply
              endorsement by twoMatches of the site or any association with its
              operators.
              <br />
              <br />
              Certain services made available via www.twomatches.xyz are
              delivered by third party sites and organizations. By using any
              product, service or functionality originating from the
              www.twomatches.xyz domain, you hereby acknowledge and consent that
              twoMatches may share such information and data with any third
              party with whom twoMatches has a contractual relationship to
              provide the requested product, service or functionality on behalf
              of www.twomatches.xyz users and customers.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              No Unlawful or Prohibited Use/Intellectual Property
            </Heading>

            <Text>
              You are granted a non-exclusive, non-transferable, revocable
              license to access and use www.twomatches.xyz strictly in
              accordance with these terms of use. As a condition of your use of
              the Site, you warrant to twoMatches that you will not use the Site
              for any purpose that is unlawful or prohibited by these Terms. You
              may not use the Site in any manner which could damage, disable,
              overburden, or impair the Site or interfere with any other
              party&apos;s use and enjoyment of the Site. You may not obtain or
              attempt to obtain any materials or information through any means
              not intentionally made available or provided for through the Site.
              <br />
              <br />
              All content included as part of the Service, such as text,
              graphics, logos, images, as well as the compilation thereof, and
              any software used on the Site, is the property of twoMatches or
              its suppliers and protected by copyright and other laws that
              protect intellectual property and proprietary rights. You agree to
              observe and abide by all copyright and other proprietary notices,
              legends or other restrictions contained in any such content and
              will not make any changes thereto.
              <br />
              <br />
              You will not modify, publish, transmit, reverse engineer,
              participate in the transfer or sale, create derivative works, or
              in any way exploit any of the content, in whole or in part, found
              on the Site. twoMatches content is not for resale. Your use of the
              Site does not entitle you to make any unauthorized use of any
              protected content, and in particular you will not delete or alter
              any proprietary rights or attribution notices in any content. You
              will use protected content solely for your personal use, and will
              make no other use of the content without the express written
              permission of twoMatches and the copyright owner. You agree that
              you do not acquire any ownership rights in any protected content.
              We do not grant you any licenses, express or implied, to the
              intellectual property of twoMatches or our licensors except as
              expressly authorized by these Terms.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Use of Communication Services
            </Heading>

            <Text>
              The Site may contain bulletin board services, chat areas, news
              groups, forums, communities, personal web pages, calendars, and/or
              other message or communication facilities designed to enable you
              to communicate with the public at large or with a group
              (collectively, &quot;Communication Services&quot;). You agree to
              use the Communication Services only to post, send and receive
              messages and material that are proper and related to the
              particular Communication Service.
              <br />
              <br />
              By way of example, and not as a limitation, you agree that when
              using a Communication Service, you will not: defame, abuse,
              harass, stalk, threaten or otherwise violate the legal rights
              (such as rights of privacy and publicity) of others; publish,
              post, upload, distribute or disseminate any inappropriate,
              profane, defamatory, infringing, obscene, indecent or unlawful
              topic, name, material or information; upload files that contain
              software or other material protected by intellectual property laws
              (or by rights of privacy of publicity) unless you own or control
              the rights thereto or have received all necessary consents; upload
              files that contain viruses, corrupted files, or any other similar
              software or programs that may damage the operation of
              another&apos;s computer; advertise or offer to sell or buy any
              goods or services for any business purpose, unless such
              Communication Service specifically allows such messages; conduct
              or forward surveys, contests, pyramid schemes or chain letters;
              download any file posted by another user of a Communication
              Service that you know, or reasonably should know, cannot be
              legally distributed in such manner; falsify or delete any author
              attributions, legal or other proper notices or proprietary
              designations or labels of the origin or source of software or
              other material contained in a file that is uploaded; restrict or
              inhibit any other user from using and enjoying the Communication
              Services; violate any code of conduct or other guidelines which
              may be applicable for any particular Communication Service;
              harvest or otherwise collect information about others, including
              e-mail addresses, without their consent; violate any applicable
              laws or regulations.
              <br />
              <br />
              twoMatches has no obligation to monitor the Communication
              Services. However, twoMatches reserves the right to review
              materials posted to a Communication Service and to remove any
              materials in its sole discretion. twoMatches reserves the right to
              terminate your access to any or all of the Communication Services
              at any time without notice for any reason whatsoever.
              <br />
              <br />
              twoMatches reserves the right at all times to disclose any
              information as necessary to satisfy any applicable law,
              regulation, legal process or governmental request, or to edit,
              refuse to post or to remove any information or materials, in whole
              or in part, in twoMatches&apos;s sole discretion.
              <br />
              <br />
              Always use caution when giving out any personally identifying
              information about yourself or your children in any Communication
              Service. twoMatches does not control or endorse the content,
              messages or information found in any Communication Service and,
              therefore, twoMatches specifically disclaims any liability with
              regard to the Communication Services and any actions resulting
              from your participation in any Communication Service. Managers and
              hosts are not authorized twoMatches spokespersons, and their views
              do not necessarily reflect those of twoMatches.
              <br />
              <br />
              Materials uploaded to a Communication Service may be subject to
              posted limitations on usage, reproduction and/or dissemination.
              You are responsible for adhering to such limitations if you upload
              the materials.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Materials Provided to www.twomatches.xyz or Posted on Any
              twoMatches Web Page
            </Heading>

            <Text>
              twoMatches does not claim ownership of the materials you provide
              to www.twomatches.xyz (including feedback and suggestions) or
              post, upload, input or submit to any twoMatches Site or our
              associated services (collectively &quot;Submissions&quot;).
              However, by posting, uploading, inputting, providing or submitting
              your Submission you are granting twoMatches, our affiliated
              companies and necessary sublicensees permission to use your
              Submission in connection with the operation of their Internet
              businesses including, without limitation, the rights to: copy,
              distribute, transmit, publicly display, publicly perform,
              reproduce, edit, translate and reformat your Submission; and to
              publish your name in connection with your Submission.
              <br />
              <br />
              No compensation will be paid with respect to the use of your
              Submission, as provided herein. twoMatches is under no obligation
              to post or use any Submission you may provide and may remove any
              Submission at any time in twoMatches&apos;s sole discretion.
              <br />
              <br />
              By posting, uploading, inputting, providing or submitting your
              Submission you warrant and represent that you own or otherwise
              control all of the rights to your Submission as described in this
              section including, without limitation, all the rights necessary
              for you to provide, post, upload, input or submit the Submissions.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Third Party Accounts
            </Heading>

            <Text>
              You will be able to connect your twoMatches account to third party
              accounts. By connecting your twoMatches account to your third
              party account, you acknowledge and agree that you are consenting
              to the continuous release of information about you to others (in
              accordance with your privacy settings on those third party sites).
              If you do not want information about you to be shared in this
              manner, do not use this feature.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              International Users
            </Heading>

            <Text>
              The Service is controlled, operated and administered by twoMatches
              from our offices within the USA. If you access the Service from a
              location outside the USA, you are responsible for compliance with
              all local laws. You agree that you will not use the twoMatches
              Content accessed through www.twomatches.xyz in any country or in
              any manner prohibited by any applicable laws, restrictions or
              regulations.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Indemnification
            </Heading>

            <Text>
              You agree to indemnify, defend and hold harmless twoMatches, its
              officers, directors, employees, agents and third parties, for any
              losses, costs, liabilities and expenses (including reasonable
              attorney&apos;s fees) relating to or arising out of your use of or
              inability to use the Site or services, any user postings made by
              you, your violation of any terms of this Agreement or your
              violation of any rights of a third party, or your violation of any
              applicable laws, rules or regulations. twoMatches reserves the
              right, at its own cost, to assume the exclusive defense and
              control of any matter otherwise subject to indemnification by you,
              in which event you will fully cooperate with twoMatches in
              asserting any available defenses.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Arbitration
            </Heading>

            <Text>
              In the event the parties are not able to resolve any dispute
              between them arising out of or concerning these Terms and
              Conditions, or any provisions hereof, whether in contract, tort,
              or otherwise at law or in equity for damages or any other relief,
              then such dispute shall be resolved only by final and binding
              arbitration pursuant to the Federal Arbitration Act, conducted by
              a single neutral arbitrator and administered by the American
              Arbitration Association, or a similar arbitration service selected
              by the parties, in a location mutually agreed upon by the parties.
              The arbitrator&apos;s award shall be final, and judgment may be
              entered upon it in any court having jurisdiction. In the event
              that any legal or equitable action, proceeding or arbitration
              arises out of or concerns these Terms and Conditions, the
              prevailing party shall be entitled to recover its costs and
              reasonable attorney&apos;s fees. The parties agree to arbitrate
              all disputes and claims in regards to these Terms and Conditions
              or any disputes arising as a result of these Terms and Conditions,
              whether directly or indirectly, including Tort claims that are a
              result of these Terms and Conditions. The parties agree that the
              Federal Arbitration Act governs the interpretation and enforcement
              of this provision. The entire dispute, including the scope and
              enforceability of this arbitration provision shall be determined
              by the Arbitrator. This arbitration provision shall survive the
              termination of these Terms and Conditions.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Class Action Waiver
            </Heading>

            <Text>
              Any arbitration under these Terms and Conditions will take place
              on an individual basis; class arbitrations and
              class/representative/collective actions are not permitted. THE
              PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY
              IN EACH&apos;S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR
              CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/ OR
              REPRESENTATIVE PROCEEDING, SUCH AS IN THE FORM OF A PRIVATE
              ATTORNEY GENERAL ACTION AGAINST THE OTHER. Further, unless both
              you and twoMatches agree otherwise, the arbitrator may not
              consolidate more than one person&apos;s claims, and may not
              otherwise preside over any form of a representative or class
              proceeding.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Liability Disclaimer
            </Heading>

            <Text>
              THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR
              AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR
              TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE
              INFORMATION HEREIN. TWOMATCHES CORPORATION AND/OR ITS SUPPLIERS
              MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME.
              TWOMATCHES CORPORATION AND/OR ITS SUPPLIERS MAKE NO
              REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY,
              TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS,
              SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY
              PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL
              SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED
              GRAPHICS ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OR
              CONDITION OF ANY KIND. TWOMATCHES CORPORATION AND/OR ITS SUPPLIERS
              HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS
              INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS,
              INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.
              <br />
              <br />
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              SHALL TWOMATCHES CORPORATION AND/OR ITS SUPPLIERS BE LIABLE FOR
              ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL
              DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION,
              DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY
              WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE
              DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE
              PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY
              INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS
              OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF
              THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT
              LIABILITY OR OTHERWISE, EVEN IF TWOMATCHES CORPORATION OR ANY OF
              ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES.
              BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR
              LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES,
              THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED
              WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE,
              YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Termination/Access Restriction
            </Heading>

            <Text>
              twoMatches reserves the right, in its sole discretion, to
              terminate your access to the Site and the related services or any
              portion thereof at any time, without notice. To the maximum extent
              permitted by law, this agreement is governed by the laws of the
              State of Texas and you hereby consent to the exclusive
              jurisdiction and venue of courts in Texas in all disputes arising
              out of or relating to the use of the Site. Use of the Site is
              unauthorized in any jurisdiction that does not give effect to all
              provisions of these Terms, including, without limitation, this
              section.
              <br />
              <br />
              You agree that no joint venture, partnership, employment, or
              agency relationship exists between you and twoMatches as a result
              of this agreement or use of the Site. twoMatches&apos;s
              performance of this agreement is subject to existing laws and
              legal process, and nothing contained in this agreement is in
              derogation of twoMatches&apos;s right to comply with governmental,
              court and law enforcement requests or requirements relating to
              your use of the Site or information provided to or gathered by
              twoMatches with respect to such use. If any part of this agreement
              is determined to be invalid or unenforceable pursuant to
              applicable law including, but not limited to, the warranty
              disclaimers and liability limitations set forth above, then the
              invalid or unenforceable provision will be deemed superseded by a
              valid, enforceable provision that most closely matches the intent
              of the original provision and the remainder of the agreement shall
              continue in effect.
              <br />
              <br />
              Unless otherwise specified herein, this agreement constitutes the
              entire agreement between the user and twoMatches with respect to
              the Site and it supersedes all prior or contemporaneous
              communications and proposals, whether electronic, oral or written,
              between the user and twoMatches with respect to the Site. A
              printed version of this agreement and of any notice given in
              electronic form shall be admissible in judicial or administrative
              proceedings based upon or relating to this agreement to the same
              extent and subject to the same conditions as other business
              documents and records originally generated and maintained in
              printed form. It is the express wish to the parties that this
              agreement and all related documents be written in English.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Changes to Terms
            </Heading>

            <Text>
              twoMatches reserves the right, in its sole discretion, to change
              the Terms under which www.twomatches.xyz is offered. The most
              current version of the Terms will supersede all previous versions.
              twoMatches encourages you to periodically review the Terms to stay
              informed of our updates.
            </Text>
          </Box>

          <Box marginBottom="2.5rem" color="grayScale.300">
            <Heading
              color="grayScale.200"
              fontSize={{base: 'mh6', md: 'th6', lg: 'h6'}}
              fontWeight="400"
              marginBottom="1.75rem"
            >
              Contact Us
            </Heading>

            <Text>
              twoMatches welcomes your questions or comments regarding the
              Terms:
              <br />
              <br />
              <Text as="span" fontWeight="600">
                twoMatches Corporation
              </Text>
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
              (888) 966-2824
              <br />
              <br />
              <Text as="span">Effective as of January 07, 2022 </Text>
            </Text>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Flex>
  );
}

export default TermsAndConditions;
