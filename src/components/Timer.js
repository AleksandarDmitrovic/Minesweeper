import { useEffect, useState } from "react";

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
    <div style={{ color: "white", fontSize: 20, background: "maroon" }}>
      <span role="img" aria-label="clock" style={{ paddingRight: 10 }}>
        ⏰
      </span>
      {time}
    </div>
  );
}