import type { AppProps } from "next/app";
import "@public/styles/globals.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../../theme";
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
