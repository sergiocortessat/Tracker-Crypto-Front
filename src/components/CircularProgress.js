/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import RadialSeparators from './RadialSeparator';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ sum }) => (
  <>
    <CircularProgressbarWithChildren
      value={90}
      text={`${90}%`}
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

export default CircularProgress;
