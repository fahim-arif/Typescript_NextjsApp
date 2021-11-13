import React from "react";
import Head from "next/head";

import useAuth from "@common/hooks/useAuth";
import authenticatedRoute from "@common/components/elements/authenticatedRoute";
import Navbar from "@common/components/elements/Navbar";

function Protected() {
  const { isLoading, isAuthenticated, user } = useAuth();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="app">
      <Head>
        <title>twoMatches - protected</title>
        <meta name="description" content="twomatches next app" />
      </Head>

      <Navbar />

      {isAuthenticated && (
        <div className="m-8">
          <pre className="overflow-x-scroll">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default authenticatedRoute(Protected);
