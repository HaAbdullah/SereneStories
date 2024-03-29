import React from 'react';
import './FeelingStep.css'; // 
const FeelingStep = ({ onFeelingChange }) => {
  const feelingOptions = [
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><g fill="currentColor"><path d="M12 17a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0M11.007 6.417a.5.5 0 0 1 .986.165L11.5 6.5l.493.082v.007l-.003.01a1.872 1.872 0 0 1-.033.151a4.49 4.49 0 0 1-.744 1.55C10.563 9.165 9.42 10 7.5 10a.5.5 0 0 1 0-1c1.58 0 2.437-.665 2.912-1.3a3.49 3.49 0 0 0 .575-1.192a1.79 1.79 0 0 0 .017-.075zm9.986 0l.003.016l.017.075a3.49 3.49 0 0 0 .574 1.192C22.063 8.335 22.92 9 24.5 9a.5.5 0 0 1 0 1c-1.92 0-3.063-.835-3.712-1.7a4.49 4.49 0 0 1-.745-1.55a3.015 3.015 0 0 1-.033-.15l-.002-.011v-.004l-.001-.002l.493-.083l-.493.082a.5.5 0 0 1 .986-.165m-8.099 19.03C13.066 25.104 13.995 24 16 24s2.934 1.104 3.106 1.447a1 1 0 1 0 1.788-.894C20.4 23.563 18.795 22 16 22s-4.4 1.563-4.894 2.553a1 1 0 1 0 1.788.894"/><path d="M15.999 1C11.095 1 7.313 2.654 4.763 5.423C2.226 8.178 1 11.938 1 15.999c0 4.061 1.226 7.82 3.763 10.576c2.55 2.769 6.332 4.423 11.236 4.423c4.904 0 8.686-1.654 11.235-4.423c2.537-2.755 3.764-6.515 3.764-10.576c0-4.061-1.227-7.821-3.764-10.576C24.684 2.654 20.903 1 16 1M3 15.999c0-3.67 1.106-6.91 3.235-9.221C8.35 4.48 11.568 3 15.999 3c4.43 0 7.648 1.48 9.764 3.778c2.129 2.311 3.235 5.55 3.235 9.22c0 3.671-1.106 6.91-3.235 9.222c-2.116 2.298-5.333 3.778-9.764 3.778c-4.43 0-7.648-1.48-9.764-3.778C4.105 22.91 3 19.67 3 16"/></g></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 12a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8m2 0a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-6.5-4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5M10 9.5c0 .8-.7 1.5-1.5 1.5S7 10.3 7 9.5S7.7 8 8.5 8s1.5.7 1.5 1.5m2 4.5c1.75 0 3.29.72 4.19 1.81l-1.42 1.42C14.32 16.5 13.25 16 12 16s-2.32.5-2.77 1.23l-1.42-1.42C8.71 14.72 10.25 14 12 14"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/><path fill="currentColor" d="M11.5 11a2.5 2.5 0 1 0 2.5 2.5a2.5 2.5 0 0 0-2.5-2.5m9 0a2.5 2.5 0 1 0 2.5 2.5a2.5 2.5 0 0 0-2.5-2.5M10 20h12v2H10z"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-4.37 4.384a2.749 2.749 0 0 0 3.751-1.009a.75.75 0 0 0-1.299-.75a1.25 1.25 0 0 1-2.163.003a.75.75 0 0 0-1.297.753c.242.417.59.763 1.007 1.003Z" clip-rule="evenodd"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 9.05v-.1m8 .1v-.1"/><path stroke-linejoin="round" d="M12 18a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4"/></g></svg>
  ];

  return (
    <>
    <div className='feeling'>
      <p>How are you feeling?</p>
      <div className="button-container">
      {feelingOptions.map((svg, index) => (
        <button key={index} onClick={() => onFeelingChange(index + 1)}>
          {svg}
        </button>
      ))}
      </div>
      </div>
    </>
  );
}

export default FeelingStep;
