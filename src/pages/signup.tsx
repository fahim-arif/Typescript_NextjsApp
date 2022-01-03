import { useState } from "react";
import Head from "next/head";
import { Flex, HStack } from "@chakra-ui/react";

import allowRoute from "@common/components/elements/allowRoute";
import publicRoute from "@common/components/elements/publicRoute";
import { Logo } from "@common/components/elements/Logo";
import DesignSection from "@common/components/elements/DesignSection";
import CircleDesignHeader from "@common/components/elements/CircleDesignHeader";
import SignUpForm from "@modules/Register/components/SignUpForm";

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

export default allowRoute(publicRoute(Signup));
