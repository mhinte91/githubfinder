import React from 'react';
import './CircleSelector.css';

const CircleSelector = props => {
  const { choices, choiceButton, handleClick } = props;
  return (
    <div className='CircleSelector'>
      {choices.map((n, i) => (
        <button
          className={choiceButton === i && 'selected'}
          onClick={() => handleClick(i)}
        >
          Select Circle {n + 1}
        </button>
      ))}
    </div>
  );
};

export default CircleSelector;
