import React from "react";

class Counter2 extends React.Component {
  constructor() {
    console.log("constructor()");
    super();
    this.state = {
      counter: 0,
      timer: 0,
      intervall: null
    };
  }



  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  };

  reset = () => {
    this.setState({
      counter: 0
    });
  };

  render() {
    console.log("render()");
    return (
      <div>
        <h1>COUNTER (Statful Component)</h1>
        <button className="decrement-btn" onClick={this.decrement}>
          -
        </button>
        <span>{this.state.counter}</span>
        <button className="increment-btn " onClick={this.increment}>
          +
        </button>
        <br />
        <button className="reset-btn" onClick={this.reset}>
          Reset
        </button>
    
      </div>
    );
  }
}

export default Counter2;
