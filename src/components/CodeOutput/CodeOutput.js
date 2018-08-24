import React from "react";
import ReactLoading from "react-loading";
import "./CodeOutput.css";

/**
 * A simple box looking element that renders text and can show a loading spinner.
 * @param {Object} props
 * @param {String} props.startingText - If set, it concatenates startingText with the value prop.
 * @param {String} props.value - The main text to be shown.
 * @param {Boolean} props.isLoading - If true, the component shows the loading spinner instead of the text.
 * @param {String} props.spinnerHeight - The loading spinner height for CSS. Ex.: '100px'
 * @param {String} props.spinnerWidth - The loading spinner width for CSS. Ex.: '100px'
 * @param {String} props.spinnerColor - The loading spinner color for CSS. Ex.: '#A0A0A0'
 * @param {String} props.spinnerDelay - The loading spinner delay to be shown.
 */
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
