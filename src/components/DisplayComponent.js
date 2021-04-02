import React, { Component } from "react";

//display the results
//will update as the input changes
//state is changing
//display isn't holding the state. it will receive the state from the input as props to display

class Display extends Component {
  render() {
    return (
      <div className="display">
        <p>{this.props.result}</p>
        <p>{this.props.input}</p>
      </div>
    );
  }
}

export default Display;
