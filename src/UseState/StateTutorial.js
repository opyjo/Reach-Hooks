import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Opyjo");

  const onChange = (event) => {
    setInputValue(event.target.value);
  };
  console.log(inputValue);

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      <p>{inputValue}</p>
    </div>
  );
};

export default StateTutorial;
