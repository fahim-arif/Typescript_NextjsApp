import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import useAuth from "@root/common/hooks/useAuth";

export default function Callback() {
  const { isLoading, parseSessionFromUrl } = useAuth();
  const router = useRouter();

  const getSessionAndRedirect = async () => {
    try {
      await parseSessionFromUrl();
      router.replace("/");
    } catch (error) {
      console.log(error);
      if (error.error === "unauthorized") {
        router.replace("/email-not-verified");
      }
    }
  };

  useEffect(() => {
    if (!isLoading && router) {
      getSessionAndRedirect();
    }
  }, [isLoading, router]);

  return (
    <div className="app">
      <Head>
        <title>twomatches</title>
        <meta name="description" content="twomatches next app" />
      </Head>

      <main className="flex flex-col justify-center items-center pt-8">
        <p className="text-xl">Redirecting...</p>
      </main>
    </div>
  );
}
