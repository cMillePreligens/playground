import React, { useState } from "react";

import "./App.css";
import "components/dist/index.cjs.css";

import { Button } from "components";

function App() {
  const [ display, setDidplay ] = useState(false);
  return (
    <div className="App">
      <h1>Button from custom library</h1>
      <Button
          onClick={() => {
            setDidplay(true);
          }}
        >
          Click me !
        </Button>
        <div className="display">{display && "It works ! 🎉"}</div>
    </div>
  );
}

export default App;
