import React, { useContext } from "react";
import ValueContext from "../Context/ValueContext";
const Button = (props) => {
  const { button } = props;
  const operator = [3, 4, 8, 12, 16];
  const { setNum, setNeg, setNull, operation, result, disabled } =
    useContext(ValueContext);
  const handleClick = () => {
    const op = [5, 6, 7, 9, 10, 11, 13, 14, 15, 17, 18];
    let operator = [3, 4, 8, 12, 16];
    if (button.id === 1) {
      setNull();
    } else if (button.id === 2) {
      setNeg();
    } else if (op.includes(button.id)) {
      setNum(button.title);
    } else if (operator.includes(button.id)) {
      operation(button.title);
    } else if (button.id === 20) {
      result();
    } else {
      console.log("Operation!");
    }
  };
  return (
    <div
      className={`${
        button.id === 17 ? "col-6" : "col-3"
      } p-2 border border-dark border-1  text-center ${
        button.id % 4 === 0 ? "bg-warning text-white" : "bg-light text-dark"
      }`}
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      <button
        className="display-5 bg-transparent border-0 p-2"
        disabled={disabled && operator.includes(button.id)}
      >
        {button.title}
      </button>
    </div>
  );
};

export default Button;
