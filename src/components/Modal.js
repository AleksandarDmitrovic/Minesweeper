import { useEffect, useState } from "react";
import '../styling/Modal.css';

export default function Modal(props) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 1000);
  }, []);

  return (
    <div
      className="modal"
      style={{ opacity: render ? 1 : 0 }}
    >
      <div id="gameOverImage"></div>
      <div
        className="tryAgain"
        onClick={() => props.restartGame()}
      >
        Try Again
      </div>
    </div>
  )
}