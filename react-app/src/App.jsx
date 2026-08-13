import React from "react";
import Counter from "./CounterClass";
import CounterButtonFunc from "./CounterButtonFunc";
import ButtonClickHandler from "./ButtonClickHandler";
import ConditionalRender from "./ConditionalRender";
import StringLiterals from "./StringLiterals";

function App() {
  return (
    <div>

      <hr />

      <Counter />
      <hr />

      <h2>Counter(Functional Component)</h2>

      <CounterButtonFunc />

      <hr />

      <ButtonClickHandler />

      <hr />

      <ConditionalRender />

      <hr />

      <StringLiterals />
    </div>
  );
}

export default App;