import React from "react";
import "./Timer.css";
import { convertToDisplay } from "../utility";

const Timer = ({ currentTime, isSessionTime }) => (
  <div className="timer-container">
    {isSessionTime ? (
      <span className="timer-title">세션 남은 시간</span>
    ) : (
      <span className="timer-title">남은 쉬는 시간</span>
    )}
    <span className="timer-clock">{convertToDisplay(currentTime)}</span>
  </div>
);

export default Timer;
