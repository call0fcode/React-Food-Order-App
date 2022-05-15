import { useRef, useState } from "react";

// Styles
import classes from "./Checkout.module.css";

// Helper functions
const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = ({ onConfirm, onCancel, submitError }) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    postal: true,
    city: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    let formIsValid = false;

    setFormInputsValidity({
      name: !isEmpty(enteredName),
      address: !isEmpty(enteredAddress),
      postal: isFiveChars(enteredPostal),
      city: !isEmpty(enteredCity),
    });

    if (
      !isEmpty(enteredName) &&
      !isEmpty(enteredAddress) &&
      !isEmpty(enteredCity) &&
      isFiveChars(enteredPostal)
    ) {
      formIsValid = true;
    }

    if (!formIsValid) {
      return;
    }

    onConfirm({
      name: enteredName,
      address: enteredAddress,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  const getControlClasses = (controlName) => {
    return formInputsValidity[controlName]
      ? `${classes.control}`
      : `${classes.control} ${classes.invalid}`;
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={getControlClasses("name")}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={getControlClasses("address")}>
        <label htmlFor="address">Address</label>
        <input ref={addressInputRef} type="text" id="address" />
        {!formInputsValidity.address && <p>Please enter a valid address!</p>}
      </div>
      <div className={getControlClasses("postal")}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInputRef} type="text" id="postal" />
        {!formInputsValidity.postal && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div className={getControlClasses("city")}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      {submitError && <p className={classes.invalid}>{submitError}</p>}
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
