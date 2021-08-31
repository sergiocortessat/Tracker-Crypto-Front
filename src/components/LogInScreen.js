/* eslint-disable no-unused-vars */
import React from 'react';
import Auth0 from '../auth0/Auth0';
import '../Style/LogInScreen.scss';

const LogInScreen = () => {
  const x = 0;
  return (
    <div className="log-in-container">
      <h1>Please login</h1>
      <Auth0 />
    </div>
  );
};

export default LogInScreen;
