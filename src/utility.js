export const convertToDisplay = currentTimeInSec => {
  let minute = Math.floor(currentTimeInSec / 60);
  minute = minute < 10 ? `0${minute}` : minute;

  let sec = currentTimeInSec % 60;
  sec = sec < 10 ? `0${sec}` : sec;

  return `${minute}:${sec}`;
};
