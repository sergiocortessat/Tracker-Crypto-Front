/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Auth0 from '../auth0/Auth0';
import '../Style/NavBar.scss';

const NavBar = () => {
  // eslint-disable-next-line no-unused-vars
  const x = 0;
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  return (
    <nav>
      <ul>
        <li>
          <Auth0 />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <h2>
            Welcome
            {' '}
            {user.name}
          </h2>
        </li>
        <li>
          <img src={user.picture} alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
