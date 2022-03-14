import React, { useContext } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// Contexts
import CartContext from "../../context/cartContext";
// Styles
import classes from "./Modal.module.css";

// Helper components
const Backdrop = () => {
  const context = useContext(CartContext);

  const closeCart = () => {
    context.setcartIsOpen(false);
  };

  return <div className={classes.backdrop} onClick={closeCart}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

// Actual file component
const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
