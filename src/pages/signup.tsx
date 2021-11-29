import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Flex, HStack, Circle } from "@chakra-ui/react";

import publicRoute from "@common/components/elements/publicRoute";
import { Logo } from "@common/components/elements/Logo";
import DesignSection from "@common/components/elements/DesignSection";
import SignUpForm from "@modules/Register/components/SignUpForm";
import ArrowLeft from "@common/components/elements/ArrowLeft";
import CircleDesignHeader from "@common/components/elements/CircleDesignHeader";

function Signup() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="app h-screen">
      <Head>
        <title>twoMatches - sign up</title>
        <meta name="description" content="twoMatches sign up" />
      </Head>

      <Flex minHeight="100%">
        <DesignSection
          title="Create an account to start your free trial"
          display={{
            base: showContent ? "none" : "block",
            md: "none",
            xl: "block",
          }}
          hide={() => setShowContent(true)}
        />

        <Flex
          flex="1"
          display={{
            base: showContent ? "flex" : "none",
            md: "flex",
          }}
          direction="column"
          alignItems="center"
          paddingTop={{ xl: "12.9375rem" }}
        >
          <CircleDesignHeader
            title="Create an account to start your free trial"
            headingWidth={{ md: "20.25rem", lg: "23.375rem" }}
            display={{
              base: "none",
              md: "flex",
              xl: "none",
            }}
          />

          <Flex
            display={{ base: "flex", md: "none" }}
            width="full"
            justify="left"
            marginTop="1.75rem"
            marginBottom="3.05rem"
          >
            <HStack
              spacing="1.875rem"
              align="start"
              marginLeft={{ base: "1.75rem", md: "2.56rem" }}
            >
              <Link href="/">
                <a>
                  <Circle
                    display={{ base: "flex" }}
                    size="2.125em"
                    borderWidth="1px"
                    borderColor="grayScale.500"
                    bg="transparent"
                    color="white"
                    cursor="pointer"
                  >
                    <ArrowLeft color="grayScale.100" />
                  </Circle>
                </a>
              </Link>

              <Logo
                prefixId="signup-above-logo"
                display={{ base: "flex", xl: "none" }}
              />
            </HStack>
          </Flex>

          <SignUpForm
            paddingX="1.75rem"
            width="full"
            marginBottom={{ base: "1.75rem", lg: "5.875rem" }}
          />
        </Flex>
      </Flex>
    </div>
  );
}

export default publicRoute(Signup);
