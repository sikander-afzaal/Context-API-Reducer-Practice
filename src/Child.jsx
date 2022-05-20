import React, { useContext } from "react";
import childContext from "./context/context.js";
function Child() {
  const { INCREMENT, DECREMENT } = useContext(childContext);
  return (
    <div className="child">
      <div className="container">
        <button
          onClick={() => {
            INCREMENT();
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            DECREMENT();
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Child;
