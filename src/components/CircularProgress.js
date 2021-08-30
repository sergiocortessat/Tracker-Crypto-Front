/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import MainCircularProgress from './MainCirculaProgress';

const CircularProgress = ({ sum, measures }) => {
  const [aSum, setASum] = useState(0);
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
  const percentage = (sum / aSum) * 100;
  // console.log(aSum);
  return (
    <MainCircularProgress percentage={percentage} />

  );
};

export default CircularProgress;
