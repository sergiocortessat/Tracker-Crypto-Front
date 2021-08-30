import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import RadialSeparators from './RadialSeparator';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = () => (
  <>
    <CircularProgressbarWithChildren
      value={10}
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
