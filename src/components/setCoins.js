/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateUser, updateGoals } from '../Redux/Actions';
import { userData } from '../staticData';

import {
  postGoals, getUser, getUsers, getGoal,
} from '../API/API';
import SetGoals from './setGoals';
import Coin from './Coin';
import '../Style/Coin.scss';
import CircularProgress from './CircularProgress';
import '../Style/ProgressBar.scss';

const setCoins = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { coins } = useSelector((state) => state.coins);
  const info = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [goals, setGoals] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    getUser(user.sub).then((res) => {
      dispatch(updateUser(res));
    });
  }, []);
  useEffect(() => {
    getGoal(user.sub).then((res) => {
      // dispatch(updateGoals(res));
      setGoals(res);
      if (res.length < 1) {
        // console.log(res);
        getAccessTokenSilently()
          .then((accessToken) => {
            coins.filter((coin) => postGoals({
              sub: user.sub,
              coin_id: coin.id,
              goal: 1,
            }, accessToken));
          });
      }
    });
  }, []);

  return (
    <>
      <div className="main-progress">
        <CircularProgress sum={sum} />
      </div>
      <div className="all-coins">
        {coins && coins.map((coins) => (
          <div key={coins.id} className="main-coin">
            <Link to={`/measurements/${coins.id}`} className="coin-list-link" data-testid="list" key={coins.id}>
              <Coin coins={coins} goals={goals} setSum={setSum} />
            </Link>
            {/* <SetGoals coin={coins.id} /> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default setCoins;
