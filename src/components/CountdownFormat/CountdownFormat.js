import React from "react";

const CountdownFormat = ({ hours, minutes, seconds, completed }) => {
  return (
    <h2>
      {hours}:{minutes}:{seconds}
    </h2>
  );
};

export default CountdownFormat;
