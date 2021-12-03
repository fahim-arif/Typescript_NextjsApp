import { createContext } from "react";

import useAuth0 from "@common/hooks/useAuth0";

const Auth0Context = createContext(null);

function Auth0Provider({
  children,
  domain,
  clientID,
  redirectUri,
  audience,
  scope,
  realm,
}) {
  const auth = useAuth0({ domain, clientID, redirectUri, audience, scope, realm });
  return <Auth0Context.Provider value={auth}>{children}</Auth0Context.Provider>;
}

export { Auth0Context, Auth0Provider };
