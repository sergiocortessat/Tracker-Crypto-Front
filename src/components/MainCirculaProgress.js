/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import RadialSeparators from './RadialSeparator';
import 'react-circular-progressbar/dist/styles.css';

const MainCircularProgress = ({ percentage }) => (
  <>
    <CircularProgressbarWithChildren
      value={percentage && percentage}
      text={(percentage && percentage !== Infinity) ? `${Math.round(percentage, 2)}%` : 'Loading'}
      strokeWidth={10}
      styles={buildStyles({
        strokeLinecap: 'butt',
      })}
    >
      <RadialSeparators
        count={12}
        style={{
          background: '#fff',
          width: '2px',
          // This needs to be equal to props.strokeWidth
          height: `${20}%`,
        }}
      />
    </CircularProgressbarWithChildren>
  </>

);
export default MainCircularProgress;
