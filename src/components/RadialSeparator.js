import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

function Separator({ turns, style }) {
  return (
    <div
      style={{
        position: 'absolute',
        height: '100%',
        transform: `rotate(${turns}turn)`,
      }}
    >
      <div style={style} />
    </div>
  );
}

function RadialSeparators({ count, style }) {
  const turns = 1 / count;
  return _.range(count).map((index) => (
    <Separator key={index} turns={index * turns} style={style} />
  ));
}

// Prop types
Separator.propTypes = {
  turns: PropTypes.number.isRequired,
  style: PropTypes.objectOf(PropTypes.any).isRequired,
};

RadialSeparators.propTypes = {
  count: PropTypes.number.isRequired,
  style: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RadialSeparators;
