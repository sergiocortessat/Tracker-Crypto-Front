/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateUser } from '../Redux/Actions';
import { userData } from '../staticData';
import { postGoals, getUser, getUsers } from '../API/API';
import SetGoals from './setGoals';
import Coin from './Coin';
import '../Style/Coin.scss';
import CircularProgress from './CircularProgress';

const setCoins = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { coins } = useSelector((state) => state.coins);
  const info = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    getUser(user.sub).then((res) => {
      dispatch(updateUser(res));
    });
  }, []);
  return (
    <>
      <div className="main-progress">
        {/* <CircularProgress /> */}
        here goes progress
      </div>
      <div className="all-coins">
        {coins && coins.map((coins) => (
          <div key={coins.id} className="main-coin">
            <Link to={`/measurements/${coins.id}`} className="coin-list-link" data-testid="list" key={coins.id}>
              <Coin coins={coins} />
            </Link>
            {/* <SetGoals coin={coins.id} /> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default setCoins;
