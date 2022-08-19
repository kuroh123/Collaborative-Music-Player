import React from "react";
import { render } from "react-dom";

const App = (props) => {
  return <h1>Testing React</h1>;
};

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);
