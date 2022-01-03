import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";

import allowRoute from "@common/components/elements/allowRoute";
import publicRoute from "@common/components/elements/publicRoute";
import DesignSection from "@common/components/elements/DesignSection";
import CircleDesignHeader from "@common/components/elements/CircleDesignHeader";
import LoginForm from "@modules/Login/components/LoginForm/LoginForm";

function Login() {
  return (
    <Box className="app h-screen">
      <Head>
        <title>twoMatches - login</title>
        <meta name="description" content="twoMatches login" />
      </Head>

      <Flex minHeight="100%">
        <DesignSection
          title="Welcome to twoMatches"
          display={{
            base: "none",
            xl: "block",
          }}
        />

        <Flex
          flex="1"
          direction="column"
          alignItems="center"
          paddingTop={{ xl: "12.9375rem" }}
        >
          <CircleDesignHeader
            title="Welcome to twoMatches"
            headingWidth={{ base: "23.1875rem" }}
            display={{
              base: "flex",
              xl: "none",
            }}
          />
          <LoginForm
            paddingX="1.75rem"
            width="full"
            marginBottom={{ base: "1.75rem", lg: "5.875rem" }}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default allowRoute(publicRoute(Login));
