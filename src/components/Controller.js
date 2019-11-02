import React from "react";
import "./Controller.css";

const Controller = ({ onStartStop, isStart, onReset }) => (
  <div className="controller-container">
    {isStart ? (
      <div className="control-button" onClick={onStartStop}>
        중지
      </div>
    ) : (
      <div className="control-button" onClick={onStartStop}>
        시작
      </div>
    )}
    <div className="control-button" onClick={onReset}>
      초기화
    </div>
  </div>
);

export default Controller;
