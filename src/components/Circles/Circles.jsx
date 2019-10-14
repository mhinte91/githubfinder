import React from 'react';
import './Circles.css';

const Circles = props => {
  const { choices, choiceCircle } = props;
  return (
    <div className='Circles'>
      {choices.map((n, i) => (
        <div className={choiceCircle === i && 'selected'}>{n + 1}</div>
      ))}
    </div>
  );
};

export default Circles;
