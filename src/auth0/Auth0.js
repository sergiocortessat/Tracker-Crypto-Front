/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  postUser, getCoins, postGoals, getUser,
} from '../API/API';
import LoginButton from './buttons/LogIn';
import LogoutButton from './buttons/LogOut';
import { updateUser } from '../Redux/Actions';
import { userData } from '../staticData';

const AuthenticationButton = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const [tempInfo, setTempInfo] = useState([]);

  if (isAuthenticated) {
    const userInfo = userData(user);

    getAccessTokenSilently()
      .then((accessToken) => {
        postUser(userInfo, accessToken);
      });
    // useEffect(() => {
    //   dispatch(updateUser(userInfo));
    // }, []);
  }

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
