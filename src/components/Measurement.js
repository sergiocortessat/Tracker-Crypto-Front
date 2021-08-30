/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { deleteMeasurement, getGoal } from '../API/API';
import MainCircularProgress from './MainCirculaProgress';
import SetGoals from './setGoals';
import '../Style/ProgressBar.scss';

const Measurement = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { id } = useParams();
  const [measures, setMeasures] = useState();
  const [temp, setTemp] = useState(false);
  const [goal, setGoal] = useState();
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    getGoal(user.sub).then((res) => {
      const temp = res.filter((m) => m.coin_id === Number(id))[0];
      setGoal(temp.goal);
      setMeasures(temp.measurements);
    });
    let result = 0;
    measures ? measures.map((measure) => {
      if (measure.length > 0) {
        measure.map((measurement) => {
          measurement.unit ? (result += measurement.unit) : (result);
        });
      }
    }) : 0;
    const percentage = (goal / result) * 100;
    setPercentage(percentage);
  }, []);

  const handleDelete = (id) => {
    getAccessTokenSilently().then((accesToken) => {
      deleteMeasurement(id, accesToken);
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const [aSum, setASum] = useState(0);
  const sum = (measures) => {
    let result = 0;
    measures.map((measure) => {
      if (measure.length > 0) {
        measure.map((measurement) => {
          measurement.unit ? (result += measurement.unit) : (result);
        });
      }
    });
    const percentage = (goal / result) * 100;
    setPercentage(percentage);
  };
  return (
    <>
      <div className="main-progress">
        <MainCircularProgress percentage={goal} />
      </div>
      <SetGoals coin={Number(id)} />
      <div className="measurement">
        {measures && measures.map((measures) => (
          <div key={measures.id} className="measurement-item">
            {measures.created_at}
            {measures.unit}
            {' '}
            {measures.id}
            <button type="button" onClick={() => handleDelete(measures.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Measurement;
