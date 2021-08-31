/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import MainCircularProgress from './MainCirculaProgress';

const CircularProgress = ({ sum, measures }) => {
  const [aSum, setASum] = useState(0);
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
  const currentDate = `${date} ${weekday}`;
  useEffect(() => {
    let result = 0;
    measures.map((measure) => {
      if (measure.measurements.length > 0) {
        measure.measurements.map((measurement) => {
          measurement.unit ? (result += measurement.unit) : (result);
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

export default CircularProgress;
