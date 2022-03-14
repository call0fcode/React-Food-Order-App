import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  );
});

Input.displayName = "Input";

Input.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
};

export default Input;
