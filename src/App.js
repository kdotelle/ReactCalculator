import "./App.css";
import React, { Component } from "react";
import Display from "./components/DisplayComponent";
import Keypad from "./components/KeypadComponent";

//App is the parent component. this component will hold state and pass it to the display and keypad as props
//the results that are displayed in the Display component will need to update as input changes. that will be set in state
//set the features for the calculator
//set calculate function for when = is pressed
//store the operator in state so the app remembers which operation to complete when calculate() is run

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "0",
      input: "",
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "backspace") {
      this.delete();
    } else if (button === "clearAll") {
      this.clearDisplay();
    } else if (button === ".") {
      this.inputDot();
    } else if (button === "%") {
      this.inputPercent();
    } else {
      this.setState({
        input: this.state.input + button,
      });
    }
  };

  clearDisplay = () => {
    this.setState({
      result: "0",
      input: "",
    });
  };

  calculate = () => {
    if (this.state.input) {
      let answ = "";
      parseFloat(this.state.input);
      answ = eval(this.state.input);

      this.setState({
        result: answ,
        input: answ,
      });
    }
  };

  delete = () => {
    this.setState({
      input: this.state.input.slice(0, -1),
    });
  };

  inputDot = () => {
    if (!this.state.input.includes(".")) {
      this.setState({
        input: this.state.input + ".",
      });
    }
  };

  inputPercent = () => {
    const value = parseFloat(this.state.input);
    if (this.state.input) {
      this.setState({
        input: String(value / 100),
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calcBody">
          <header className="App-header">
            <p>Calculator</p>
          </header>
          <Display input={this.state.input} result={this.state.result} />
          <Keypad onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
