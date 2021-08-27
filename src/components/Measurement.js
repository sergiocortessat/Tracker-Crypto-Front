/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { deleteMeasurement, getGoal } from '../API/API';

const Measurement = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { id } = useParams();
  const [measures, setMeasures] = useState();
  const [temp, setTemp] = useState(false);
  useEffect(() => {
    getGoal(user.sub).then((res) => {
      const temp = res.filter((m) => m.coin_id === Number(id))[0].measurements;
      setMeasures(temp);
    });
  }, []);

  const handleDelete = (id) => {
    getAccessTokenSilently().then((accesToken) => {
      deleteMeasurement(id, accesToken);
    });
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
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
  );
};

export default Measurement;
