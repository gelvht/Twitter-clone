import classNames from "classnames";
import { useState } from "react";
import classes from "./Input.module.css";

const Input = ({ type, label, id ,value, change}) => {
  const [isActive, setIsActive] = useState(true);
  const focusHandler = () => {
    setIsActive((current) => !current);
  };
  const focusLabel = [classes.input__label, classes.input__label__focus];
  const focusInput = [classes.input, classes.input__focus];
  return (
    <div className={classes.input__container}>
      <label
        htmlFor={id}
        className={classNames(isActive ? classes.input__label : focusLabel)}
      >
        {label}
      </label>
      <input
        type={type}
        className={classNames(isActive ? classes.input : focusInput)}
        onFocus={focusHandler}
        id={id}
        value={value}
        onChange={change}
        required
      />
    </div>
  );
};
export default Input;
