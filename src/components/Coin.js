/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { getGoal } from '../API/API';

const Coin = ({ coins, goals }) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { goal, setGoal } = useState();
  useEffect(() => {
    getGoal(user.sub).then((res) => {
      const { goal } = res.filter((item) => item.coin_id === coins.id)[0];
      console.log(goal);
    });
  }, []);

  // console.log(goals);
  return (
    <div key={coins.id} className="coin">
      <div className="crypto-icon">
        <img src={coins.picture} alt={coins.name} />
      </div>
      <div>
        <p>{coins.name}</p>
        <p>hello</p>
      </div>
    </div>
  );
};

export default Coin;
