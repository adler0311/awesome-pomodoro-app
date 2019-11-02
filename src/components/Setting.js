import React from "react";
import "./Setting.css";

const Setting = ({
  breakTime,
  sessionTime,
  isStart,
  decreaseTargetTime,
  increaseTargetTime
}) => (
  <div className="setting-container">
    <div className="item-container">
      <div className="item-text">쉬는 시간 설정</div>
      <div className="item-button-container">
        <button
          className={`${isStart ? `button-block` : `item-button`}`}
          onClick={() => decreaseTargetTime("breakTime")}
        >
          -
        </button>
        <div className="item-button-text">{breakTime}</div>
        <button
          className={`${isStart ? `button-block` : `item-button`}`}
          onClick={() => increaseTargetTime("breakTime")}
        >
          +
        </button>
      </div>
    </div>
    <div className="item-container">
      <div className="item-text">세션 시간 설정</div>
      <div className="item-button-container">
        <button
          className={`${isStart ? `button-block` : `item-button`}`}
          onClick={() => decreaseTargetTime("sessionTime")}
        >
          -
        </button>
        <div className="item-button-text">{sessionTime}</div>
        <button
          className={`${isStart ? `button-block` : `item-button`}`}
          onClick={() => increaseTargetTime("sessionTime")}
        >
          +
        </button>
      </div>
    </div>
  </div>
);

export default Setting;
