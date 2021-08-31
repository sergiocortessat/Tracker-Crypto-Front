/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import { set } from 'lodash';
import React, { useEffect, useState } from 'react';
import { getGoal } from '../API/API';

const Coin = ({ coins, setSum }) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [goal, setGoal] = useState([]);

  useEffect(() => {
    getGoal(user.sub).then((res) => {
      const { goal, measurements } = res.filter((item) => item.coin_id === coins.id)[0];
      setGoal(goal);
      setSum((prev) => prev + goal);
      // console.log(sum);
    });
  }, []);

  return (
    <div key={coins.id} className="coin">
      <div className="crypto-icon">
        <img src={coins.picture} alt={coins.name} />
      </div>
      <div className="crypto-info">
        <p>{coins.name}</p>
        <p>
          Goal:
          {' '}
          {goal && goal}
        </p>
      </div>
    </div>
  );
};

export default Coin;
