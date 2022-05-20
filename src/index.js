import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import reportWebvitals from "./reportWebVitals";
import Stater from "./context/state.js";
ReactDOM.render(
  <Stater>
    <App />
  </Stater>,
  document.getElementById("root")
);
reportWebvitals();
