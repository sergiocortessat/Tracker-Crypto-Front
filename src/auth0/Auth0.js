import { useAuth0 } from '@auth0/auth0-react';
import {
  postUser,
} from '../API/API';
import LoginButton from './buttons/LogIn';
import LogoutButton from './buttons/LogOut';
import { userData } from '../staticData';
import '../Style/NavBar.scss';

const AuthenticationButton = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  if (isAuthenticated) {
    const userInfo = userData(user);

    getAccessTokenSilently()
      .then((accessToken) => {
        postUser(userInfo, accessToken);
      });
  }

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
