import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateUser } from '../Redux/Actions';

import {
  postGoals, getUser, getGoal,
} from '../API/API';
import Coin from './Coin';
import '../Style/Coin.scss';
import CircularProgress from './CircularProgress';
import '../Style/ProgressBar.scss';
import customAlert from './PopUpAlert';

const setCoins = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { coins } = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const [goals, setGoals] = useState([]);
  const [sum, setSum] = useState(0);
  const [measures, setMeasures] = useState([]);

  useEffect(() => {
    getUser(user.sub).then((res) => {
      dispatch(updateUser(res));
    });
    customAlert('Sign in successfully', 'green');
  }, []);
  useEffect(() => {
    getGoal(user.sub).then((res) => {
      setGoals(res);
      setMeasures(res);
      if (res.length < 1) {
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
    user && (
    <>
      <div className="main-progress">
        <CircularProgress sum={sum} measures={measures} />
      </div>
      <div className="coins-container">
        <div className="all-coins">
          {coins && coins.map((coins) => (
            <div key={coins.id} className="main-coin">
              <Link to={`/measurements/${coins.id}`} className="coin-list-link" data-testid="list" key={coins.id}>
                <Coin coins={coins} goals={goals} setSum={setSum} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
    )
  );
};

export default setCoins;
