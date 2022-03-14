import React from "react";
import PropTypes from "prop-types";

import MealItemForm from "./MealItemForm";

import classes from "./MealItem.module.css";

const MealItem = ({ meal }) => {
  const price = `$${meal.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm meal={meal} />
      </div>
    </li>
  );
};

MealItem.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default MealItem;
