import React, { Component } from "react";
import CodeEditor from "../CodeEditor/CodeEditor";
import "./CodeChallenge.css";
import Select from "react-select";

class CodeChallenge extends React.Component {
  state = {
    selectedOption: this.props.languages[0],
    editorValue: ""
  };

  handleOptionChange = selectedOption => {
    this.setState({ selectedOption });
  };

  handleEditorChange = editorValue => {
    this.setState({ editorValue });
  };

  render() {
    return (
      <div className="codeChallenge">
        <div className="row codeChallengeTopRow">
          <div className="col-6 col-sm-7 col-md-7 col-lg-9">
            <div className="codeChallengeButtons">
              <button className="btn btn-light">Testar</button>
              <button className="btn btn-dark ml-2">Enviar</button>
            </div>
          </div>
          <div className="col-6 col-sm-5 col-md-5 col-lg-3 codeEditorOptions">
            <Select
              value={this.state.selectedOption}
              onChange={this.handleOptionChange}
              options={this.props.languages}
              placeholder="Linguagem"
            />
          </div>
        </div>
        <hr className="boxDivisor" />
        <div className="challengeEditorWrapper">
          <CodeEditor
            id={this.props.id}
            onChange={this.handleEditorChange}
            value={this.state.editorValue}
            language={this.state.selectedOption.value}
          />
        </div>
      </div>
    );
  }
}

export default CodeChallenge;
