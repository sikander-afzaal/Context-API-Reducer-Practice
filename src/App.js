import React, { useContext } from "react";
import "./App.css";
import Child from "./Child";
import ChildContext from "./context/context.js";
function App() {
  const { num } = useContext(ChildContext);
  return (
    <div className="app">
      <h1>{num}</h1>
      <Child />
    </div>
  );
}

export default App;
