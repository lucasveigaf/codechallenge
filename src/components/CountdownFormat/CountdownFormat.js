import React from "react";

/**
 * The renderer for the Countdown component. It defines how the countdown should look like.
 * @param {Object} props
 * @param {Number} props.hours - Hours left.
 * @param {Number} props.minutes - Minutes left.
 * @param {Number} props.seconds - Seconds left.
 * @param {Boolean} props.completed - Indicated if the Countdown is finished.
 */
const CountdownFormat = ({ hours, minutes, seconds, completed }) => {
  return (
    <h2>
      {hours}:{minutes}:{seconds}
    </h2>
  );
};

export default CountdownFormat;
