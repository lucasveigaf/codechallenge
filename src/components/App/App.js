import React, { Component } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import CodeChallenge from "../CodeChallenge/CodeChallenge";
import CodeOutput from "../CodeOutput/CodeOutput";
import ChallengeIntro from "../ChallengeIntro/ChallengeIntro";
import challenge from "../../mocks/challenge.json";

class App extends Component {
  state = {
    codeOutput: "",
    isWaitingResponse: false
  };

  onCodeTest = value => {
    this.setState({ isWaitingResponse: true, error: false });
  };

  onResponse = response => {
    this.setState({
      codeOutput: response,
      isWaitingResponse: false
    });
  };

  onError = error => {
    this.setState({
      isWaitingResponse: false,
      codeOutput: "Houve um erro. Por favor tente novamente.",
      error: true
    });
  };

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
