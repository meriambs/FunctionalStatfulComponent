import React, { useState } from "react";

import Counter2 from "./Counter2";
import Counter from "./Counter";
import "./Style.css";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {/* <Counter2 /> */}
      <hr />
      <button className="visibility-btn" onClick={() => setShow(!show)}>
        {show ? "Hide Counter" : "Show Counter"}
      </button>
      {show && <Counter2 /> }
      <div className="FunCounter">
      <Counter/>
      </div>
    </div>
  );
}

