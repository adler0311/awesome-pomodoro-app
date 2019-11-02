import React, { Component } from "react";
import "./App.css";
import Setting from "./Setting";
import Timer from "./Timer";
import Controller from "./Controller";

const DEFAULT_BREAK_TIME = 5;
const DEFAULT_SESSION_TIME = 25;

class App extends Component {
  state = {
    breakTime: DEFAULT_BREAK_TIME,
    sessionTime: DEFAULT_SESSION_TIME,
    isStart: false,
    currentTime: DEFAULT_SESSION_TIME * 60,
    timeInterval: null,
    isSessionTime: true,
    audio: new Audio("https://goo.gl/65cBl1")
  };

  decreaseSec = targetTimeSec => {
    return targetTimeSec - 1;
  };

  incraseSec = targetTimeSec => {
    return targetTimeSec + 1;
  };

  setTimeSettingState = (targetTime, func) => {
    this.setState({
      [targetTime]: func(this.state[targetTime]),
      currentTime:
        targetTime === "sessionTime"
          ? func(this.state[targetTime]) * 60
          : this.state.currentTime
    });
  };

  decreaseTargetTime = targetTime => {
    const { isStart } = this.state;

    if (this.state[targetTime] - 1 <= 0 || isStart) return;

    this.setTimeSettingState(targetTime, this.decreaseSec);
  };

  increaseTargetTime = targetTime => {
    const { isStart } = this.state;

    if (this.state[targetTime] + 1 >= 60 || isStart) return;

    this.setTimeSettingState(targetTime, this.incraseSec);
  };

  decreaseCurrentTime = () => {
    const { currentTime } = this.state;
    if (currentTime - 1 <= 0) {
      this.done();
      return;
    }
    this.setState({ currentTime: currentTime - 1 });
  };

  onReset = () => {
    this.state.audio.pause();

    this.setState({
      breakTime: DEFAULT_BREAK_TIME,
      sessionTime: DEFAULT_SESSION_TIME,
      currentTime: DEFAULT_SESSION_TIME * 60,
      timeInterval: clearInterval(this.state.timeInterval),
      isStart: false
    });
  };

  onStartStop = () => {
    const { isStart, audio } = this.state;

    if (!isStart) {
      this.setState({
        isStart: !isStart,
        timeInterval: setInterval(this.decreaseCurrentTime, 1000)
      });

      audio.pause();
      return;
    }

    clearInterval(this.state.timeInterval);
    this.setState({ isStart: !isStart, timeInterval: null });
  };

  done = () => {
    const { sessionTime, isSessionTime, breakTime, audio } = this.state;
    const nextCurrentTime = isSessionTime ? breakTime * 60 : sessionTime * 60;

    audio.play();

    this.setState({
      isSessionTime: !isSessionTime,
      currentTime: nextCurrentTime
    });
  };

  render() {
    const {
      breakTime,
      sessionTime,
      currentTime,
      isStart,
      isSessionTime
    } = this.state;

    return (
      <div className="pomodoro-clock">
        <div className="pomodoro-clock-header">
          <h1>뽀모도로 시계</h1>
        </div>
        <Setting
          breakTime={breakTime}
          sessionTime={sessionTime}
          decreaseTargetTime={this.decreaseTargetTime}
          increaseTargetTime={this.increaseTargetTime}
          isStart={isStart}
        />
        <Timer currentTime={currentTime} isSessionTime={isSessionTime} />
        <Controller
          onStartStop={this.onStartStop}
          isStart={isStart}
          onReset={this.onReset}
        />
      </div>
    );
  }
}

export default App;
