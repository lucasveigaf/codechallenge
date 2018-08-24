import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import Countdown from "react-countdown-now";
import CountdownFormat from "../CountdownFormat/CountdownFormat";
import "./ChallengeIntro.css";

/**
 * It renders the basic information regarding the current challenge, such as the title,
 * description and the time left for completion.
 * @param {Object} props
 * @param {Number} props.timeLimit - Time limit for the challenge's completion, in milliseconds.
 * @param {String} props.title - Title of the challenge.
 * @param {String} props.description - Description of the challenge, in markdown format.
 */
class ChallengeIntro extends Component {
  state = {
    countDown: Date.now() + this.props.timeLimit
  };
  render() {
    return (
      <div className="challengeIntro">
        <div className="centerText">
          <h1>{this.props.title}</h1>
        </div>
        <div className="centerText">
          <Countdown date={this.state.countDown} renderer={CountdownFormat} />
        </div>
        <div className="challengeDescription">
          <ReactMarkdown source={this.props.description} />
        </div>
      </div>
    );
  }
}

export default ChallengeIntro;
