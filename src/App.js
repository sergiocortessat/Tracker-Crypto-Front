/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Auth0 from './auth0/Auth0';
import { getMeasurements, getGoals, getCoins } from './API/API';

function App() {
  const [list, setList] = useState();
  useEffect(() => {
    getCoins().then((coins) => {
      setList(coins);
    });
  }, []);
  return (
    <div className="App">
      <Auth0 />
      <div className="main">
        {list && list.map((coin) => (
          <div key={coin.id} className="coin">
            <div className="coin-name">{coin.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
