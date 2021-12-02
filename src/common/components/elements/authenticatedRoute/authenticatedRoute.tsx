import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import useAuth from "@root/common/hooks/useAuth";

interface OptionsType {
  returnTo?: string;
}

export default function authenticatedRoute(
  Component = null,
  options: OptionsType = {}
) {
  const AuthenticatedRoute = () => {
    const router = useRouter();
    const { isLoading, isAuthenticated } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (isLoading) {
        return;
      }

      if (isAuthenticated) {
        setLoading(false);
      } else {
        router.push(options.returnTo || "/login");
      }
    }, [isLoading, isAuthenticated, router]);

    if (loading) {
      return <p>Loading...</p>;
    }

    return <Component />;
  };

  return AuthenticatedRoute;
}
