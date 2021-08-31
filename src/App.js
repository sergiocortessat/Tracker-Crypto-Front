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
import SetCoins from './components/setCoins';
import Measurement from './components/Measurement';
import Footer from './components/Footer';
import AddMeasurement from './components/AddMeasurement';
import Profile from './components/Profile';

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
    <>
      {isAuthenticated ? (
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/measurements/:id" component={Measurement} />
              <Route exact path="/add-measurement" component={AddMeasurement} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/" component={SetCoins} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      ) : (
        <div>
          <h1>Please login</h1>
          <Auth0 />
        </div>
      )}
    </>
  );
}

export default App;
