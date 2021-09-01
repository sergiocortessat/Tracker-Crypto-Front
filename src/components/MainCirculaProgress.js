import React from 'react';
import PropTypes from 'prop-types';
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

MainCircularProgress.defaultProps = {
  percentage: 0,
};
// Prop types
MainCircularProgress.propTypes = {
  percentage: PropTypes.number,
};

export default MainCircularProgress;
