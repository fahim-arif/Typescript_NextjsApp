import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import DesignSection from "@root/common/components/elements/DesignSection";
import SignUpForm from "@root/modules/Register/components/SignUpForm";
import { Logo } from "@root/common/components/elements/Logo";
import { useState } from "react";

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
            md: "none",
            lg: "block",
          }}
          hide={() => setShowContent(true)}
        />

        <Flex
          flex="1"
          display={{
            base: showContent ? "flex" : "none",
            md: "flex",
            lg: "flex",
          }}
          direction="column"
          alignItems="center"
          paddingX="1rem"
          paddingTop={{ base: "7", lg: "12.9375rem" }}
        >
          <Logo
            prefixId="logo"
            display={{ base: "flex", lg: "none" }}
            marginBottom="3.47rem"
          />
          <SignUpForm
            width="full"
            marginBottom={{ base: "1.75rem", lg: "5.875rem" }}
          />
        </Flex>
      </Flex>
    </div>
  );
}
