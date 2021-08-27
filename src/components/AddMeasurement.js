/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const AddMeasurement = () => {
  const { coins } = useSelector((state) => state.coins);
  const [coin, setCoin] = useState('Submit');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.id);
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
              onClick={() => setCoin(coin.name)}
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
