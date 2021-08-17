import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      {/* {console.log("is Visible is value", isVisible)} */}

      <h1>COUNTER (Functional Component)</h1>
      <button className="decrement-btn" onClick={decrement}>
        -
      </button>
      <span>{counter}</span>
      <button className="increment-btn " onClick={increment}>
        +
      </button>
      <br />
      <button className="reset-btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
};
export default Counter;
