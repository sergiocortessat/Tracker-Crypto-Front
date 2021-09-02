import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
import { deleteMeasurement, getGoal } from '../API/API';
import MainCircularProgress from './MainCirculaProgress';
import SetGoals from './setGoals';
import '../Style/ProgressBar.scss';
import '../Style/Measurement.scss';
import customAlert from './PopUpAlert';

const Measurement = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { id } = useParams();
  const [measures, setMeasures] = useState([]);
  const [goal, setGoal] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const [today, setToday] = useState([]);
  const [yesterday, setYesterday] = useState([]);
  const [lastWeek, setLastWeek] = useState([]);
  const now = moment(new Date());
  const coinName = ['Bitcoin', 'Ethereum', 'Cardano', 'Uniswap', 'XRP', 'Polkadot'];
  const [count, setCount] = useState(0);

  useEffect(() => {
    getGoal(user.sub).then((res) => {
      const temp = res.filter((m) => m.coin_id === Number(id))[0];
      setGoal(temp.goal);
      setMeasures(temp.measurements);
    });
  }, [count]);

  useEffect(() => {
    const result = measures.reduce((acc, cur) => acc + cur.unit, 0);
    const percentage = ((result * 100) / goal);
    setPercentage(percentage);
  }, [measures, goal]);

  const handleDelete = (id) => {
    customAlert('Deleted');
    getAccessTokenSilently().then((accesToken) => {
      deleteMeasurement(id, accesToken);
    });
    setTimeout(() => {
      setCount(count + 1);
    }, 500);
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
      return e;
    }
    return null;
  };

  useEffect(() => {
    fetchData();
  }, [measures]);

  const individualPercentage = (unit) => {
    const percentage = ((unit * 100) / goal);
    return percentage;
  };

  return (
    <div className="crypto-container">
      <div className="crypto-name">
        {coinName[Number(id) - 1]}
      </div>

      <div className="progress-icon-measurement">
        <MainCircularProgress percentage={percentage} />
      </div>

      <SetGoals coin={Number(id)} setChange={setGoal} />

      <div className="measurement">
        {today.length > 0 && (<h2>Today</h2>)}
        <div className="measurement-list">
          {today && today.map((measures) => (
            <div key={measures.id} className="measurement-item">
              <div className="measurement-progress">
                <MainCircularProgress percentage={individualPercentage(measures.unit)} />
              </div>
              <div className="item">
                <p>
                  Units:
                  {' '}
                  {measures.unit}
                </p>
                <Moment fromNow>{measures.created_at}</Moment>
                <button type="button" onClick={() => handleDelete(measures.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        {yesterday.length > 0 && (<h2>Yesterday</h2>)}
        <div className="measurement-list">
          {yesterday && yesterday.map((measures) => (
            <div key={measures.id} className="measurement-item">
              <div className="measurement-progress">
                <MainCircularProgress percentage={individualPercentage(measures.unit)} />
              </div>
              <div className="item">
                <p>
                  Units:
                  {' '}
                  {measures.unit}
                </p>
                <Moment fromNow>{measures.created_at}</Moment>
                <button type="button" onClick={() => handleDelete(measures.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        {lastWeek.length > 0 && (<h2>Last Week</h2>)}
        <div className="measurement-list">
          {lastWeek && lastWeek.map((measures) => (
            <div key={measures.id} className="measurement-item">
              <div className="measurement-progress">
                <MainCircularProgress percentage={individualPercentage(measures.unit)} />
              </div>
              <div className="item">
                <p>
                  Units:
                  {' '}
                  {measures.unit}
                </p>
                <Moment fromNow>{measures.created_at}</Moment>
                <button type="button" onClick={() => handleDelete(measures.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Measurement;
