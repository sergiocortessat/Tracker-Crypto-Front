/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';
import { deleteMeasurement, getGoal } from '../API/API';
import MainCircularProgress from './MainCirculaProgress';
import SetGoals from './setGoals';
import '../Style/ProgressBar.scss';

const Measurement = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { id } = useParams();
  const [measures, setMeasures] = useState([]);
  const [goal, setGoal] = useState(null);
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    getGoal(user.sub).then((res) => {
      const temp = res.filter((m) => m.coin_id === Number(id))[0];
      setGoal(temp.goal);
      setMeasures(temp.measurements);
    });
  }, []);

  useEffect(() => {
    const result = measures.reduce((acc, cur) => acc + cur.unit, 0);
    const percentage = ((result * 100) / goal);
    setPercentage(percentage);
  }, [measures, goal]);

  const handleDelete = (id) => {
    getAccessTokenSilently().then((accesToken) => {
      deleteMeasurement(id, accesToken);
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  // const [aSum, setASum] = useState(0);
  // const sum = (measures) => {
  //   let result = 0;
  //   measures.map((measure) => {
  //     if (measure.length > 0) {
  //       measure.map((measurement) => {
  //         measurement.unit ? (result += measurement.unit) : (result);
  //       });
  //     }
  //   });
  //   const percentage = (goal / result) * 100;
  //   setPercentage(percentage);
  // };
  // console.log(percentage);
  return (
    <>
      <div className="main-progress">
        <MainCircularProgress percentage={percentage} />
      </div>
      <SetGoals coin={Number(id)} setChange={setGoal} />
      <div className="measurement">
        {measures && measures.map((measures) => (
          <div key={measures.id} className="measurement-item">
            <p>
              Units:
              {measures.unit}
            </p>
            <Moment fromNow>{measures.created_at}</Moment>
            <button type="button" onClick={() => handleDelete(measures.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Measurement;
