import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import useAuth from "@common/hooks/useAuth";

interface OptionsType {
  returnTo?: string;
}

export default function publicRoute(
  Component = null,
  options: OptionsType = {}
) {
  const PublicRoute = () => {
    const router = useRouter();
    const { isLoading, isAuthenticated } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (isLoading) {
        return;
      }

      if (!isAuthenticated) {
        setLoading(false);
      } else {
        router.push(options.returnTo || "/");
      }
    }, [isLoading, isAuthenticated, router]);

    if (loading) {
      return <p>Loading...</p>;
    }

    return <Component />;
  };

  return PublicRoute;
}
