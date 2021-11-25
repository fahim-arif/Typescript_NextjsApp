import { useCallback, useEffect, useState } from "react";
import auth0, { Auth0Result, WebAuth, Auth0UserProfile } from "auth0-js";

function useAuth0({
  domain,
  clientID,
  redirectUri,
  audience: globalAudience,
  scope: globalScope,
}) {
  const [webAuth, setWebAuth] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkSession = useCallback(
    (audience?: string, scope?: string) => {
      return new Promise((resolve, reject) => {
        const options = {
          responseType: "id_token token",
          audience: audience ? audience : globalAudience,
          scope: scope ? scope : globalScope,
        };

        webAuth.checkSession(options, function (error, authResult) {
          if (error) {
            return reject(error);
          }

          webAuth.client.userInfo(
            authResult.accessToken,
            function (error: any, user: Auth0UserProfile) {
              if (error) {
                return reject(error);
              }

              setUser({
                ...user,
                accessToken: authResult.accessToken,
              });

              setIsAuthenticated(true);

              resolve(authResult.accessToken);
            }
          );
        });
      });
    },
    [webAuth, globalAudience, globalScope]
  );

  const renewSession = useCallback(async () => {
    try {
      await checkSession();
    } catch (error) {
      // console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [checkSession]);

  useEffect(() => {
    if (webAuth) {
      renewSession();
    }
  }, [webAuth, renewSession]);

  useEffect(() => {
    const webAuth: WebAuth = new auth0.WebAuth({
      domain,
      clientID,
      redirectUri,
      audience: globalAudience,
      scope: globalScope,
      responseType: "id_token token",
    });

    setWebAuth(webAuth);
  }, [domain, clientID, redirectUri, globalAudience, globalScope]);

  const login = async (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      webAuth.login(
        {
          username: email,
          password: password,
          realm: "Username-Password-Authentication",
          onRedirecting: function (done: any) {
            resolve(done());
          },
        },
        function (error: any) {
          return reject(error);
        }
      );
    });
  };

  const parseSessionFromUrl = useCallback(() => {
    return new Promise((resolve, reject) => {
      webAuth.parseHash(
        { hash: window.location.hash },
        function (error: any, authResult: Auth0Result) {
          if (error) {
            return reject(error);
          }

          webAuth.client.userInfo(
            authResult.accessToken,
            function (error: any, user: Auth0UserProfile) {
              if (error) {
                return reject(error);
              }

              setUser({ ...user, accessToken: authResult.accessToken });
              resolve(true);
            }
          );
        }
      );
    });
  }, [webAuth]);

  const getAccessTokenSilently = async ({ audience, scope }) => {
    try {
      const accessToken = await getAccessTokenFromSession(audience, scope);
      return accessToken;
    } catch (error) {
      console.log(error);
    }
  };

  const getAccessTokenFromSession = (audience: string, scope: string) => {
    return new Promise((resolve, reject) => {
      const options = {
        responseType: "id_token token",
        audience: "api.twomatches.xyz",
        scope: "read:accounts",
      };

      webAuth.checkSession(options, function (error, authResult) {
        if (error) {
          return reject(error);
        }

        return resolve(authResult.accessToken);
      });
    });
  };

  const logout = () => {
    return new Promise((resolve, reject) => {
      webAuth.logout({
        returnTo: process.env.NEXT_PUBLIC_HOST,
        clientID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
      });
    });
  };

  return {
    isLoading,
    isAuthenticated,
    user,
    login,
    logout,
    getAccessTokenSilently,
    parseSessionFromUrl,
  };
}

export default useAuth0;
