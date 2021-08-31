/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set } from 'lodash';
import { updateGoals, updateUser } from '../Redux/Actions';
import { userData } from '../staticData';
import {
  postGoals, editGoals, getGoal, getGoals,
} from '../API/API';
import Loading from '../auth0/Loading';

const setGoals = ({ coin, setChange }) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [temp, setTemp] = useState(false);

  const info = useSelector((state) => state.user);
  // set goals state

  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    getGoal(user.sub).then((res) => {
      res.filter((item) => {
        if (item.coin_id === coin) {
          setGoal(item.goal);
          // console.log(item.goal);
        }
      });
    });
  }, [temp]);

  // useEffect(() => {
  //   getGoal(user.sub).then((res) => {
  //     if (res.length < 1) {
  //       // console.log(res);
  //       getAccessTokenSilently()
  //         .then((accessToken) => {
  //           postGoals({ sub: user.sub, coin_id: coin, goal: 1 }, accessToken);
  //         });
  //     }
  //   });
  // }, []);

  // getGoals().then((res) => {
  //   if (res.length < 1) {
  //     getAccessTokenSilently()
  //       .then((accessToken) => {
  //         postGoals({ sub: user.sub, coin_id: coin, goal }, accessToken);
  //       });
  //   } else if (res[0].sub !== user.sub) {
  //     getAccessTokenSilently()
  //       .then((accessToken) => {
  //         postGoals({ sub: user.sub, coin_id: coin, goal }, accessToken);
  //       });
  //   }
  // });
  // }, []);

  const changeGoal = (e) => {
    const { id, value } = e.target;
    getGoal(user.sub).then((res) => {
      const temp = res.filter((response) => response.coin_id === coin);
      getAccessTokenSilently()
        .then((accessToken) => {
          editGoals({ sub: user.sub, coin_id: coin, goal: value }, accessToken, temp[0].id);
        });
      setTemp(!temp);
      setGoal(value);
      setChange(value);
      // }
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
