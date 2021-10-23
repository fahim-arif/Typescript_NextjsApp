import type { AppProps } from "next/app";
import "@public/styles/globals.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import theme from "@root/theme";

import { makeServer } from "@tests/mock";
import { initMirageProxyForCypress } from "@tests/mock/mirageProxy";

if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

initMirageProxyForCypress();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
