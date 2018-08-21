import React, { Component } from "react";
import "./App.css";
import CodeEditor from "../CodeEditor/CodeEditor";
import challenge from "../../mocks/challenge.json";

class App extends Component {
  render() {
    return (
      <div className="container-fluid bg-danger">
        <div className="row fill bg-success">
          <div className="col-12 col-md-3 challengeDescriptionWrapper">
            <p>{challenge.description}</p>
          </div>
          <div className="col-12 col-md-9 row m-0 p-0 bg-warning challengeMainWrapper">
            <div className="col-sm-12 p-0 challengeEditorWrapper">
              <p />
            </div>
            <div className="col-sm-12 row p-0 m-0 challengeButtonsWrapper">
              <button className="btn btn-light m-2">Testar</button>
              <button className="btn btn-dark m-2">Enviar</button>
            </div>
            <div className="col-sm-12 challengeOutputWrapper bg-dark">
              <p>></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
