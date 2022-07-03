// The useReducer hook is a special hook that allows you to use a reducer function to manage the state of your application. It takes two arguments: the reducer function and the initial state.
// The reducer function is a function that takes two arguments: the current state and an action. The action is an object that contains a type property that indicates the type of action that has occurred. The reducer function then returns the new state.    The initial state is the state that the application should start with.  The initial state is an object that contains a count property and a showText property. The count property is set to 0 and the showText property is set to true.
import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;
