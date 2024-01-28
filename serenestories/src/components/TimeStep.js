import React from 'react';
import './TimeStep.css'; // Import the CSS file

const TimeStep = ({ onNext }) => {
  const timeValues = ['15 minutes', '30 minutes', '1 hour'];

  return (
    <div className="TimeStepContainer"> {/* Add a container div with the specified class */}
      <p>Your brighten up time?</p>
      {timeValues.map((value) => (
        <button key={value} onClick={() => onNext(value)}>
          {value}
        </button>
      ))}
    </div>
  );
}

export default TimeStep;
