import React, { useState } from 'react';
import './App.css';
import FeelingStep from './components/FeelingStep';
import TimeStep from './components/TimeStep';
import ActivityStep from './components/ActivityStep';
import ChallengePage from './components/ChallengePage';

const App = () => {
  const [step, setStep] = useState(1);
  const [feeling, setFeeling] = useState(1);
  const [time, setTime] = useState('');
  const [activity, setActivity] = useState('');

  const handleFeelingChange = (value) => {
    setFeeling(value);
    setStep(2);
  };

  const handleTimeChange = (value) => {
    setTime(value);
    setStep(3);
  };

  const handleActivityChange = (value) => {
    setActivity(value);
    setStep(4);
  };

  return (
    <div className="App">
    {step === 1 && <FeelingStep onFeelingChange={handleFeelingChange} />}
      {step === 2 && <TimeStep onNext={handleTimeChange} />}
      {step === 3 && <ActivityStep onActivityChange={handleActivityChange} />}
      {step === 4 && <ChallengePage feeling={feeling} time={time} activity={activity} />}
    </div>
  );
}

export default App;
