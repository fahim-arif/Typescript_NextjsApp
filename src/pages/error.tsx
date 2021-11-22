import Head from "next/head";
import Link from "next/link";
import { Flex, Text, Button } from "@chakra-ui/react";

import Navbar from "@common/components/elements/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LoginError() {
  const router = useRouter();
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (router.isReady) {
      const { error } = router.query;
      Array.isArray(error) ? setError(error[0]) : setError(error);
    }
  }, [router]);

  return (
    <div className="app">
      <Head>
        <title>twomatches</title>
        <meta name="description" content="twomatches next app" />
      </Head>

      <Navbar />

      <Flex direction="column" align="center" paddingTop="8">
        <Text marginBottom="1rem">{error}</Text>
      </Flex>
    </div>
  );
}
