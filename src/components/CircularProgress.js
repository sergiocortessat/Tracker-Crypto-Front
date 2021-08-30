import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import RadialSeparators from './RadialSeparator';

const CircularProgress = () => (
  <>
    <CircularProgressbarWithChildren
      value={80}
      text={`${80}%`}
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
    ;
  </>

);

export default CircularProgress;
