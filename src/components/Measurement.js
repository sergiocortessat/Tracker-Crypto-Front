/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
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
  const [today, setToday] = useState([]);
  const [yesterday, setYesterday] = useState([]);
  const [lastWeek, setLastWeek] = useState([]);
  const now = moment(new Date());
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

  const fetchData = async () => {
    try {
      setToday(
        measures.filter(
          (item) => Number(
            moment
              .duration(now.diff(moment(item.created_at).format('L')))
              .asDays(),
          ) < 1,
        ),
      );
      setYesterday(
        measures.filter(
          (item) => Math.floor(Number(
            moment
              .duration(now.diff(moment(item.created_at).format('L')))
              .asDays(),
          )) >= 1
              && Math.floor(Number(
                moment
                  .duration(now.diff(moment(item.created_at).format('L')))
                  .asDays(),
              )) < 2,
        ),
      );
      setLastWeek(
        measures.filter(
          (item) => Math.floor(Number(
            moment.duration(now.diff(item.created_at)).asDays(),
          )) > 2,
        ),
      );
    } catch (e) {
      console.log('error');
    }
  };

  useEffect(() => {
    fetchData();
  }, [measures]);

  return (
    <>
      <div className="main-progress">
        <MainCircularProgress percentage={percentage} />
      </div>
      <SetGoals coin={Number(id)} setChange={setGoal} />
      <div className="measurement">
        {today.length > 0 && (<h2>Today</h2>)}
        {today && today.map((measures) => (
          <div key={measures.id} className="measurement-item">
            <p>
              Units:
              {measures.unit}
            </p>
            <Moment fromNow>{measures.created_at}</Moment>
            <button type="button" onClick={() => handleDelete(measures.id)}>Delete</button>
          </div>
        ))}
        {yesterday.length > 0 && (<h2>Yesterday</h2>)}
        {yesterday && yesterday.map((measures) => (
          <div key={measures.id} className="measurement-item">
            <p>
              Units:
              {measures.unit}
            </p>
            <Moment fromNow>{measures.created_at}</Moment>
            <button type="button" onClick={() => handleDelete(measures.id)}>Delete</button>
          </div>
        ))}
        {lastWeek.length > 0 && (<h2>Last Week</h2>)}
        {lastWeek && lastWeek.map((measures) => (
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
