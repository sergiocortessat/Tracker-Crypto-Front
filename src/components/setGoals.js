/* eslint-disable array-callback-return */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import {
  editGoals, getGoal,
} from '../API/API';

const setGoals = ({ coin, setChange }) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [temp, setTemp] = useState(false);

  const [goal, setGoal] = useState('');
  useEffect(() => {
    getGoal(user.sub).then((res) => {
      res.filter((item) => {
        if (item.coin_id === coin) {
          setGoal(item.goal);
        }
      });
    });
  }, [temp]);

  const changeGoal = (e) => {
    const { value } = e.target;
    getGoal(user.sub).then((res) => {
      const temp = res.filter((response) => response.coin_id === coin);
      getAccessTokenSilently()
        .then((accessToken) => {
          editGoals({ sub: user.sub, coin_id: coin, goal: value }, accessToken, temp[0].id);
        });
      setTemp(!temp);
      setGoal(value);
      setChange(value);
    });
  };

  return (
    <>
      <form action="/action_page.php">
        <label htmlFor="quantity">
          Current goal
          {' '}
          <input value={goal || 1} placeholder="" type="number" id={coin} name="quantity" min="1" max="1000" onChange={changeGoal} />
        </label>
      </form>
    </>
  );
};

export default setGoals;
