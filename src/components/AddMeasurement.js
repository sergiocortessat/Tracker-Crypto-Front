/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, postMeasurements } from '../API/API';
import { updateUser } from '../Redux/Actions';

const AddMeasurement = () => {
  const { coins } = useSelector((state) => state.coins);
  const [coin, setCoin] = useState(1);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    getUsers().then((res) => {
      const filtered = res.filter((a) => a.sub === user.sub);
      dispatch(updateUser(filtered[0]));
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getAccessTokenSilently()
      .then((accessToken) => {
        postMeasurements({ user_id: currentUser.id, goal_id: coin, unit: 1 }, accessToken);
      });
  };

  return (
  // create a form with list items and
    <form action="/action_page.php">
      <label htmlFor="coins">
        Choose a Crypto:
        <select id="coins" name="coins">
          {coins && coins.map((coin) => (
            <option
              key={coin.id}
              value={coin.name}
              onClick={() => setCoin(coin.id)}
            >
              {coin.name}
            </option>
          ))}
          )
        </select>
        <input type="submit" value="Submit" id={coin} onClick={(e) => handleSubmit(e)} />
      </label>
    </form>

  );
};

export default AddMeasurement;
