import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Button, Text } from "@chakra-ui/react";

import useAuth from "@common/hooks/useAuth";
import authenticatedRoute from "@common/components/elements/authenticatedRoute";
import Navbar from "@common/components/elements/Navbar";

function Protected() {
  const { isLoading, isAuthenticated, user, getAccessTokenSilently } =
    useAuth();
  const [token, setToken] = useState();

  // const getToken = async () => {
  //   try {
  //     const token = await getAccessTokenSilently({
  //       audience: "api.twomatches.xyz",
  //       scope: "read:accounts",
  //     });

  //     console.log("Access Token:", token);
  //     setToken(token);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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

          {/* <Button marginY="1rem" onClick={getToken}>
            Get Token
          </Button>
          <Text>{token}</Text> */}
        </div>
      )}
    </div>
  );
}

export default authenticatedRoute(Protected);
