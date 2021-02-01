import { useEffect, useState } from "react";
import '../styling/Timer.css'

export default function Timer(props) {
  let [time, setTime] = useState(0);
  let { gameOver } = props


  useEffect(() => {
    function incrementTime(props) {
      setTimeout(() => {
        let newTime = time + 1;
        setTime(newTime);
      }, 1000)
    }
    if (gameOver) {
      return;
    } else {
      incrementTime();
    }
  }, [time, gameOver]);

  return (
    <div className="container">
      <div className="timer">
        <span role="img" aria-label="clock">
          ⏰
      </span>
        {time}
      </div>
    </div>
  );
}