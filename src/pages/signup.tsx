import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import DesignSection from "@root/common/components/elements/DesignSection";
import SignUpForm from "@root/modules/Register/components/SignUpForm";

export default function Signup() {
  return (
    <div className="app h-screen">
      <Head>
        <title>twoMatches - sign up</title>
        <meta name="description" content="twoMatches sign up" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex minHeight="100%">
        <DesignSection />
        <SignUpForm />
      </Flex>
    </div>
  );
}
