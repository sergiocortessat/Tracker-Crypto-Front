import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  getCoins,
} from './API/API';
import { updateCoins } from './Redux/Actions';
import Loading from './auth0/Loading';
import NavBar from './components/navBar';
import SetCoins from './components/setCoins';
import Measurement from './components/Measurement';
import Footer from './components/Footer';
import AddMeasurement from './components/AddMeasurement';
import Profile from './components/Profile';
import LogInScreen from './components/LogInScreen';

function App() {
  const {
    isAuthenticated, isLoading,
  } = useAuth0();

  const dispatch = useDispatch();
  useEffect(() => {
    getCoins().then((coins) => {
      dispatch(updateCoins(coins));
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {isAuthenticated ? (
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <alert className="alert not-display" />
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
        <>
          <alert className="alert not-display" />
          <LogInScreen />
        </>
      )}
    </>
  );
}

export default App;
