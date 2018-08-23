import React from "react";
import CodeEditor from "../CodeEditor/CodeEditor";
import "./CodeChallenge.css";
import Select from "react-select";

class CodeChallenge extends React.Component {
  state = {
    selectedOption: this.props.languages[0],
    editorValue: "",
    codeSubmitted: false
  };

  componentDidMount() {
    const { timeLimit } = this.props;
    if (timeLimit) {
      setTimeout(() => {
        this.submitCode();
      }, timeLimit);
    }
  }

  handleOptionChange = selectedOption => {
    this.setState({ selectedOption });
  };

  handleEditorChange = editorValue => {
    this.setState({ editorValue });
  };

  testCode = async () => {
    try {
      if (this.props.onCodeTest) {
        this.props.onCodeTest(this.state.editorValue);
      }
      const rawResponse = await fetch(
        "https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/v1/execute",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            script: this.state.editorValue,
            language: this.state.selectedOption.value,
            versionIndex: this.state.selectedOption.jdoodleVersion,
            clientId: "dec68d0eaa2878f8e4b84c132d74a043",
            clientSecret:
              "b90b56835e0a22b9fd20dd46103260d345abe5971ef6c76d514a0ea37e945299"
          })
        }
      );
      let content = await rawResponse.json();
      if (content.error) {
        throw new Error(content.error);
      }
      if (this.props.onResponse) {
        this.props.onResponse(content.output);
      }
    } catch (e) {
      if (this.props.onError) {
        this.props.onError(e);
      }
    }
  };

  submitCode = () => {
    this.setState({ codeSubmitted: true });
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.editorValue);
    }
  };

  render() {
    return (
      <div className="codeChallenge">
        <div className="row codeChallengeTopRow">
          <div className="col-6 col-sm-7 col-md-7 col-lg-9">
            <div className="codeChallengeButtons">
              <button
                className="btn btn-light"
                disabled={this.state.codeSubmitted}
                onClick={this.testCode}
              >
                Testar
              </button>
              <button
                className="btn btn-dark ml-2"
                disabled={this.state.codeSubmitted}
                onClick={this.submitCode}
              >
                Enviar
              </button>
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
