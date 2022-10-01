import { NextPage } from 'next';
import Router from 'next/router';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from './auth-context';
import { useRouter } from 'next/router';

const withAuth = (Component) => {
  const Auth = (props) => {
    const { user } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      if (!user)
        Router.push({
          pathname: '/login',
          query: {
            from: router.pathname,
          },
        });
    }, [user]);

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
