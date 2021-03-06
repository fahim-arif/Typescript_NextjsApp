import type {AppProps} from 'next/app';
import '@public/styles/globals.css';
import {ChakraProvider, CSSReset} from '@chakra-ui/react';
import LogRocket from 'logrocket';
import '@fontsource/barlow/400.css';
import '@fontsource/barlow/500.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';

import {Auth0Provider} from '@common/context/Auth0Context';
import theme from '@common/theme';

import {makeServer} from '@tests/mock';
import {initMirageProxyForCypress} from '@tests/mock/mirageProxy';

if (process.env.NEXT_PUBLIC_NODE_ENV === 'test') {
  makeServer({environment: 'test'});
}

initMirageProxyForCypress();

// LogRocket Tracking
if (process.env.NEXT_PUBLIC_NODE_ENV === 'production') {
  LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_PROJECT);
}

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientID={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI}
      audience={process.env.NEXT_PUBLIC_AUTH0_AUDIENCE}
      scope={process.env.NEXT_PUBLIC_AUTH0_SCOPE}
      realm={process.env.NEXT_PUBLIC_AUTH0_REALM}
    >
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </Auth0Provider>
  );
}

export default MyApp;
