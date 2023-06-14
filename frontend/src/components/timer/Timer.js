import './Timer.scss'
import { useState, useEffect } from 'react';
function Timer({ duration, onTimerEnd }) {
   const [timer, setTimer] = useState(duration);

   useEffect(() => {
      let interval = null;

      if (timer > 0) {
         interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
         }, 1000);
      } else {
         onTimerEnd();
      }

      return () => {
         clearInterval(interval);
      };

   }, [timer, onTimerEnd]);

   const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes} Min : ${seconds.toString().padStart(2, '0')} Sec`;
   };

   return (
      <span>{formatTime(timer)}</span>
   );
}

export default Timer;
