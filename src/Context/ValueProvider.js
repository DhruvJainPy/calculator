import React, { useState } from "react";
import ValueContext from "./ValueContext";
const ValueProvider = (props) => {
  const [state, setState] = useState(0);
  const [operator, setOperator] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [num1, setNum1] = useState(0);
  const setNum = (title) => {
    setState((state) => {
      if (state === 0) {
        return title;
      } else {
        return state + title;
      }
    });
  };
  const setNeg = () => {
    setState((state) => state * -1);
  };
  const setNull = () => {
    setState(0);
  };
  const operation = (title) => {
    setNum1(state);
    setOperator(title);
    setDisabled(true);
    setState(0);
  };
  const result = () => {
    let num2 = state;
    if (operator === "%") {
      let num3 = parseInt(num1) % parseInt(num2);
      setState(num3);
    } else if (operator === "/") {
      let num3 = parseFloat(num1) / parseFloat(num2);
      setState(num3);
    } else if (operator === "X") {
      let num3 = parseFloat(num1) * parseFloat(num2);
      setState(num3);
    } else if (operator === "+") {
      let num3 = parseFloat(num1) + parseFloat(num2);
      setState(num3);
    } else if (operator === "-") {
      let num3 = parseFloat(num1) - parseFloat(num2);
      setState(num3);
    }
    setOperator("");
    setDisabled(false);
  };
  return (
    <div>
      <ValueContext.Provider
        value={{ state, setNum, setNeg, setNull, operation, result, disabled }}
      >
        {props.children}
      </ValueContext.Provider>
    </div>
  );
};

export default ValueProvider;
