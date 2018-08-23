import React from "react";
import ReactLoading from "react-loading";
import "./CodeOutput.css";

const CodeOutput = ({
  startingText,
  value,
  isLoading,
  textColor,
  spinnerHeight,
  spinnerWidth,
  spinnerColor,
  spinnerDelay
}) => {
  return isLoading ? (
    <ReactLoading
      delay={spinnerDelay}
      type={"spinningBubbles"}
      color={spinnerColor}
      height={spinnerHeight}
      width={spinnerWidth}
      className={"loadingSpinner"}
    />
  ) : (
    <p style={{ color: textColor }}>{startingText + value}</p>
  );
};

export default CodeOutput;
