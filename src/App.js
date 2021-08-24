import React from 'react';
import Auth0 from './auth0/Auth0';
import {getMeasurements , getGoals, getCoins} from './API';


function App() {
  console.log(getMeasurements());
  console.log(getGoals());
  console.log(getCoins());
  return (
    <div className="App">
      <Auth0 />
    </div>
  );
}

export default App;
