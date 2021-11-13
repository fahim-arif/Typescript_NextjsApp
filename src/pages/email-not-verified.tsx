import Head from "next/head";
import Link from "next/link";
import { Flex, Text, Button } from "@chakra-ui/react";

import Navbar from "@common/components/elements/Navbar";

export default function EmailNotVerified() {
  return (
    <div className="app">
      <Head>
        <title>twomatches</title>
        <meta name="description" content="twomatches next app" />
      </Head>

      <Navbar />

      <Flex direction="column" align="center" paddingTop="8">
        <Text marginBottom="1rem">
          Please verify your email before logging in.
        </Text>
        <Link href="/login">
          <a>
            <Button size="sm">Login</Button>
          </a>
        </Link>
      </Flex>
    </div>
  );
}
