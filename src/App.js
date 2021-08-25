/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Auth0 from './auth0/Auth0';
import {
  getMeasurements, getGoals, getCoins, getUser,
} from './API/API';
import { updateCoins } from './Redux/Actions';
import Loading from './auth0/Loading';
import NavBar from './components/navBar';
import SetGoals from './components/setGoals';

function App() {
  // const [list, setList] = useState();
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const dispatch = useDispatch();
  useEffect(() => {
    getCoins().then((coins) => {
      dispatch(updateCoins(coins));
    });
  }, []);

  // const { coins } = useSelector((state) => state.coins);

  return (

    <BrowserRouter>
      <Switch>
        <Route path="/">
          <div>
            {isAuthenticated ? (
              <>
                <NavBar />
                <SetGoals />
              </>
            ) : (
              <div>
                <h1>Please login</h1>
                <Auth0 />
              </div>
            )}
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
