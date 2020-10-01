import React from "react";
import "./input.css";

const Input = (props) => {
  let inputField = null;

  const inputClassName = ["inputField"];

  if (props.inValid && props.touched) {
    inputClassName.push("valid");
  }

  switch (props.elementType) {
    case "input":
      inputField = (
        <input
          className={inputClassName.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.valueChange}
        />
      );
      break;
    default:
      break;
  }

  return (
    <div className="input">
      <label>{props.elementConfig.placeholder}</label>
      {inputField}
    </div>
  );
};

export default Input;
