import React, { useReducer } from "react";
import ChildContext from "./context";
import reducer from "./reducer";
//whole app wrapper so that i can change state and  add dispatch functions from here
function Stater(props) {
  const initialState = {
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  //functions for the state to update
  const INCREMENT = () => {
    dispatch({ type: "INCREMENT" });
  };
  const DECREMENT = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    //wrapper
    //states are in the values objects
    <ChildContext.Provider value={{ num: state.count, INCREMENT, DECREMENT }}>
      {props.children}
    </ChildContext.Provider>
  );
}

export default Stater;
