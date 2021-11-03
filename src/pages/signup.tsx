import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Flex, HStack, Circle } from "@chakra-ui/react";

import { Logo } from "@root/common/components/elements/Logo";
import DesignSection from "@root/common/components/elements/DesignSection";
import SignUpForm from "@root/modules/Register/components/SignUpForm";
import ArrowLeft from "@root/common/components/elements/ArrowLeft";

export default function Signup() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="app h-screen">
      <Head>
        <title>twoMatches - sign up</title>
        <meta name="description" content="twoMatches sign up" />
      </Head>

      <Flex minHeight="100%">
        <DesignSection
          display={{
            base: showContent ? "none" : "block",
            lg: "block",
          }}
          hide={() => setShowContent(true)}
        />

        <Flex
          flex="1"
          display={{
            base: showContent ? "flex" : "none",
            lg: "flex",
          }}
          direction="column"
          alignItems="center"
          paddingX="1.75rem"
          paddingTop={{ base: "7", lg: "12.9375rem" }}
        >
          <HStack
            width={{ base: "full", md: "auto" }}
            spacing="1.875rem"
            marginBottom="3.47rem"
          >
            <Link href="/">
              <a>
                <Circle
                  display={{ base: "flex", md: "none" }}
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
            <Link href="/">
              <a>
                <Logo prefixId="logo" display={{ base: "flex", lg: "none" }} />
              </a>
            </Link>
          </HStack>
          <SignUpForm
            width="full"
            marginBottom={{ base: "1.75rem", lg: "5.875rem" }}
          />
        </Flex>
      </Flex>
    </div>
  );
}
