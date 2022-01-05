import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

const blockedPages = [
  '/signup',
  '/login',
  '/account-activation',
  '/authorize',
  '/email-verification',
  '/error',
  '/forgot-password',
  '/protected',
  '/reset-password',
];

export default function allowRoute(Component = null) {
  const AllowRoute = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (router.isReady) {
        if (blockedPages.includes(router.pathname)) {
          router.replace('/');
        } else {
          setLoading(false);
        }
      }
    }, [router]);

    if (loading) {
      return null;
    }

    return <Component />;
  };

  return AllowRoute;
}
