/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const x = 0;
  return (
    <div>
      <div className="add-measurement">
        <Link to="/add-measurement">Add Measurement</Link>
      </div>
      <div className="track-item">
        track item
      </div>
      <div className="progress">
        PRogress
      </div>
      <div className="more">
        More
      </div>
    </div>
  );
};

export default Footer;
