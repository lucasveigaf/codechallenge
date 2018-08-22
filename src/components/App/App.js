import React, { Component } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import CodeChallenge from "../CodeChallenge/CodeChallenge";
import challenge from "../../mocks/challenge.json";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container-fluid">
          <div className="row fill">
            <div className="col-sm-4 col-md-4 col-lg-3 row m-0 p-0 challengeDescriptionWrapper">
              <p>{challenge.description}</p>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-9 row m-0 p-0 challengeMainWrapper">
              <div className="col-sm-12 p-0">
                <CodeChallenge
                  id="codeEditor"
                  onChange={value => console.log(value)}
                  languages={challenge.languages}
                />
              </div>
              <div className="col-sm-12 challengeOutputWrapper">
                <p>></p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
