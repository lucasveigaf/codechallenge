import React from "react";
import CodeEditor from "../CodeEditor/CodeEditor";
import "./CodeChallenge.css";
import Select from "react-select";

/**
 * It renders the code editor for the user, along with the buttons for testing and
 * submitting the code.
 * @param {Object} props
 * @param {array} props.languages - The languages available for the challenge.
 * @param {Number} props.timelimit - Time limit for the challenge's completion, in milliseconds.
 * @param {String} props.id - Id to be used for the CodeEditor component.
 * @param {Function} props.onCodeTest - Callback function for when the user sends his code for testing.
 * It sends back the current editor's content.
 * @param {Function} props.onResponse - Callback function for when the compiling API sends back a response.
 * It sends back the API response.
 * @param {Function} props.onError - Callback function for when the compiling API sends back an error or
 * is unreachable. It sends back the error object.
 * @param {Function} props.onSubmit - Callback function for when the user submits his code. It sends back
 * the current editor's content.
 */
class CodeChallenge extends React.Component {
  state = {
    // the first language is initially selected on the dropdown for the challenge.
    selectedOption: this.props.languages[0],
    editorValue: "",
    codeSubmitted: false
  };

  /**
   * When the component mounts, it starts a timer with the challenge time limit, and upon reaching it,
   * the editor's current content is automatically submitted.
   */
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

  /**
   * It sends the current editor's content to the compiler API for testing.
   * It then reads the response and deal with the necessary callback function.
   * If the API responds with an error property or is unreachable, and error is thrown.
   * the editor's current content is automatically submitted.
   * Please note that this ideally shouldn't be hardcoded here.
   */
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
          <div className="col-12 col-sm-7 col-md-7 col-lg-9">
            <div className="codeChallengeButtons">
              <button
                className="btn btn-light mr-2"
                disabled={this.state.codeSubmitted}
                onClick={this.testCode}
              >
                Testar
              </button>
              <button
                className="btn btn-dark"
                disabled={this.state.codeSubmitted}
                onClick={this.submitCode}
              >
                Enviar
              </button>
            </div>
          </div>
          <div className="col-12 col-sm-5 col-md-5 col-lg-3 codeEditorOptions">
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
