/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Footer.scss';
import AddBoxIcon from '@material-ui/icons/AddBox';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PieChartIcon from '@material-ui/icons/PieChart';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Footer = () => {
  const x = 0;
  return (
    <ul className="footer">
      <Link to="/add-measurement">
        <li className="add-measurement">
          <AddBoxIcon />
          <p>Add measurement</p>
        </li>
      </Link>
      <Link to="/">
        <li className="track-item">
          <TrendingUpIcon />
          <p>Track It</p>
        </li>
      </Link>
      <Link to="/">
        <li className="progress">
          <PieChartIcon />
          <p>Your Progress</p>
        </li>
      </Link>
      <Link to="/">
        <li className="more">
          <MoreHorizIcon />
          <p>More</p>
        </li>
      </Link>
    </ul>
  );
};

export default Footer;
