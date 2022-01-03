import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Flex, Text } from "@chakra-ui/react";

import allowRoute from "@common/components/elements/allowRoute";
import Navbar from "@common/components/elements/Navbar";

function LoginError() {
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

export default allowRoute(LoginError); 