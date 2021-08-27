/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateUser } from '../Redux/Actions';
import { userData } from '../staticData';
import { postGoals, getUser, getUsers } from '../API/API';
import SetGoals from './setGoals';

const setCoins = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { coins } = useSelector((state) => state.coins);
  const info = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    getUsers().then((res) => {
      const filtered = res.filter((a) => a.sub === user.sub);
      dispatch(updateUser(filtered[0]));
    });
  }, []);
  return (
    <div>
      {coins && coins.map((coins) => (
        <div key={coins.id}>
          <Link to={`/measurements/${coins.id}`} className="pokemon-list-link" data-testid="list" key={coins.id}>
            <div key={coins.id}>
              <p>{coins.name}</p>
              <p>{coins.description}</p>
            </div>
          </Link>
          <SetGoals coin={coins.id} />
        </div>
      ))}
    </div>
  );
};

export default setCoins;
