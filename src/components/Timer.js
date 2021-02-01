import { useEffect, useState } from "react";
import '../styling/Timer.css'

export default function Timer() {
  let [time, setTime] = useState(0);

  useEffect(() => {
    function incrementTime(props) {
      setTimeout(() => {
        let newTime = time + 1;
        setTime(newTime);
      }, 1000)
    }
    incrementTime();
  }, [time]);

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