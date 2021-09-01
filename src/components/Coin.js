import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getGoal } from '../API/API';

const Coin = ({ coins, setSum }) => {
  const { user } = useAuth0();
  const [goal, setGoal] = useState([]);

  useEffect(() => {
    getGoal(user.sub).then((res) => {
      const { goal } = res.filter((item) => item.coin_id === coins.id)[0];
      setGoal(goal);
      setSum((prev) => prev + goal);
    });
  }, []);

  return (
    <div key={coins.id} className="coin">
      <div className="crypto-icon">
        <img src={coins.picture} alt={coins.name} />
      </div>
      <div className="crypto-info">
        <h3>{coins.name}</h3>
        <h4>
          Goal:
          {' '}
          {goal && goal}
        </h4>
      </div>
    </div>
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
