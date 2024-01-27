import React from 'react';
import './ActivityStep.css'; // Import the CSS file

const ActivityStep = ({ onActivityChange }) => {
  return (
    <div className="ActivityStepContainer"> {/* Add a container div with the specified class */}
      <p>What type of activity do you want?</p>
      {['Physical', 'Recreational', 'Effortless'].map((activityType) => (
        <button key={activityType} onClick={() => onActivityChange(activityType.toLowerCase())}>
          {activityType}
        </button>
      ))}
    </div>
  );
}

export default ActivityStep;
