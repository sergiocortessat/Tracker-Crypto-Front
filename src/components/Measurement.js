/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGoal } from '../API/API';

const Measurement = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { id } = useParams();
  const [measures, setMeasures] = useState();
  useEffect(() => {
    getGoal(user.sub).then((res) => {
      const temp = res.filter((m) => m.coin_id === Number(id))[0].measurements;
      setMeasures(temp);
    });
  }, []);
  return (
    <div className="measurement">
      {measures && measures.map((m) => (
        <div key={m.id} className="measurement-item">
          hello
        </div>
      ))}
    </div>
  );
};

export default Measurement;
