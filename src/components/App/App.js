import React, { Component } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import CodeChallenge from "../CodeChallenge/CodeChallenge";
import CodeOutput from "../CodeOutput/CodeOutput";
import ChallengeIntro from "../ChallengeIntro/ChallengeIntro";
import challenge from "../../mocks/challenge.json";

/**
 * Starting point of the application. It renders the 4 main components of the app:
 * Navbar, ChallengeIntro, CodeChallenge and CodeOutput.
 * It is responsible for the communication between these components and for the
 * submission of the user's code.
 */
class App extends Component {
  state = {
    codeOutput: "",
    isWaitingResponse: false
  };

  /**
   * Callback function for when the code is sent for testing.
   * @param {String} value - the user's code.
   */
  onCodeTest = value => {
    this.setState({ isWaitingResponse: true, error: false });
  };

  /**
   * Callback function for when the compiler API sends a response back.
   * @param {String} response - the output of the user's code.
   */
  onResponse = response => {
    this.setState({
      codeOutput: response,
      isWaitingResponse: false
    });
  };

  /**
   * Callback function for when the compiler API isn't reachable or sends back an error.
   * @param {Object} error - the error object.
   */
  onError = error => {
    this.setState({
      isWaitingResponse: false,
      codeOutput: "Houve um erro. Por favor tente novamente.",
      error: true
    });
  };

  /**
   * Callback function for when the user submits his code.
   * @param {string} value - the user's code.
   */
  onCodeSubmit = value => {
    // aqui enviariamos o código final do usuário ao back end.
    alert("Teste enviado!");
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container-fluid">
          <div className="row fill">
            <div className="col-sm-4 col-md-4 col-lg-3 m-0 p-0 p-2 challengeDescriptionWrapper">
              <ChallengeIntro
                title={challenge.title}
                timeLimit={challenge.timeLimit}
                description={challenge.description}
              />
            </div>
            <div className="col-sm-8 col-md-8 col-lg-9 row m-0 pl-6 challengeMainWrapper">
              <div className="col-sm-12 p-0">
                <CodeChallenge
                  id="codeEditor"
                  languages={challenge.languages}
                  onCodeTest={this.onCodeTest}
                  onResponse={this.onResponse}
                  onError={this.onError}
                  onSubmit={this.onCodeSubmit}
                  timeLimit={challenge.timeLimit}
                />
              </div>
              <div className="col-sm-12 challengeOutputWrapper">
                <CodeOutput
                  isLoading={this.state.isWaitingResponse}
                  value={this.state.codeOutput}
                  startingText="> "
                  spinnerHeight="100px"
                  spinnerWidth="100px"
                  spinnerColor="#A0A0A0"
                  spinnerDelay={0}
                  textColor={this.state.error ? "#af2446" : "#6b757d"}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
