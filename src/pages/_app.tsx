import type { AppProps } from "next/app";
import "@public/styles/globals.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
