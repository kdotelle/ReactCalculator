import React, { Component } from "react";

//each button needs an onClick property and function
//App will hold the state. this component has props
//CE will clear everything. reset state to " "

class Keypad extends Component {
  render() {
    return (
      <div className="button">
        <button name="(" onClick={(e) => this.props.changeInput(e.target.name)}>
          (
        </button>
        <button name="clearAll" onClick={this.props.clearDisplay}>
          CE
        </button>
        <button name=")" onClick={(e) => this.props.changeInput(e.target.name)}>
          )
        </button>
        <button
          name="backspace"
          onClick={(e) => this.props.delete(e.target.value)}
        >
          C
        </button>
        <br />
        <button name="1" onClick={(e) => this.props.changeInput(e.target.name)}>
          1
        </button>
        <button name="2" onClick={(e) => this.props.changeInput(e.target.name)}>
          2
        </button>
        <button name="3" onClick={(e) => this.props.changeInput(e.target.name)}>
          3
        </button>
        <button name="+" onClick={(e) => this.props.changeInput(e.target.name)}>
          +
        </button>
        <br />
        <button name="4" onClick={(e) => this.props.changeInput(e.target.name)}>
          4
        </button>
        <button name="5" onClick={(e) => this.props.changeInput(e.target.name)}>
          5
        </button>
        <button name="6" onClick={(e) => this.props.changeInput(e.target.name)}>
          6
        </button>
        <button name="-" onClick={(e) => this.props.changeInput(e.target.name)}>
          -
        </button>
        <br />
        <button name="7" onClick={(e) => this.props.changeInput(e.target.name)}>
          7
        </button>
        <button name="8" onClick={(e) => this.props.changeInput(e.target.name)}>
          8
        </button>
        <button name="9" onClick={(e) => this.props.changeInput(e.target.name)}>
          9
        </button>
        <button name="*" onClick={(e) => this.props.changeInput(e.target.name)}>
          x
        </button>
        <br />
        <button name="." onClick={(e) => this.props.changeInput(e.target.name)}>
          .
        </button>
        <button name="0" onClick={(e) => this.props.changeInput(e.target.name)}>
          0
        </button>
        <button name="=" onClick={this.props.calculate}>
          =
        </button>
        <button name="/" onClick={(e) => this.props.changeInput(e.target.name)}>
          /
        </button>
      </div>
    );
  }
}

export default Keypad;