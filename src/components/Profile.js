/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import '../Style/Profile.scss';

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
  // <div>
  //   <p>
  //     User Name:
  //   </p>
  //   <p>
  //     {user.name}
  //   </p>
  //   <p> User Email: </p>
  //   <p>{user.email}</p>
  //   <img src={user.picture} alt="avatar" />
  //   <p>
  //     Account created at:
  //   </p>
  //   <p>
  //     {user.created_at}
  //   </p>
  // </div>
    <div className="profile">
      <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img
                alt="profile"
                src={user.picture ? user.picture : 'https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png'}
              />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>{user.name}</h3>
          <div>
            {user.email}
          </div>
          <div className="created-at">
            This accont was created on:
            {' '}
            {user.created_at}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
