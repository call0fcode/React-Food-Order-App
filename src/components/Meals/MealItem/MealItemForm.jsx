import React from "react";
import PropTypes from "prop-types";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = ({ mealID }) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: mealID,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button}>+ Add</button>
    </form>
  );
};

MealItemForm.propTypes = {
  mealID: PropTypes.string.isRequired,
};

export default MealItemForm;
