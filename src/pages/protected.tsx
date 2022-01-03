import React from "react";
import Head from "next/head";

import allowRoute from "@common/components/elements/allowRoute";
import authenticatedRoute from "@common/components/elements/authenticatedRoute";
import useAuth from "@common/hooks/useAuth";
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
          <p>Name: {user.name}</p>
        </div>
      )}
    </div>
  );
}

export default allowRoute(authenticatedRoute(Protected));
