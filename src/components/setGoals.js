/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../Redux/Actions';
import { userData } from '../staticData';
import { postGoals } from '../API/API';

const setGoal = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  return (
    <div>
      Goal
    </div>
  );
};

export default setGoal;
