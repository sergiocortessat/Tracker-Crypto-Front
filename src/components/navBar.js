/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Auth0 from '../auth0/Auth0';

const NavBar = () => {
  // eslint-disable-next-line no-unused-vars
  const x = 0;
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  return (
    <div>
      <Auth0 />
      <h1>
        Welcome
        {' '}
        {user.name}
      </h1>
    </div>
  );
};

export default NavBar;
