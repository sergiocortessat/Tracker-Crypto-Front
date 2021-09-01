/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getGoal } from '../API/API';

const Coin = ({ coins, setSum }) => {
  const { user } = useAuth0();
  const [goal, setGoal] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getGoal(user.sub).then((res) => {
        if (res.filter((item) => item.coin_id === coins.id)[0].goal !== undefined) {
          const { goal } = res.filter((item) => item.coin_id === coins.id)[0];
          setGoal(goal);
          setSum((prev) => prev + goal);
        } else {
          setGoal(1);
          setSum((prev) => prev + goal);
        }
      });
    }, 500);
  }, []);

  return (
    goal
    && (
    <div key={coins.id} className="coin">
      <div className="crypto-icon">
        <img src={coins.picture} alt={coins.name} />
      </div>
      <div className="crypto-info">
        <h3>{coins.name}</h3>
        <h4>
          Goal:
          {' '}
          {goal}
        </h4>
      </div>
    </div>
    )
  );
};
// Default propTypes
Coin.defaultProps = {
  coins: {
    id: 0,
    name: '',
    picture: '',
  },
  setSum: () => {},
};
// Prop types
Coin.propTypes = {
  coins: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    picture: PropTypes.string,
  }),
  setSum: PropTypes.func,
};

export default Coin;
