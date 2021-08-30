/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Coin = ({ coins }) => {
  const x = 0;
  return (
    <div key={coins.id} className="coin">
      <div className="crypto-icon">
        <img src={coins.picture} alt={coins.name} />
      </div>
      <div>
        <p>{coins.name}</p>
        <p>goal</p>
      </div>
    </div>
  );
};

export default Coin;
