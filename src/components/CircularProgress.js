import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MainCircularProgress from './MainCirculaProgress';

const CircularProgress = ({ sum, measures }) => {
  const [aSum, setASum] = useState(0);
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
  const currentDate = `${date} ${weekday}`;
  useEffect(() => {
    let result = 0;
    measures.forEach((measure) => {
      if (measure.measurements.length > 0) {
        measure.measurements.forEach((measurement) => {
          const temp = measurement.unit ? result += measurement.unit : result;
          result = temp;
        });
      }
      setASum(result);
    });
  }, [measures]);
  const percentage = ((aSum * 100) / sum);
  return (
    <div className="progress-icon-home">
      <h2>
        Today:
        {' '}
        {currentDate}
      </h2>
      <MainCircularProgress percentage={percentage} />
    </div>
  );
};

// prop validations
CircularProgress.propTypes = {
  sum: PropTypes.number.isRequired,
  measures: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CircularProgress;
