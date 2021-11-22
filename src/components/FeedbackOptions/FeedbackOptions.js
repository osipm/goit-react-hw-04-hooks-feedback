import React from 'react';
import s from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(elem => (
        <button
          key={elem}
          type="button"
          className={s.btns}
          onClick={onLeaveFeedback}
          name={elem}
        >
          {elem}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
