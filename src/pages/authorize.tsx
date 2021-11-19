import { useCallback, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Text } from "@chakra-ui/react";

import useAuth from "@root/common/hooks/useAuth";

export default function Callback() {
  const { isLoading, parseSessionFromUrl } = useAuth();
  const router = useRouter();

  const getSessionAndRedirect = useCallback(async () => {
    try {
      await parseSessionFromUrl();
      router.replace("/");
    } catch (error) {
      if (error.error === "unauthorized") {
        const description = error.errorDescription;
        const email = description.match(/email=(.*)/)[1];
        router.replace(`/email-verification?email=${email}`);
      } else {
        const errorDescription = error.errorDescription;
        router.replace(`/login-error?error=${errorDescription}`);
      }
    }
  }, [router, parseSessionFromUrl]);

  useEffect(() => {
    if (!isLoading && router.isReady) {
      getSessionAndRedirect();
    }
  }, [isLoading, router, getSessionAndRedirect]);

  return (
    <div className="app">
      <Head>
        <title>twomatches</title>
        <meta name="description" content="twomatches next app" />
      </Head>

      <main className="flex flex-col justify-center items-center pt-8">
        <Text>Redirecting...</Text>
      </main>
    </div>
  );
}
