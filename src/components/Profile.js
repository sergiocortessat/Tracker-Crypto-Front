/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <p>
        User Name:
      </p>
      <p>
        {user.name}
      </p>
      <p> User Email: </p>
      <p>{user.email}</p>
      <img src={user.picture} alt="avatar" />
      <p>
        Account created at:
      </p>
      <p>
        {user.created_at}
      </p>
    </div>
  );
};

export default Profile;
