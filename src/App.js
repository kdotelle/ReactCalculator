import "./App.css";
import React, { Component } from "react";
import Display from "./components/DisplayComponent";
import Keypad from "./components/KeypadComponent";

//App is the parent component. this component will hold state and pass it to the display and keypad as props
//the results that are displayed in the Display component will need to update as input changes. that will be set in state
//set the features for the calculator
//set calculate function for when = is pressed

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "Results Show Here",
      input: " ",
    };
  }
  clearDisplay = () => {
    this.setState({
      result: "0",
      input: "",
    });
  };

  calculate = () => {
    this.setState({
      result: this.state.input,
    });
  };

  changeInput = (button) => {
    this.setState({
      input: this.state.input + button,
    });
  };

  delete = () => {
    this.setState({
      input: this.state.input.slice(0, -1),
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Calculator</p>
        </header>
        <Display input={this.state.input} result={this.state.result} />
        <Keypad
          clearDisplay={this.clearDisplay}
          changeInput={this.changeInput}
          calculate={this.calculate}
          delete={this.delete}
        />
      </div>
    );
  }
}

export default App;
