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
  const [unit, setUnit] = useState();

  useEffect(() => {
    getUsers().then((res) => {
      const filtered = res.filter((a) => a.sub === user.sub);
      dispatch(updateUser(filtered[0]));
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempGoal = currentUser.user.coins.filter((c) => c.id === coin)[0].goals;
    const goalID = tempGoal.filter((g) => g.sub === user.sub)[0].id;
    const userID = currentUser.user.id;
    getAccessTokenSilently()
      .then((accessToken) => {
        postMeasurements({ user_id: userID, goal_id: goalID, unit }, accessToken);
      });
  };
  console.log(unit);
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
        {/* <input
          type="text"
          placeholder="Units"
          onChange={(event) => setUnit(event.currentTarget.value)}
          value={unit}
        /> */}
        <label htmlFor="quantity">
          <input placeholder="Units" value={unit} type="number" id={coin} name="quantity" step={0.1} min="0" max="1000" onChange={(e) => setUnit(e.target.value)} />

        </label>
        <input type="submit" value="Submit" id={coin} onClick={(e) => handleSubmit(e)} />
      </label>
    </form>

  );
};

export default AddMeasurement;
