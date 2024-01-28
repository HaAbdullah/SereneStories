// ChallengePage.js
import React from 'react';
import './ChallengePage.css';

const ChallengePage = ({ feeling, time, activity }) => {
  const getChallenge = () => {
    if (time === '5 minutes' && feeling === 1 && activity === 'physical') {
      return "Take a deep breath and stretch for 5 minutes to release tension.";
    } else if (time === '5 minutes' && feeling === 1 && activity === 'recreational') {
      return "Watch a funny video online to lighten your mood.";
    } else if (time === '5 minutes' && feeling === 1 && activity === 'effortless') {
      return "Listen to an uplifting song to boost your spirits.";
    } else if (time === '5 minutes' && feeling === 2 && activity === 'physical') {
      return "Go for a short walk or do some light exercises.";
    } else if (time === '5 minutes' && feeling === 2 && activity === 'recreational') {
      return "Read a quick and entertaining article or blog post.";
    } else if (time === '5 minutes' && feeling === 2 && activity === 'effortless') {
      return "Take a moment to appreciate something positive around you.";
    } else if (time === '5 minutes' && feeling === 3 && activity === 'physical') {
      return "Do a quick workout routine, focusing on breathing and movement.";
    } else if (time === '5 minutes' && feeling === 3 && activity === 'recreational') {
      return "Spend a few minutes engaging in a hobby or creative activity.";
    } else if (time === '5 minutes' && feeling === 3 && activity === 'effortless') {
      return "Close your eyes and practice a short mindfulness exercise.";
    } else if (time === '5 minutes' && feeling === 4 && activity === 'physical') {
      return "Dance to your favorite upbeat music for an energy boost.";
    } else if (time === '5 minutes' && feeling === 4 && activity === 'recreational') {
      return "Write down three things you're grateful for.";
    } else if (time === '5 minutes' && feeling === 4 && activity === 'effortless') {
      return "Listen to a motivational podcast or audio clip.";
    } else if (time === '5 minutes' && feeling === 5 && activity === 'physical') {
      return "Try a quick high-intensity workout to get your heart rate up.";
    } else if (time === '5 minutes' && feeling === 5 && activity === 'recreational') {
      return "Engage in a favorite hobby or activity that brings you joy.";
    } else if (time === '5 minutes' && feeling === 5 && activity === 'effortless') {
      return "Reflect on a recent achievement or positive experience.";
    } else if (time === '30 minutes' && feeling === 1 && activity === 'physical') {
      return "Take a longer walk or do a gentle workout for 30 minutes.";
    } else if (time === '30 minutes' && feeling === 1 && activity === 'recreational') {
      return "Read a chapter from a book you enjoy for 30 minutes.";
    } else if (time === '30 minutes' && feeling === 1 && activity === 'effortless') {
      return "Watch a documentary on a topic of interest for 30 minutes.";
    } else if (time === '30 minutes' && feeling === 2 && activity === 'physical') {
      return "Engage in a moderate-intensity workout or jog for 30 minutes.";
    } else if (time === '30 minutes' && feeling === 2 && activity === 'recreational') {
      return "Play a longer game or activity that challenges your mind.";
    } else if (time === '30 minutes' && feeling === 2 && activity === 'effortless') {
      return "Explore a podcast series on a topic you find intriguing for 30 minutes.";
    } else if (time === '30 minutes' && feeling === 3 && activity === 'physical') {
      return "Practice yoga or do a series of stretching exercises for 30 minutes.";
    } else if (time === '30 minutes' && feeling === 3 && activity === 'recreational') {
      return "Take a nature walk or engage in a recreational activity for 30 minutes.";
    } else if (time === '30 minutes' && feeling === 3 && activity === 'effortless') {
      return "Meditate or practice mindfulness for 30 minutes.";
    } else if (time === '30 minutes' && feeling === 4 && activity === 'physical') {
      return "Join a fitness class or do a workout that brings joy for 30 minutes.";
    } else if (time === '30 minutes' && feeling === 4 && activity === 'recreational') {
      return "Engage in a creative project or art activity for 30 minutes.";
    } else if (time === '30 minutes' && feeling === 4 && activity === 'effortless') {
      return "Watch a feel-good movie or TV show for 30 minutes.";
    } else if (time === '30 minutes' && feeling === 5 && activity === 'physical') {
      return "Participate in a longer, enjoyable physical activity for 30 minutes.";
    } else if (time === '30 minutes' && feeling === 5 && activity === 'recreational') {
      return "Spend time on a favorite recreational activity for 30 minutes.";
    } else if (time === '30 minutes' && feeling === 5 && activity === 'effortless') {
      return "Reflect on positive aspects of your life for 30 minutes.";
    } else if (time === '1 hour' && feeling === 1 && activity === 'physical') {
      return "Embark on a longer physical activity or workout for 1 hour.";
    } else if (time === '1 hour' && feeling === 1 && activity === 'recreational') {
      return "Explore a longer recreational activity or hobby for 1 hour.";
    } else if (time === '1 hour' && feeling === 1 && activity === 'effortless') {
      return "Dive into a documentary or educational content for 1 hour.";
    } else if (time === '1 hour' && feeling === 2 && activity === 'physical') {
      return "Take part in a fitness class or engage in a longer workout for 1 hour.";
    } else if (time === '1 hour' && feeling === 2 && activity === 'recreational') {
      return "Spend time on a creative project or writing for 1 hour.";
    } else if (time === '1 hour' && feeling === 2 && activity === 'effortless') {
      return "Watch a movie or TV series that brings joy for 1 hour.";
    } else if (time === '1 hour' && feeling === 3 && activity === 'physical') {
      return "Join a longer yoga session or engage in stretching for 1 hour.";
    } else if (time === '1 hour' && feeling === 3 && activity === 'recreational') {
      return "Plan and enjoy a longer recreational activity or outing for 1 hour.";
    } else if (time === '1 hour' && feeling === 3 && activity === 'effortless') {
      return "Practice mindfulness or meditation for a calm hour.";
    } else if (time === '1 hour' && feeling === 4 && activity === 'physical') {
      return "Participate in a fun and upbeat fitness class for 1 hour.";
    } else if (time === '1 hour' && feeling === 4 && activity === 'recreational') {
      return "Engage in a creative pursuit or artistic activity for 1 hour.";
    } else if (time === '1 hour' && feeling === 4 && activity === 'effortless') {
      return "Watch an inspiring documentary or TED talk for 1 hour.";
    } else if (time === '1 hour' && feeling === 5 && activity === 'physical') {
      return "Spend 1 hour on a physical activity that brings joy and fulfillment.";
    } else if (time === '1 hour' && feeling === 5 && activity === 'recreational') {
      return "Indulge in a favorite recreational activity or hobby for 1 hour.";
    } else if (time === '1 hour' && feeling === 5 && activity === 'effortless') {
      return "Take an hour to reflect on achievements and express gratitude.";
    } else {
      return "No specific challenge for this combination.";
    }
  };

  return (
    <div className="ChallengePageContainer">
      <h2>Your Challenge:</h2>
      <p>{getChallenge()}</p>
    </div>
  );
}

export default ChallengePage;
